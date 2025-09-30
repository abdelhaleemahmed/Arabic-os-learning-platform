# Translation Tools

Professional tools for managing Arabic OS platform translations and localization workflows.

## 🔧 Available Tools

### Translation Assessment Tool
**File**: `translation_assessment.py`
**Version**: 1.0
**License**: Educational Use

A comprehensive utility for analyzing translation coverage across documentation projects using the gettext workflow.

#### Features
- **📊 Coverage Analysis**: Detailed statistics for all .po translation files
- **🎯 Priority Recommendations**: Identifies files needing urgent translation work
- **📈 Progress Tracking**: Visual indicators and percentage completion
- **🌍 Multi-language Support**: Works with any gettext-based translation project
- **🤖 Automation Ready**: Perfect for CI/CD and automated reporting

#### Quick Start

**Download**:
```bash
wget https://raw.githubusercontent.com/YOUR_USERNAME/REPO_NAME/main/tools/translation/translation_assessment.py
chmod +x translation_assessment.py
```

**Usage**:
```bash
# Quick status overview
python3 translation_assessment.py --simple

# Detailed analysis with recommendations
python3 translation_assessment.py

# Help and all options
python3 translation_assessment.py --help
```

#### Prerequisites
- Python 3.7+
- GNU gettext tools (`msgfmt`, `msgcat`, `msgattrib`)
- Project with `.po` translation files in `locales/` directory

#### Example Output

**Simple Format**:
```
Translation Status Summary (AR):
--------------------------------------------------
✅ user-guide/index: 63/63 (100.0%)
🟠 developer-guide/translation/assessment-tool: 32/137 (23.4%)
❌ developer-guide/translation/workflow: 0/130 (0.0%)

Overall Coverage: 895/2847 (31.4%)
PRIORITY: Focus on workflow (0.0%) and assessment-tool (23.4%)
```

**Detailed Format**:
```
=== ARABIC OS PLATFORM TRANSLATION ASSESSMENT ===

📊 TRANSLATION PROGRESS BY SECTION:

🎓 User Guides:
  ✅ tools/index.po: 27/27 (100.0%) - Complete
  🟠 tools/memory-layout.po: 10/170 (5.9%) - PRIORITY: Needs significant work

👨‍💻 Developer Guides:
  🟡 translation/index.po: 3/89 (3.4%) - PRIORITY: High-value content
  🟠 translation/assessment-tool.po: 32/137 (23.4%) - PRIORITY: In progress

📈 OVERALL PROJECT STATISTICS:
- Total Messages: 2,847
- Translated: 895 (31.4%)
- Untranslated: 1,952 (68.6%)

🎯 PRIORITY RECOMMENDATIONS:
1. developer-guide/translation/translation-workflow.po (0.0%) - Critical documentation
2. user-guide/tools/assembly-simulator.po (0.0%) - High-impact user content
3. user-guide/tools/font-renderer.po (0.0%) - Important technical tool
```

#### Advanced Usage

**Custom Options**:
```bash
# Analyze specific language
python3 translation_assessment.py --language fr

# Custom locales directory
python3 translation_assessment.py --locale-dir /path/to/locales

# Generate report file
python3 translation_assessment.py > translation_report.txt

# Focus on high-priority items only
python3 translation_assessment.py | grep -E "(❌|PRIORITY)"
```

**Integration Examples**:
```bash
# Git pre-commit hook
#!/bin/bash
COVERAGE=$(python3 tools/translation/translation_assessment.py --simple | grep "Overall Coverage" | grep -o "[0-9.]*%")
echo "Translation coverage: $COVERAGE"

# CI/CD pipeline check
python3 translation_assessment.py --simple | grep -q "100.0%" && echo "✅ Complete" || echo "⚠️ Needs work"

# Weekly reporting
python3 translation_assessment.py > reports/weekly_$(date +%Y%m%d).txt
```

#### Troubleshooting

**Common Issues**:
```bash
# Error: "msgfmt: command not found"
sudo apt install gettext  # Ubuntu/Debian
brew install gettext      # macOS

# Error: "No .po files found"
# Ensure you're in project root with locales/ directory
ls locales/*/LC_MESSAGES/*.po

# Error: "Permission denied"
chmod +x translation_assessment.py
```

#### Configuration

The tool automatically detects:
- **Locale directory**: `locales/` (customizable with `--locale-dir`)
- **Target language**: `ar` (Arabic) by default (customizable with `--language`)
- **File patterns**: `*.po` files in standard gettext structure

#### Integration with Documentation

This tool integrates with the Arabic OS documentation system:
- **Build Process**: Included in `update_and_deploy.sh`
- **Quality Gates**: Used in translation workflow validation
- **Reporting**: Generates progress reports for team coordination
- **CI/CD**: Automated translation coverage checks

For complete documentation, see: `/documentation/html-en/developer-guide/translation/assessment-tool.html`

---

**🔗 Related Tools**: [All Tools](../) | [Documentation Tools](../documentation/) | [Build Tools](../build/)