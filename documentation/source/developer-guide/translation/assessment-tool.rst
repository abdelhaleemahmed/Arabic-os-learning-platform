Translation Assessment Tool
============================

The Translation Assessment Tool (``translation_assessment.py``) is a comprehensive utility that analyzes translation coverage across all documentation files, providing detailed statistics and actionable recommendations for translation teams.

Overview
========

This tool helps translation teams and project managers:

* **Track translation progress** across all documentation sections
* **Identify priority files** for translation work
* **Monitor quality metrics** and completion percentages
* **Generate professional reports** for project planning
* **Optimize translation workflows** with data-driven insights

The tool analyzes all ``.po`` files in the project and provides both detailed reports and quick summaries with visual indicators for easy assessment.

Installation and Setup
======================

The assessment tool is included in the documentation repository and requires no additional installation beyond the standard Sphinx environment.

**Prerequisites:**

* Python 3.7 or higher
* Standard gettext tools (``msgfmt``, ``msgcat``, ``msgattrib``)
* Access to the documentation repository

**Verification:**

.. code-block:: bash

   # Ensure you're in the docs directory
   cd /path/to/docs

   # Verify the tool exists
   python3 translation_assessment.py --help

Basic Usage
===========

Detailed Report
---------------

Generate a comprehensive translation status report:

.. code-block:: bash

   python3 translation_assessment.py

This produces a detailed report with:

* **File categorization** by documentation section
* **Visual progress indicators** (✅🟡🟠❌)
* **Completion percentages** and message counts
* **Priority recommendations** for next translation work
* **Overall project statistics** with progress visualization

**Sample Output:**

.. code-block:: text

   === Translation Assessment Report for AR ===
   Total .po files found: 24
   ============================================================

   📁 User Guide - Tools
   --------------------------------------------------
   ✅ index                      27/27  ( 100.0%)
   🟠 arabic-typing              41/238 (  17.2%)
   🟠 memory-layout              10/170 (   5.9%)
   ❌ assembly-simulator          0/259 (   0.0%)

   📊 User Guide - Tools Summary: 78/694 (11.2%)

   ============================================================
   📈 OVERALL SUMMARY
   ============================================================
   Total Messages: 2825
   Translated: 253
   Overall Coverage: 9.0%
   Progress: [███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 9.0%

   🎯 PRIORITY RECOMMENDATIONS:

   ❗ Files needing translation (13 files):
      • assembly-simulator (259 messages)
      • arabic-style-guide (217 messages)
      • font-renderer (199 messages)

Simple Summary
--------------

For quick status checks, use the simple format:

.. code-block:: bash

   python3 translation_assessment.py --simple

**Sample Output:**

.. code-block:: text

   Translation Status Summary (AR):
   --------------------------------------------------
   ✅ index: 63/63 (100.0%)
   🟠 arabic-typing: 41/238 (17.2%)
   🟠 memory-layout: 10/170 (5.9%)
   ❌ assembly-simulator: 0/259 (0.0%)

Advanced Options
================

Language Selection
------------------

Analyze translations for different target languages:

.. code-block:: bash

   # Arabic (default)
   python3 translation_assessment.py --language ar
   python3 translation_assessment.py -l ar

   # Other languages (if configured)
   python3 translation_assessment.py --language fr
   python3 translation_assessment.py --language es

Custom Locale Directory
-----------------------

Specify a custom path to translation files:

.. code-block:: bash

   python3 translation_assessment.py --locale-dir /custom/path/locales

Understanding Status Indicators
===============================

Visual Indicators
-----------------

The tool uses color-coded indicators for quick status assessment:

.. list-table:: Status Indicators
   :header-rows: 1
   :widths: 10 20 70

   * - Icon
     - Coverage
     - Description
   * - ✅
     - 90-100%
     - **Complete/Ready** - File is fully or nearly fully translated
   * - 🟡
     - 50-89%
     - **Good Progress** - Substantial translation work completed
   * - 🟠
     - 1-49%
     - **In Progress** - Translation started but significant work remains
   * - ❌
     - 0%
     - **Not Started** - No translation work has begun

File Categories
---------------

Files are automatically organized into logical categories:

**Root/Other**
   Main documentation files and uncategorized content

**User Guide - General**
   General user documentation and getting started guides

**User Guide - Tools**
   Interactive learning tool documentation

**Developer Guide**
   Technical documentation for developers and contributors

**Educator Guide**
   Educational materials and curriculum guides

Priority Recommendations
========================

The tool provides actionable recommendations in two categories:

Untranslated Files (❗)
-----------------------

Files with 0% translation coverage, sorted by message count (highest impact first):

.. code-block:: text

   ❗ Files needing translation (3 files):
      • assembly-simulator (259 messages)
      • arabic-style-guide (217 messages)
      • font-renderer (199 messages)

**Strategy:** Start with the largest files for maximum impact on overall coverage.

Partial Files (🟡)
-------------------

Files with incomplete translations, sorted by completion percentage:

.. code-block:: text

   🟡 Files needing completion (2 files):
      • memory-layout (160 messages remaining, 5.9% done)
      • arabic-typing (197 messages remaining, 17.2% done)

**Strategy:** Complete files with higher percentages first for quick wins.

Professional Workflow Integration
==================================

Project Planning
----------------

Use assessment reports for:

* **Sprint planning** - Assign translation work based on file priorities
* **Resource allocation** - Estimate translation effort using message counts
* **Milestone tracking** - Monitor progress toward coverage goals
* **Quality metrics** - Track improvements over time

Regular Monitoring
------------------

Integrate assessment into your workflow:

.. code-block:: bash

   # Daily quick check
   python3 translation_assessment.py --simple

   # Weekly detailed review
   python3 translation_assessment.py > weekly_translation_report.txt

   # Before releases
   python3 translation_assessment.py | grep -E "(Overall Coverage|PRIORITY)"

Continuous Integration
----------------------

The tool can be integrated into CI/CD pipelines:

.. code-block:: bash

   #!/bin/bash
   # Translation coverage check script

   COVERAGE=$(python3 translation_assessment.py --simple | grep "Overall Coverage" | grep -o "[0-9.]*%")
   THRESHOLD="80%"

   if [[ $(echo "$COVERAGE < $THRESHOLD" | bc -l) ]]; then
       echo "❌ Translation coverage $COVERAGE below threshold $THRESHOLD"
       exit 1
   else
       echo "✅ Translation coverage $COVERAGE meets threshold"
       exit 0
   fi

Automation and Scripting
=========================

Batch Analysis
--------------

Analyze multiple languages at once:

.. code-block:: bash

   #!/bin/bash
   # Multi-language assessment

   for lang in ar fr es; do
       echo "=== $lang ==="
       python3 translation_assessment.py --language $lang --simple
       echo ""
   done

Progress Tracking
-----------------

Track progress over time:

.. code-block:: bash

   #!/bin/bash
   # Progress tracking script

   DATE=$(date +%Y-%m-%d)
   REPORT_FILE="translation_progress_$DATE.txt"

   echo "Translation Progress Report - $DATE" > $REPORT_FILE
   echo "===========================================" >> $REPORT_FILE
   python3 translation_assessment.py >> $REPORT_FILE

   echo "Report saved to: $REPORT_FILE"

Troubleshooting
===============

Common Issues
-------------

**Tool not found:**

.. code-block:: bash

   # Ensure you're in the correct directory
   cd /path/to/docs
   ls translation_assessment.py

**Permission errors:**

.. code-block:: bash

   # Make the script executable
   chmod +x translation_assessment.py

**msgfmt command not found:**

.. code-block:: bash

   # Install gettext tools
   # Ubuntu/Debian:
   sudo apt install gettext

   # macOS:
   brew install gettext

   # RHEL/CentOS:
   sudo yum install gettext

**Empty or incorrect results:**

.. code-block:: bash

   # Verify .po file structure
   ls -la locales/ar/LC_MESSAGES/

   # Check for valid .po files
   find locales/ar -name "*.po" | head -5

Best Practices
==============

For Translation Teams
---------------------

1. **Start each session** with a status check
2. **Focus on priority files** identified by the tool
3. **Track progress regularly** using simple summaries
4. **Complete partial files** before starting new ones
5. **Use detailed reports** for planning and documentation

For Project Managers
---------------------

1. **Generate weekly reports** for stakeholder updates
2. **Set coverage targets** and track progress toward goals
3. **Identify bottlenecks** using file-specific statistics
4. **Plan releases** around translation milestones
5. **Recognize contributors** using completion metrics

For Quality Assurance
----------------------

1. **Monitor completion rates** across all file categories
2. **Identify inconsistencies** in translation coverage
3. **Validate improvements** after translation updates
4. **Track translation velocity** over time
5. **Ensure balanced coverage** across documentation sections

Integration with Translation Tools
==================================

The assessment tool complements existing translation workflows:

**With Poedit:**
   Use assessment reports to prioritize which .po files to open in Poedit.

**With CAT Tools:**
   Export priority lists for translation memory integration.

**With Web Platforms:**
   Generate status reports for web-based translation platforms.

**With Project Management:**
   Import statistics into project tracking tools for planning.

Contributing
============

The translation assessment tool is part of the Arabic OS documentation project. To contribute improvements:

1. **Feature Requests:** Submit issues for new functionality
2. **Bug Reports:** Report problems with analysis accuracy
3. **Enhancements:** Propose improvements to reporting or categorization
4. **Documentation:** Help improve this usage guide

**Tool Location:** ``docs/translation_assessment.py``

**Repository:** Arabic OS Documentation Project

See Also
========

* :doc:`translation-workflow` - Complete translation process
* :doc:`quality-assurance` - Translation quality guidelines
* :doc:`translator-setup` - Environment setup for translators
* :doc:`quick-reference` - Translation quick reference guide