#!/usr/bin/env python3
"""
Translation Assessment Tool for Arabic OS Documentation

This script analyzes .po files to provide detailed translation coverage statistics.
"""

import os
import re
import subprocess
from pathlib import Path
import argparse
from collections import defaultdict
import sys


class TranslationAssessment:
    def __init__(self, locale_dir="locales"):
        self.locale_dir = Path(locale_dir)
        self.stats = defaultdict(dict)

    def get_po_files(self, language="ar"):
        """Find all .po files for a given language"""
        pattern = f"**/{language}/LC_MESSAGES/**/*.po"
        return list(self.locale_dir.glob(pattern))

    def analyze_po_file(self, po_file):
        """Analyze a single .po file and return statistics"""
        try:
            # Use msgfmt to get basic statistics
            result = subprocess.run(
                ['msgfmt', '--statistics', str(po_file)],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )

            # Parse msgfmt output (msgfmt sends statistics to stderr)
            output = result.stderr.strip() if result.stderr else result.stdout.strip()

            # Initialize counters
            translated = 0
            untranslated = 0
            fuzzy = 0

            # Parse the statistics line
            if "translated message" in output:
                translated_match = re.search(r'(\d+) translated message', output)
                if translated_match:
                    translated = int(translated_match.group(1))

            if "untranslated message" in output:
                untranslated_match = re.search(r'(\d+) untranslated message', output)
                if untranslated_match:
                    untranslated = int(untranslated_match.group(1))

            if "fuzzy translation" in output:
                fuzzy_match = re.search(r'(\d+) fuzzy translation', output)
                if fuzzy_match:
                    fuzzy = int(fuzzy_match.group(1))

            total = translated + untranslated + fuzzy
            percentage = (translated / total * 100) if total > 0 else 0

            return {
                'file': po_file,
                'translated': translated,
                'untranslated': untranslated,
                'fuzzy': fuzzy,
                'total': total,
                'percentage': percentage,
                'msgfmt_output': output
            }

        except Exception as e:
            return {
                'file': po_file,
                'error': str(e),
                'translated': 0,
                'untranslated': 0,
                'fuzzy': 0,
                'total': 0,
                'percentage': 0
            }

    def categorize_files(self, po_files):
        """Categorize .po files by documentation section"""
        categories = defaultdict(list)

        for po_file in po_files:
            path_parts = po_file.parts

            if 'user-guide' in path_parts:
                if 'tools' in path_parts:
                    categories['User Guide - Tools'].append(po_file)
                else:
                    categories['User Guide - General'].append(po_file)
            elif 'developer-guide' in path_parts:
                categories['Developer Guide'].append(po_file)
            elif 'educator-guide' in path_parts:
                categories['Educator Guide'].append(po_file)
            else:
                categories['Root/Other'].append(po_file)

        return categories

    def print_detailed_report(self, language="ar"):
        """Generate and print a detailed translation report"""
        po_files = self.get_po_files(language)

        if not po_files:
            print(f"No .po files found for language: {language}")
            return

        print(f"=== Translation Assessment Report for {language.upper()} ===")
        print(f"Total .po files found: {len(po_files)}")
        print("=" * 60)

        # Categorize files
        categories = self.categorize_files(po_files)

        overall_translated = 0
        overall_total = 0
        all_stats = []

        for category, files in categories.items():
            print(f"\n📁 {category}")
            print("-" * 50)

            category_translated = 0
            category_total = 0

            for po_file in sorted(files):
                stats = self.analyze_po_file(po_file)
                all_stats.append(stats)

                # Get relative path for cleaner display
                rel_path = po_file.relative_to(self.locale_dir)
                filename = po_file.stem

                if 'error' in stats:
                    print(f"❌ {filename:<25} ERROR: {stats['error']}")
                    continue

                # Determine status icon
                if stats['percentage'] >= 90:
                    icon = "✅"
                elif stats['percentage'] >= 50:
                    icon = "🟡"
                elif stats['percentage'] > 0:
                    icon = "🟠"
                else:
                    icon = "❌"

                print(f"{icon} {filename:<25} {stats['translated']:>3}/{stats['total']:<3} "
                      f"({stats['percentage']:>6.1f}%) "
                      f"{'[fuzzy: ' + str(stats['fuzzy']) + ']' if stats['fuzzy'] > 0 else ''}")

                category_translated += stats['translated']
                category_total += stats['total']

            if category_total > 0:
                category_percentage = category_translated / category_total * 100
                print(f"\n📊 {category} Summary: {category_translated}/{category_total} "
                      f"({category_percentage:.1f}%)")

            overall_translated += category_translated
            overall_total += category_total

        # Overall summary
        print("\n" + "=" * 60)
        print("📈 OVERALL SUMMARY")
        print("=" * 60)

        if overall_total > 0:
            overall_percentage = overall_translated / overall_total * 100
            print(f"Total Messages: {overall_total}")
            print(f"Translated: {overall_translated}")
            print(f"Overall Coverage: {overall_percentage:.1f}%")

            # Progress bar
            bar_length = 40
            filled_length = int(bar_length * overall_translated / overall_total)
            bar = "█" * filled_length + "░" * (bar_length - filled_length)
            print(f"Progress: [{bar}] {overall_percentage:.1f}%")

        # Recommendations
        print("\n🎯 PRIORITY RECOMMENDATIONS:")

        # Find files with 0% translation
        untranslated = [s for s in all_stats if s.get('percentage', 0) == 0 and s.get('total', 0) > 0]
        if untranslated:
            print(f"\n❗ Files needing translation ({len(untranslated)} files):")
            for stats in sorted(untranslated, key=lambda x: x.get('total', 0), reverse=True):
                filename = stats['file'].stem
                print(f"   • {filename} ({stats['total']} messages)")

        # Find files with partial translation
        partial = [s for s in all_stats if 0 < s.get('percentage', 0) < 90 and s.get('total', 0) > 0]
        if partial:
            print(f"\n🟡 Files needing completion ({len(partial)} files):")
            for stats in sorted(partial, key=lambda x: x.get('percentage', 0)):
                filename = stats['file'].stem
                remaining = stats['total'] - stats['translated']
                print(f"   • {filename} ({remaining} messages remaining, {stats['percentage']:.1f}% done)")

        return all_stats

    def print_simple_summary(self, language="ar"):
        """Print a simple one-line summary per file"""
        po_files = self.get_po_files(language)

        print(f"Translation Status Summary ({language.upper()}):")
        print("-" * 50)

        for po_file in sorted(po_files):
            stats = self.analyze_po_file(po_file)
            filename = po_file.stem

            if 'error' in stats:
                print(f"{filename}: ERROR")
                continue

            status = "✅" if stats['percentage'] >= 90 else "🟡" if stats['percentage'] >= 50 else "🟠" if stats['percentage'] > 0 else "❌"
            print(f"{status} {filename}: {stats['translated']}/{stats['total']} ({stats['percentage']:.1f}%)")


def main():
    parser = argparse.ArgumentParser(description="Assess translation coverage for documentation")
    parser.add_argument("--language", "-l", default="ar", help="Language code (default: ar)")
    parser.add_argument("--simple", "-s", action="store_true", help="Simple summary format")
    parser.add_argument("--locale-dir", default="locales", help="Path to locales directory")

    args = parser.parse_args()

    # Change to the script directory to find locales
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    assessor = TranslationAssessment(args.locale_dir)

    if args.simple:
        assessor.print_simple_summary(args.language)
    else:
        assessor.print_detailed_report(args.language)


if __name__ == "__main__":
    main()