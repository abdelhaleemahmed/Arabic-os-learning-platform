Translator Setup Guide
======================

This comprehensive guide helps translators set up their environment for contributing Arabic translations to the Arabic OS Platform documentation. Whether you're a professional translator or a community volunteer, this guide provides everything you need to start contributing.

Prerequisites
=============

Before setting up your translation environment, ensure you have:

**Technical Requirements**

* **Operating System**: Windows 10+, macOS 10.14+, or Linux (Ubuntu 18.04+)
* **Internet Connection**: Required for repository access and tool downloads
* **Storage Space**: At least 2GB free disk space
* **Memory**: Minimum 4GB RAM recommended

**Language Expertise**

* **Arabic Proficiency**: Native or near-native Arabic fluency
* **Technical Understanding**: Familiarity with computing and technology concepts
* **English Reading**: Ability to understand technical English source material
* **Cultural Awareness**: Understanding of Arabic cultural context in technical communication

**Optional but Helpful**

* **Translation Experience**: Previous translation work (any domain)
* **Arabic Computing Background**: Knowledge of Arabic text processing
* **Open Source Familiarity**: Experience with collaborative development

Setup Overview
==============

The translator setup process involves:

1. **Account Setup** - GitHub account and repository access
2. **Development Environment** - Git, Python, and Sphinx installation
3. **Translation Tools** - Poedit or alternative translation editors
4. **Project Access** - Repository cloning and initial setup
5. **Workflow Testing** - Verify translation workflow functionality

Step 1: Account and Access Setup
=================================

GitHub Account Creation
-----------------------

**Create GitHub Account:**

1. Visit https://github.com and click "Sign up"
2. Choose username (suggestion: include your name for recognition)
3. Use professional email address
4. Complete verification process

**Profile Optimization:**

.. code-block:: text

   Profile Setup Checklist:
   □ Add professional profile photo
   □ Include full name in Arabic and English
   □ Add bio mentioning Arabic translation expertise
   □ Include contact information (optional)
   □ Enable two-factor authentication for security

**Example Profile:**

.. code-block:: text

   Name: أحمد محمد الترجمان | Ahmed Mohammed Al-Tarjuman
   Bio: Professional Arabic translator specializing in technical content
        مترجم عربي محترف متخصص في المحتوى التقني
   Location: Cairo, Egypt | القاهرة، مصر

Repository Access Request
-------------------------

**Join Translation Team:**

1. **Fork Repository**

   .. code-block:: bash

      # Visit: https://github.com/arabic-os/documentation
      # Click "Fork" button
      # Select your account as fork destination

2. **Request Translator Access**

   Create issue for access request:

   .. code-block:: markdown

      **Translation Access Request**

      **Name**: Ahmed Al-Tarjuman (أحمد الترجمان)
      **Languages**: Arabic (native), English (fluent)
      **Experience**: 5 years technical translation, specializing in software documentation
      **Availability**: 10-15 hours per week
      **Areas of Interest**: User guides, technical documentation, educational content
      **GitHub Profile**: @ahmed-translator
      **Contact**: ahmed.translator@email.com

      **Previous Work**:
      - Translated Mozilla Firefox documentation
      - Contributed to Wikipedia Arabic technology articles
      - Freelance technical translation for software companies

      **Commitment**: I understand the quality standards and commit to following
      the Arabic Style Guide and translation workflow processes.

3. **Team Assignment**

   Project coordinators will:
   - Review your qualifications
   - Assign appropriate repository permissions
   - Add you to translator team
   - Provide initial assignment guidance

Step 2: Development Environment Setup
====================================

Git Installation and Configuration
----------------------------------

**Install Git:**

.. tabs::

   .. tab:: Windows

      .. code-block:: bash

         # Download Git for Windows from: https://git-scm.com/download/win
         # Run installer with default options
         # Verify installation
         git --version

   .. tab:: macOS

      .. code-block:: bash

         # Using Homebrew (recommended)
         brew install git

         # Or download from: https://git-scm.com/download/mac
         # Verify installation
         git --version

   .. tab:: Linux (Ubuntu/Debian)

      .. code-block:: bash

         sudo apt update
         sudo apt install git

         # Verify installation
         git --version

**Configure Git:**

.. code-block:: bash

   # Set your identity (use same as GitHub)
   git config --global user.name "Ahmed Al-Tarjuman"
   git config --global user.email "ahmed.translator@email.com"

   # Set default branch name
   git config --global init.defaultBranch main

   # Enable colors for better readability
   git config --global color.ui auto

   # Configure Arabic text handling
   git config --global core.quotepath false

Python and Sphinx Installation
------------------------------

**Install Python:**

.. tabs::

   .. tab:: Windows

      .. code-block:: bash

         # Download Python 3.9+ from: https://www.python.org/downloads/
         # During installation, check "Add Python to PATH"
         # Verify installation
         python --version
         pip --version

   .. tab:: macOS

      .. code-block:: bash

         # Using Homebrew
         brew install python3

         # Or download from: https://www.python.org/downloads/
         # Verify installation
         python3 --version
         pip3 --version

   .. tab:: Linux (Ubuntu/Debian)

      .. code-block:: bash

         sudo apt update
         sudo apt install python3 python3-pip python3-venv

         # Verify installation
         python3 --version
         pip3 --version

**Set Up Project Environment:**

.. code-block:: bash

   # Clone your forked repository
   git clone https://github.com/YOUR-USERNAME/documentation
   cd documentation/docs

   # Create virtual environment
   python3 -m venv sphinx-env

   # Activate virtual environment
   # On Windows:
   sphinx-env\Scripts\activate
   # On macOS/Linux:
   source sphinx-env/bin/activate

   # Install required packages
   pip install -r requirements.txt

   # Verify Sphinx installation
   sphinx-build --version

Step 3: Translation Tools Installation
======================================

Poedit (Recommended)
-------------------

**Why Poedit:**

* **User-friendly interface** designed specifically for .po file editing
* **Arabic RTL support** with proper text direction handling
* **Translation memory** for consistency across projects
* **Quality assurance features** including spell checking and validation
* **Cross-platform** availability (Windows, macOS, Linux)

**Installation:**

.. tabs::

   .. tab:: Windows

      .. code-block:: bash

         # Download from: https://poedit.net/download
         # Run installer with default options
         # Launch Poedit to verify installation

   .. tab:: macOS

      .. code-block:: bash

         # Using Homebrew
         brew install --cask poedit

         # Or download from: https://poedit.net/download
         # Drag to Applications folder

   .. tab:: Linux (Ubuntu/Debian)

      .. code-block:: bash

         sudo apt update
         sudo apt install poedit

         # Or use Snap
         sudo snap install poedit

**Poedit Configuration for Arabic:**

1. **Launch Poedit** and open Preferences

2. **General Settings:**

   .. code-block:: text

      ✓ Default language: Arabic (ar)
      ✓ Always use Unicode (UTF-8)
      ✓ Automatically compile .mo files
      ✓ Show line numbers in reference

3. **Editor Settings:**

   .. code-block:: text

      ✓ Enable right-to-left text support
      ✓ Font: Amiri or Noto Sans Arabic
      ✓ Font size: 12-14pt for readability
      ✓ Enable spell checking for Arabic

4. **Translation Memory:**

   .. code-block:: text

      ✓ Enable translation memory
      ✓ Create Arabic OS project memory
      ✓ Configure automatic suggestions

**First-Time Setup:**

.. code-block:: text

   1. File → New Translation
   2. Select "Arabic" as target language
   3. Browse to: documentation/docs/locales/ar/LC_MESSAGES/
   4. Open any .po file to test configuration
   5. Verify RTL text display and Arabic font rendering

Alternative Tools
----------------

**For Advanced Users:**

.. list-table:: Alternative Translation Tools
   :header-rows: 1
   :widths: 20 25 30 25

   * - Tool
     - Platform
     - Strengths
     - Best For
   * - Lokalize
     - Linux (KDE)
     - Advanced CAT features, scripting
     - Power users, batch processing
   * - Gtranslator
     - Linux (GNOME)
     - GNOME integration, lightweight
     - Linux-focused workflows
   * - OmegaT
     - Cross-platform
     - CAT tools, project management
     - Large translation projects
   * - Virtaal
     - Cross-platform
     - Quality checks, terminology
     - Quality-focused translation

**Web-Based Options:**

* **Weblate**: Collaborative web-based translation
* **Crowdin**: Professional translation management
* **Transifex**: Enterprise translation platform

**Setup for Web Tools (Optional):**

If using web-based tools, you'll need to:

1. **Export .po files** from local repository
2. **Upload to web platform** for translation
3. **Download completed translations**
4. **Import back to local repository**
5. **Test and commit changes**

Step 4: Project Repository Setup
================================

Repository Cloning and Configuration
------------------------------------

**Clone and Setup:**

.. code-block:: bash

   # Navigate to your development directory
   cd ~/projects  # or your preferred location

   # Clone your forked repository
   git clone https://github.com/YOUR-USERNAME/documentation arabic-os-docs
   cd arabic-os-docs

   # Add upstream repository (original project)
   git remote add upstream https://github.com/arabic-os/documentation

   # Verify remote configuration
   git remote -v

   # Should show:
   # origin    https://github.com/YOUR-USERNAME/documentation (fetch)
   # origin    https://github.com/YOUR-USERNAME/documentation (push)
   # upstream  https://github.com/arabic-os/documentation (fetch)
   # upstream  https://github.com/arabic-os/documentation (push)

**Directory Structure Understanding:**

.. code-block:: text

   arabic-os-docs/
   ├── docs/                          # Main documentation directory
   │   ├── source/                    # Source .rst files (English)
   │   │   ├── user-guide/
   │   │   ├── developer-guide/
   │   │   └── educator-guide/
   │   ├── locales/                   # Translation files
   │   │   └── ar/LC_MESSAGES/        # Arabic translations (.po files)
   │   ├── build/                     # Generated documentation
   │   ├── requirements.txt           # Python dependencies
   │   └── Makefile                   # Build automation
   ├── interactive/                   # Interactive tools
   └── README.md                      # Project information

**Understand Translation File Structure:**

.. code-block:: text

   locales/ar/LC_MESSAGES/
   ├── index.po                       # Main index page
   ├── user-guide/
   │   ├── index.po                   # User guide main page
   │   └── tools/
   │       ├── cp1256-explorer.po     # CP1256 tool documentation
   │       ├── utf8-visualizer.po     # UTF-8 tool documentation
   │       └── [other tool files].po
   ├── developer-guide/
   │   ├── index.po
   │   └── translation/
   │       ├── index.po
   │       ├── translation-workflow.po
   │       └── [other files].po
   └── educator-guide/
       └── [educator files].po

Initial Environment Testing
---------------------------

**Test Sphinx Build:**

.. code-block:: bash

   # Navigate to docs directory
   cd docs

   # Activate virtual environment
   source sphinx-env/bin/activate  # Linux/macOS
   # or sphinx-env\Scripts\activate  # Windows

   # Test English build
   sphinx-build -b html source build/html

   # Test Arabic build (may show warnings for untranslated content)
   sphinx-build -b html -D language=ar source build/html-ar

   # View results
   # English: open build/html/index.html in browser
   # Arabic: open build/html-ar/index.html in browser

**Test Translation File Access:**

.. code-block:: bash

   # Check translation file status
   find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --statistics {} \;

   # Should show translation statistics like:
   # 45 translated messages, 12 untranslated messages, 3 fuzzy translations.

Step 5: Workflow Testing and First Translation
==============================================

Practice Translation Workflow
-----------------------------

**Select Practice File:**

Choose a small file for initial practice:

.. code-block:: bash

   # Good starter files (smaller, less complex):
   locales/ar/LC_MESSAGES/user-guide/tools/cp1256-explorer.po
   locales/ar/LC_MESSAGES/user-guide/index.po

**Open in Poedit:**

1. **Launch Poedit**
2. **File → Open** → Navigate to chosen .po file
3. **Review file contents:**
   - Source English text
   - Existing Arabic translations (if any)
   - Translation status and statistics

**Practice Translation Process:**

1. **Select untranslated string** (shown in red/orange)
2. **Read source text** and context comments
3. **Enter Arabic translation** following style guide
4. **Use translation memory** suggestions if available
5. **Save frequently** (Ctrl+S / Cmd+S)

**Example Practice Translation:**

.. code-block:: po

   # Source (English)
   msgid "Character Encoding Explorer"
   msgstr ""

   # Your Arabic translation
   msgid "Character Encoding Explorer"
   msgstr "مستكشف ترميز الأحرف"

   # With context understanding
   #: ../../../source/user-guide/tools/cp1256-explorer.rst:2
   msgid ""
   "Interactive tool for exploring Arabic character encoding systems"
   msgstr ""
   "أداة تفاعلية لاستكشاف أنظمة ترميز الأحرف العربية"

Test Translation Integration
---------------------------

**Build with Your Translations:**

.. code-block:: bash

   # Activate environment
   source sphinx-env/bin/activate

   # Build Arabic version with your translations
   sphinx-build -b html -D language=ar source build/html-ar

   # Open in browser to review
   open build/html-ar/index.html  # macOS
   # or xdg-open build/html-ar/index.html  # Linux
   # or start build/html-ar/index.html  # Windows

**Quality Check:**

Review your translated content for:

.. code-block:: text

   Visual Check:
   □ Arabic text displays correctly (RTL)
   □ Fonts render properly (Amiri/Noto Sans Arabic)
   □ No mixed LTR/RTL display issues
   □ Navigation works correctly

   Content Check:
   □ Translation accuracy preserved
   □ Technical terms consistent
   □ Cultural appropriateness maintained
   □ No English text in Arabic version

Commit Your Practice Work
------------------------

**Create Feature Branch:**

.. code-block:: bash

   # Create branch for your practice work
   git checkout -b practice-translation

   # Add your translated files
   git add locales/ar/LC_MESSAGES/

   # Commit with descriptive message
   git commit -m "Practice translation: Add Arabic for CP1256 explorer

   - Translate main headings and introduction
   - Follow Arabic style guide for technical terms
   - Test build integration successful"

   # Push to your fork
   git push origin practice-translation

Development Environment Maintenance
===================================

Keeping Environment Updated
---------------------------

**Regular Maintenance Tasks:**

.. code-block:: bash

   # Update from upstream (weekly)
   git fetch upstream
   git checkout main
   git merge upstream/main

   # Update Python dependencies (monthly)
   source sphinx-env/bin/activate
   pip install -r requirements.txt --upgrade

   # Clean build cache (as needed)
   make clean
   sphinx-build -b html source build/html

**Backup Your Work:**

.. code-block:: bash

   # Regular backup of translation work
   # Method 1: Push to GitHub frequently
   git push origin your-branch-name

   # Method 2: Local backup
   cp -r locales/ar/LC_MESSAGES ~/backups/arabic-translations-$(date +%Y%m%d)

   # Method 3: Export from Poedit
   # File → Export → Create backup copies

Troubleshooting Common Issues
=============================

Environment Problems
--------------------

**Issue: Python command not found**

.. code-block:: bash

   # Solution: Check Python installation
   which python3
   # If not found, reinstall Python

   # Windows specific
   py -3 --version

**Issue: Sphinx build fails**

.. code-block:: bash

   # Solution: Check virtual environment
   which python  # Should show sphinx-env path

   # Recreate environment if needed
   rm -rf sphinx-env
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

**Issue: Arabic text appears as boxes**

.. code-block:: text

   Solution: Install Arabic fonts
   - Ubuntu: sudo apt install fonts-noto fonts-amiri
   - macOS: Install from Font Book
   - Windows: Download from Google Fonts

Translation Tool Issues
----------------------

**Issue: Poedit shows encoding errors**

.. code-block:: text

   Solution:
   1. File → Preferences → Editor
   2. Ensure "Unicode (UTF-8)" selected
   3. Restart Poedit
   4. Reopen .po file

**Issue: RTL text displays incorrectly**

.. code-block:: text

   Solution:
   1. View → Text Direction → Right to Left
   2. Or use Ctrl+Shift+R (Windows/Linux)
   3. Or Cmd+Shift+R (macOS)

**Issue: Translation memory not working**

.. code-block:: text

   Solution:
   1. Edit → Preferences → Translation Memory
   2. Create new database for Arabic OS project
   3. Import existing translations
   4. Enable automatic suggestions

Git and GitHub Issues
---------------------

**Issue: Cannot push to repository**

.. code-block:: bash

   # Check remote configuration
   git remote -v

   # Ensure pushing to your fork (origin), not upstream
   git push origin branch-name

**Issue: Merge conflicts**

.. code-block:: bash

   # Update your branch with latest changes
   git fetch upstream
   git checkout main
   git merge upstream/main

   # Resolve conflicts in translation files
   # Most conflicts in .po files can be resolved by:
   # 1. Keeping your Arabic translations
   # 2. Accepting upstream English source changes

**Issue: Large files in commit**

.. code-block:: bash

   # Check what's being committed
   git status
   git diff --cached

   # Avoid committing build files
   git reset build/
   git reset *.mo

Success Metrics
===============

**Week 1 Goals:**

.. code-block:: text

   □ Complete environment setup
   □ Successfully build English and Arabic documentation
   □ Translate 10-20 strings in practice file
   □ Understand .po file format and workflow
   □ Make first successful commit

**Month 1 Goals:**

.. code-block:: text

   □ Complete translation of assigned documentation section
   □ Demonstrate consistent terminology usage
   □ Successfully contribute to team project
   □ Provide feedback on style guide and workflow
   □ Help onboard other new translators

**Ongoing Success Indicators:**

.. code-block:: text

   □ Regular, consistent translation contributions
   □ High-quality translations that require minimal review
   □ Active participation in translator community discussions
   □ Mentoring new translators
   □ Contributing to style guide improvements

Next Steps
==========

After completing this setup guide:

1. **Join Translator Community**
   - Subscribe to translator mailing list
   - Join Slack/Discord channels
   - Attend monthly translator meetings

2. **Request First Assignment**
   - Contact project coordinator
   - Specify your availability and interests
   - Receive assigned documentation section

3. **Begin Regular Translation Work**
   - Follow the :doc:`translation-workflow` guide
   - Apply the :doc:`arabic-style-guide` standards
   - Submit work for :doc:`quality-assurance` review

4. **Engage with Community**
   - Provide feedback on documentation
   - Suggest improvements to translation process
   - Help other translators with questions

**Welcome to the Arabic OS Platform translation team! Your contributions directly support Arabic-speaking learners worldwide in accessing high-quality technical education in their native language.**