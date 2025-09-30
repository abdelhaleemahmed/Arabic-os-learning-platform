Quick Reference: .po File Generation and Translation
====================================================

This quick reference guide provides the essential steps for generating .po translation files and translating Arabic OS Platform documentation. Use this alongside the comprehensive :doc:`translator-setup` and :doc:`translation-workflow` guides.

Prerequisites Checklist
========================

**Required Software:**

.. code-block:: bash

   # Check if you have these installed:
   python3 --version    # Python 3.8+
   git --version        # Git 2.20+
   # Optional but recommended:
   poedit --version     # Poedit for GUI translation

**Required Setup:**

.. code-block:: text

   ✓ GitHub account with repository access
   ✓ Local repository clone
   ✓ Python virtual environment configured
   ✓ Sphinx and dependencies installed

Step 1: Environment Setup (5 minutes)
======================================

**Clone and Prepare:**

.. code-block:: bash

   # Clone repository (replace YOUR-USERNAME)
   git clone https://github.com/YOUR-USERNAME/documentation
   cd documentation/docs

   # Create and activate virtual environment
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate  # Linux/macOS
   # sphinx-env\Scripts\activate   # Windows

   # Install dependencies
   pip install -r requirements.txt

   # Verify Sphinx installation
   sphinx-build --version

Step 2: Generate Translation Files (2 minutes)
===============================================

**Extract Translatable Strings:**

.. code-block:: bash

   # Extract all translatable messages to .pot files
   make gettext

   # Alternative command:
   # sphinx-build -M gettext source build/gettext

**Create/Update Arabic .po Files:**

.. code-block:: bash

   # Generate Arabic translation files
   sphinx-intl update -p build/gettext/gettext -l ar

   # This creates/updates files in: locales/ar/LC_MESSAGES/

**Verify File Generation:**

.. code-block:: bash

   # Check generated files
   find locales/ar/LC_MESSAGES -name "*.po" | head -10

   # Should show files like:
   # locales/ar/LC_MESSAGES/index.po
   # locales/ar/LC_MESSAGES/user-guide/index.po
   # locales/ar/LC_MESSAGES/developer-guide/index.po

Step 3: Translation Process
===========================

**File Structure Overview:**

.. code-block:: text

   locales/ar/LC_MESSAGES/
   ├── index.po                    # Main page (START HERE)
   ├── user-guide/
   │   ├── index.po               # User guide main
   │   └── tools/
   │       ├── cp1256-explorer.po
   │       ├── utf8-visualizer.po
   │       └── [other tools].po
   ├── developer-guide/
   │   ├── index.po
   │   └── translation/
   │       ├── index.po
   │       └── [translation docs].po
   └── educator-guide/
       └── [educator files].po

**Translation Methods:**

**Method 1: Poedit (Recommended)**

.. code-block:: text

   1. Launch Poedit
   2. File → Open → Select .po file
   3. Translate strings one by one:
      - English source → Arabic translation
   4. Save frequently (Ctrl+S)
   5. File → Compile MO when done

**Method 2: Text Editor**

.. code-block:: po

   # Edit .po files directly
   #: source/index.rst:2
   msgid "Documentation"
   msgstr "الوثائق"

   #: source/index.rst:4
   msgid "Welcome to our platform"
   msgstr "مرحباً بكم في منصتنا"

**Method 3: Web Tools**

.. code-block:: text

   1. Upload .po file to Weblate/Crowdin
   2. Translate online
   3. Download completed .po file
   4. Replace local file

**Priority Translation Order:**

.. code-block:: text

   Recommended sequence:
   1. index.po                     # Main page
   2. user-guide/index.po          # User guide overview
   3. user-guide/tools/index.po    # Tools overview
   4. developer-guide/index.po     # Developer guide
   5. Individual tool files        # Specific tools
   6. Advanced sections            # Reference materials

Step 4: Build and Test (2 minutes)
===================================

**Build Arabic Documentation:**

.. code-block:: bash

   # Build Arabic version
   make html-ar

   # Alternative:
   # sphinx-build -b html -D language=ar source build/html-ar

**Verify Translation:**

.. code-block:: bash

   # Check build success
   ls build/html-ar/

   # Open in browser
   open build/html-ar/index.html      # macOS
   # xdg-open build/html-ar/index.html  # Linux
   # start build/html-ar/index.html     # Windows

**Quality Check:**

.. code-block:: text

   Visual verification:
   ✓ Arabic text displays correctly (RTL)
   ✓ No English text in Arabic version
   ✓ Navigation works properly
   ✓ Fonts render correctly
   ✓ No layout issues

Step 5: Commit and Share
========================

**Commit Your Work:**

.. code-block:: bash

   # Create feature branch
   git checkout -b arabic-translation-SECTION

   # Add translated files
   git add locales/ar/LC_MESSAGES/

   # Commit with descriptive message
   git commit -m "Add Arabic translation for [section name]

   - Translate main headings and content
   - Follow Arabic style guide
   - Build tested successfully"

   # Push to your fork
   git push origin arabic-translation-SECTION

Common Commands Reference
=========================

**Essential Commands:**

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Task
     - Command
   * - Generate .po files
     - ``make gettext && sphinx-intl update -p build/gettext/gettext -l ar``
   * - Build Arabic docs
     - ``make html-ar``
   * - Check translation stats
     - ``msgfmt --statistics file.po``
   * - Find untranslated
     - ``grep -l 'msgstr ""' locales/ar/LC_MESSAGES/*.po``
   * - Clean build
     - ``make clean``

**File Operations:**

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Task
     - Command
   * - List all .po files
     - ``find locales/ar/LC_MESSAGES -name "*.po"``
   * - Count translations
     - ``find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --statistics {} \;``
   * - Backup translations
     - ``cp -r locales/ar backup-$(date +%Y%m%d)``

Troubleshooting Quick Fixes
============================

**Common Issues:**

.. list-table::
   :header-rows: 1
   :widths: 25 35 40

   * - Problem
     - Cause
     - Solution
   * - "sphinx-build not found"
     - Virtual environment not active
     - ``source sphinx-env/bin/activate``
   * - "No .po files generated"
     - gettext step skipped
     - ``make gettext`` first
   * - "Arabic text shows as boxes"
     - Missing Arabic fonts
     - Install fonts: ``apt install fonts-noto``
   * - "Build warnings"
     - Untranslated strings
     - Continue translating or ignore
   * - "RTL layout broken"
     - CSS/theme issue
     - Check browser Arabic support

**Emergency Recovery:**

.. code-block:: bash

   # Reset environment
   rm -rf sphinx-env
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

   # Regenerate .po files
   make gettext
   sphinx-intl update -p build/gettext/gettext -l ar

Translation Statistics and Progress
===================================

**Check Your Progress:**

.. code-block:: bash

   # Overall statistics
   find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --statistics {} \; | \
   awk '{total+=$1; translated+=$4} END {print "Progress: " translated"/"total" ("int(translated/total*100)"%)"}'

   # Per-file progress
   for file in locales/ar/LC_MESSAGES/*.po; do
       echo "=== $(basename $file) ==="
       msgfmt --statistics "$file"
   done

**Translation Priorities:**

.. code-block:: text

   High Priority (User-facing):
   □ index.po                     # Main landing page
   □ user-guide/index.po          # Getting started
   □ user-guide/tools/index.po    # Tools overview

   Medium Priority (Educational):
   □ user-guide/tools/*.po        # Individual tools
   □ developer-guide/index.po     # Developer overview

   Low Priority (Reference):
   □ developer-guide/api/*.po     # API documentation
   □ reference/*.po               # Technical reference

Quick Start Workflow Summary
=============================

**Complete Workflow (15 minutes):**

.. code-block:: bash

   # 1. Setup (once)
   git clone https://github.com/YOUR-USERNAME/documentation
   cd documentation/docs
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

   # 2. Generate files (each update)
   make gettext
   sphinx-intl update -p build/gettext/gettext -l ar

   # 3. Translate (ongoing)
   poedit locales/ar/LC_MESSAGES/index.po
   # OR edit directly with text editor

   # 4. Test
   make html-ar
   open build/html-ar/index.html

   # 5. Commit
   git add locales/ar/LC_MESSAGES/
   git commit -m "Add Arabic translations"
   git push origin your-branch

**Next Steps:**

1. Review :doc:`arabic-style-guide` for translation standards
2. Join translator community channels
3. Request assignment for specific documentation sections
4. Follow :doc:`quality-assurance` process for review

**Success Metrics:**

- **Week 1:** Complete environment setup, translate 1-2 small files
- **Week 2:** Complete major index page translations
- **Month 1:** Significant contribution to user-facing documentation
- **Ongoing:** Regular contributions, help onboard new translators

This quick reference covers the essential workflow. For detailed explanations, troubleshooting, and best practices, refer to the comprehensive guides in this section.