Translation Workflow
===================

This guide explains the complete translation workflow for the Arabic OS Platform documentation. Follow these steps to contribute professional-quality Arabic translations.

Workflow Overview
=================

The translation process follows a professional gettext workflow:

1. **Content Creation** - English documentation written in .rst files
2. **Message Extraction** - Sphinx extracts translatable strings to .pot files
3. **Translation Assignment** - .po files created and assigned to translators
4. **Translation Work** - Professional translation using specialized tools
5. **Quality Review** - Peer review and quality assurance validation
6. **Integration** - Approved translations integrated into builds
7. **Publication** - Bilingual documentation published to production

Step-by-Step Process
====================

Step 1: Environment Setup
--------------------------

**For Translators:**

.. code-block:: bash

   # Clone documentation repository
   git clone https://github.com/arabic-os/documentation
   cd documentation/docs

   # Set up virtual environment
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

**For Project Maintainers:**

.. code-block:: bash

   # Extract translatable messages
   sphinx-build -M gettext source build/gettext

   # Initialize Arabic translation files
   sphinx-intl update -p build/gettext/gettext -l ar

Step 2: Working with Translation Files
--------------------------------------

**File Structure:**

.. code-block:: text

   locales/ar/LC_MESSAGES/
   ├── index.po                           # Main index page
   ├── user-guide/
   │   ├── index.po                       # User guide index
   │   └── tools/
   │       ├── cp1256-explorer.po         # CP1256 tool
   │       ├── utf8-visualizer.po         # UTF-8 tool
   │       └── [other tools].po
   ├── developer-guide/
   │   └── [developer sections].po
   └── educator-guide/
       └── [educator sections].po

**Translation File Format:**

.. code-block:: po

   # Header information
   msgid ""
   msgstr ""
   "Project-Id-Version: Arabic OS Platform 2.0\n"
   "Language: ar\n"
   "Content-Type: text/plain; charset=utf-8\n"

   # Individual translation pairs
   #: ../../../source/user-guide/tools/cp1256-explorer.rst:2
   msgid "CP1256 Character Encoding Explorer"
   msgstr "مستكشف ترميز الأحرف CP1256"

   #: ../../../source/user-guide/tools/cp1256-explorer.rst:4
   msgid ""
   "The CP1256 Character Encoding Explorer is an interactive "
   "educational tool designed to help you understand the CP1256 "
   "character encoding system."
   msgstr ""
   "مستكشف ترميز الأحرف CP1256 هو أداة تعليمية تفاعلية مصممة "
   "لمساعدتك على فهم نظام ترميز الأحرف CP1256."

Step 3: Translation Assignment Process
--------------------------------------

**Project Coordinator Tasks:**

1. **Create Work Assignments**

   .. code-block:: bash

      # Generate translation statistics
      msgfmt --statistics locales/ar/LC_MESSAGES/*.po

      # Identify files needing translation
      find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --statistics {} \;

2. **Assign Translation Tasks**

   Create GitHub issues for each translation assignment:

   .. code-block:: markdown

      **Translation Assignment: CP1256 Tool Documentation**

      **File**: `locales/ar/LC_MESSAGES/user-guide/tools/cp1256-explorer.po`
      **Status**: 45 strings, 12 translated, 33 untranslated
      **Priority**: High
      **Estimated Time**: 4-6 hours
      **Deadline**: [Date]

      **Requirements**:
      - Technical accuracy for character encoding concepts
      - Follow Arabic Style Guide
      - Review existing translations for consistency

      **Translator**: @username
      **Reviewer**: @reviewer-username

Step 4: Professional Translation Work
-------------------------------------

**Using Poedit (Recommended):**

1. **Install Poedit**

   .. code-block:: bash

      # Ubuntu/Debian
      sudo apt install poedit

      # macOS
      brew install --cask poedit

      # Windows: Download from https://poedit.net

2. **Configure Poedit for Arabic**

   - **File → Preferences → General**
   - Set **Default language** to Arabic (ar)
   - Enable **Right-to-left language support**
   - Configure **Arabic fonts** (Amiri, Noto Sans Arabic)

3. **Translation Process**

   - Open .po file in Poedit
   - Review **source text** and **context comments**
   - Enter **Arabic translation** in target field
   - Use **Translation Memory** for consistency
   - Save frequently to preserve work

**Using Web-Based Tools:**

.. list-table:: Translation Tool Comparison
   :header-rows: 1
   :widths: 20 20 30 30

   * - Tool
     - Type
     - Advantages
     - Best For
   * - Poedit
     - Desktop
     - Full features, offline work
     - Professional translators
   * - Weblate
     - Web-based
     - Collaborative, built-in QA
     - Team projects
   * - Lokalize
     - Desktop (KDE)
     - Advanced CAT features
     - Technical translators
   * - Transifex
     - Web-based
     - Project management
     - Large teams

Step 5: Quality Review Process
------------------------------

**Self-Review Checklist:**

Before submitting translations, verify:

.. code-block:: text

   □ All strings translated (no empty msgstr entries)
   □ Technical terminology consistent with style guide
   □ Arabic grammar and syntax correct
   □ Cultural appropriateness maintained
   □ No untranslated English text
   □ Proper Arabic punctuation used
   □ RTL text flow considered
   □ Context preserved from source

**Peer Review Process:**

1. **Create Pull Request**

   .. code-block:: bash

      git add locales/ar/LC_MESSAGES/
      git commit -m "Add Arabic translation for CP1256 tool documentation"
      git push origin feature/translate-cp1256-tool

2. **Request Review**

   - Assign Arabic language reviewer
   - Include translation statistics
   - Reference style guide compliance
   - Note any translation challenges

3. **Review Criteria**

   **Technical Accuracy**
      - Correct translation of technical concepts
      - Consistent terminology usage
      - Preservation of meaning

   **Language Quality**
      - Natural, fluent Arabic
      - Appropriate register for audience
      - Grammar and syntax accuracy

   **Cultural Sensitivity**
      - Respectful language use
      - Culturally appropriate examples
      - Regional considerations

Step 6: Testing and Validation
------------------------------

**Build Testing:**

.. code-block:: bash

   # Test English build
   sphinx-build -b html source build/html

   # Test Arabic build
   sphinx-build -b html -D language=ar source build/html-ar

   # Validate no build errors
   echo "Build Status: $([ $? -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"

**Translation Validation:**

.. code-block:: bash

   # Check translation completeness
   msgfmt --statistics locales/ar/LC_MESSAGES/user-guide/tools/cp1256-explorer.po

   # Validate .po file syntax
   msgfmt --check-format locales/ar/LC_MESSAGES/user-guide/tools/cp1256-explorer.po

   # Generate translation report
   ./scripts/translation-report.sh

Step 7: Integration and Publication
-----------------------------------

**Maintainer Integration Process:**

1. **Final Quality Check**

   .. code-block:: bash

      # Run comprehensive validation
      ./scripts/validate-translations.sh

      # Build all formats
      make all

      # Test both language versions
      ./scripts/test-builds.sh

2. **Merge and Deploy**

   .. code-block:: bash

      # Merge approved translation
      git checkout main
      git merge feature/translate-cp1256-tool

      # Trigger automated deployment
      git push origin main

3. **Publication Verification**

   - **English**: https://docs.arabic-os.org/en/
   - **Arabic**: https://docs.arabic-os.org/ar/
   - **Download Formats**: PDF, EPUB availability

Workflow Automation
====================

**GitHub Actions Integration:**

Our repository includes automated workflows:

.. code-block:: yaml

   # .github/workflows/translation-check.yml
   name: Translation Validation

   on:
     pull_request:
       paths: ['locales/**/*.po']

   jobs:
     validate-translations:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Install gettext
           run: sudo apt-get install gettext
         - name: Validate .po files
           run: |
             find locales -name "*.po" -exec msgfmt --check {} \;
         - name: Test Arabic build
           run: |
             pip install -r requirements.txt
             sphinx-build -D language=ar source build/html-ar

**Translation Statistics Dashboard:**

Automated reporting provides:

- **Translation Progress**: Percentage complete per section
- **Quality Metrics**: Review status and approval tracking
- **Contributor Recognition**: Translation contribution statistics
- **Release Planning**: Translation readiness for upcoming releases

Common Issues and Solutions
===========================

**Issue: Fuzzy Translations**

.. code-block:: bash

   # Problem: msgid changed, translation marked fuzzy
   #, fuzzy
   msgid "Updated English text"
   msgstr "Old Arabic translation"

   # Solution: Review and update translation, remove #, fuzzy

**Issue: Encoding Problems**

.. code-block:: bash

   # Problem: Arabic text appears as question marks
   # Solution: Ensure .po file has correct charset
   "Content-Type: text/plain; charset=utf-8\n"

**Issue: Build Failures**

.. code-block:: bash

   # Problem: Arabic build fails
   # Solution: Check .po file syntax
   msgfmt --check locales/ar/LC_MESSAGES/problematic-file.po

**Issue: Missing Context**

.. code-block:: po

   # Problem: Ambiguous source text
   msgid "File"
   # Could mean: computer file, document file, or filing system

   # Solution: Check source context comments
   #: ../../../source/user-guide/tools/file-manager.rst:15
   #: Context: computer file management
   msgid "File"
   msgstr "ملف"

Best Practices
==============

**For Translators:**

1. **Read Source Context** - Always review the source .rst file for context
2. **Maintain Consistency** - Use consistent terminology across translations
3. **Consider Audience** - Technical content for educational purposes
4. **Test Your Work** - Build and review the Arabic documentation
5. **Collaborate** - Discuss challenging translations with team

**For Reviewers:**

1. **Technical Expertise** - Understand both languages and technical concepts
2. **Cultural Sensitivity** - Ensure cultural appropriateness
3. **Constructive Feedback** - Provide specific, actionable review comments
4. **Timely Reviews** - Maintain project momentum with prompt reviews
5. **Recognition** - Acknowledge quality translation work

**For Project Maintainers:**

1. **Clear Assignments** - Provide context and expectations for translators
2. **Resource Support** - Maintain glossaries and style guides
3. **Quality Standards** - Enforce consistent quality requirements
4. **Community Building** - Foster collaborative translation community
5. **Process Improvement** - Continuously refine workflow efficiency

The professional translation workflow ensures our documentation serves the global Arabic-speaking community with the highest quality bilingual technical content.