Documentation Development Guide
=================================

This comprehensive guide provides everything you need to build, access, and contribute to the Arabic OS Platform documentation system. Whether you're a developer, translator, or contributor, this guide ensures you can efficiently work with our professional Sphinx documentation.

Overview
========

Our documentation system is built with Sphinx and provides:

* **Multi-format Output** - HTML, PDF, EPUB in English and Arabic
* **Professional Workflow** - Industry-standard build processes and automation
* **Developer Tools** - Live reload, automated builds, quality validation
* **Bilingual Support** - Complete Arabic translation integration
* **Production Deployment** - Automated builds and GitHub Pages integration

Quick Reference
===============

**Common Tasks:**

.. list-table:: Quick Commands
   :header-rows: 1
   :widths: 40 60

   * - Task
     - Command
   * - Build English HTML
     - ``make html-en`` or ``sphinx-build -b html source build/html``
   * - Build Arabic HTML
     - ``make html-ar`` or ``sphinx-build -b html -D language=ar source build/html-ar``
   * - Build all formats
     - ``make all``
   * - Development build
     - ``make dev``
   * - Live development server
     - ``sphinx-autobuild source build/html --open-browser``
   * - Clean builds
     - ``make clean``

Environment Setup
=================

Prerequisites
------------

Before working with documentation:

.. code-block:: bash

   # Ensure you're in the docs directory
   cd /home/vagrant/os/k/C++/src_c/doc/docs

   # Check if virtual environment exists
   ls sphinx-env/

   # If environment doesn't exist, create it
   python3 -m venv sphinx-env

Virtual Environment Activation
------------------------------

**Always activate the virtual environment before working:**

.. tabs::

   .. tab:: Linux/macOS

      .. code-block:: bash

         source sphinx-env/bin/activate

   .. tab:: Windows

      .. code-block:: bash

         sphinx-env\Scripts\activate

   .. tab:: Verification

      .. code-block:: bash

         # Verify activation (should show sphinx-env path)
         which python
         which sphinx-build

Dependency Installation
----------------------

**Install or update dependencies:**

.. code-block:: bash

   # Install required packages
   pip install -r requirements.txt

   # Verify Sphinx installation
   sphinx-build --version

   # Should show: sphinx-build 7.4.7 (or similar)

Building Documentation
======================

HTML Documentation
------------------

**English HTML Documentation:**

.. code-block:: bash

   # Method 1: Using Makefile (recommended)
   make html-en

   # Method 2: Direct Sphinx command
   sphinx-build -b html source build/html

   # Access at: build/html/index.html

**Arabic HTML Documentation:**

.. code-block:: bash

   # Method 1: Using Makefile
   make html-ar

   # Method 2: Direct Sphinx command
   sphinx-build -b html -D language=ar source build/html-ar

   # Access at: build/html-ar/index.html

**Both Languages:**

.. code-block:: bash

   # Build both English and Arabic HTML
   make html-en html-ar

Multi-Format Documentation
--------------------------

**PDF Documentation:**

.. code-block:: bash

   # English PDF
   make pdf-en

   # Arabic PDF
   make pdf-ar

   # Generated PDFs available at:
   # build/latex/ArabicOSPlatformDocumentation.pdf
   # build/latex-ar/ArabicOSPlatformDocumentation.pdf

**EPUB Documentation:**

.. code-block:: bash

   # English EPUB
   make epub-en

   # Arabic EPUB
   make epub-ar

   # Generated EPUB files available at:
   # build/epub/ArabicOSPlatformDocumentation.epub
   # build/epub-ar/ArabicOSPlatformDocumentation.epub

**All Formats (Complete Build):**

.. code-block:: bash

   # Build everything: HTML, PDF, EPUB in both languages
   make all

   # This creates:
   # - build/html/ (English HTML)
   # - build/html-ar/ (Arabic HTML)
   # - build/latex/*.pdf (English PDF)
   # - build/latex-ar/*.pdf (Arabic PDF)
   # - build/epub/*.epub (English EPUB)
   # - build/epub-ar/*.epub (Arabic EPUB)

Development Workflows
====================

Quick Development Build
-----------------------

For fast iteration during development:

.. code-block:: bash

   # Quick English-only HTML build
   make dev

   # Equivalent to:
   sphinx-build -b html source build/html

   # Open in browser:
   open build/html/index.html  # macOS
   xdg-open build/html/index.html  # Linux
   start build/html/index.html  # Windows

Live Development Server
-----------------------

**Install sphinx-autobuild for live reloading:**

.. code-block:: bash

   # Install development tool
   pip install sphinx-autobuild

**Start live development server:**

.. code-block:: bash

   # Start server with automatic reload
   sphinx-autobuild source build/html --open-browser

   # Options:
   # --open-browser: Opens browser automatically
   # --port 8000: Custom port (default: 8000)
   # --host 0.0.0.0: Allow external connections

   # Server will:
   # - Build documentation automatically when files change
   # - Refresh browser automatically
   # - Serve at http://localhost:8000

**Advanced live development:**

.. code-block:: bash

   # Live server with custom options
   sphinx-autobuild source build/html \
     --open-browser \
     --port 8080 \
     --ignore "*.tmp" \
     --ignore "*~"

   # Live Arabic build
   sphinx-autobuild source build/html-ar \
     -D language=ar \
     --open-browser \
     --port 8001

Translation Development
-----------------------

**Working with translations:**

.. code-block:: bash

   # Extract translatable messages
   sphinx-build -M gettext source build/gettext

   # Update translation files
   sphinx-intl update -p build/gettext/gettext -l ar

   # Build Arabic version to test translations
   sphinx-build -b html -D language=ar source build/html-ar

   # Quick translation workflow
   make gettext
   sphinx-intl update -p build/gettext/gettext -l ar
   make html-ar

Accessing Documentation
=======================

Local Access Methods
--------------------

**After building documentation, access via:**

**HTML Documentation:**

.. code-block:: text

   English Documentation:
   - File: build/html/index.html
   - URL: file:///path/to/build/html/index.html
   - Live server: http://localhost:8000

   Arabic Documentation:
   - File: build/html-ar/index.html
   - URL: file:///path/to/build/html-ar/index.html

**PDF Documentation:**

.. code-block:: text

   English PDF: build/latex/ArabicOSPlatformDocumentation.pdf
   Arabic PDF: build/latex-ar/ArabicOSPlatformDocumentation.pdf

**EPUB Documentation:**

.. code-block:: text

   English EPUB: build/epub/ArabicOSPlatformDocumentation.epub
   Arabic EPUB: build/epub-ar/ArabicOSPlatformDocumentation.epub

Specific Documentation Sections
-------------------------------

**Translation Guides Access:**

.. code-block:: text

   After building HTML documentation:

   English Translation Guides:
   build/html/developer-guide/translation/index.html
   ├── translation-workflow.html
   ├── translator-setup.html
   ├── arabic-style-guide.html
   └── quality-assurance.html

   Arabic Translation Guides:
   build/html-ar/developer-guide/translation/index.html
   └── [same structure in Arabic]

**User Guide Access:**

.. code-block:: text

   Interactive Tools Documentation:
   build/html/user-guide/tools/
   ├── cp1256-explorer.html
   ├── utf8-visualizer.html
   ├── bidi-demo.html
   ├── arabic-typing.html
   ├── memory-layout.html
   ├── kernel-debugger.html
   ├── font-renderer.html
   └── assembly-simulator.html

**Developer Guide Access:**

.. code-block:: text

   Developer Documentation:
   build/html/developer-guide/
   ├── translation/  (translation system)
   ├── api/         (API documentation)
   ├── build-tutorial/  (OS build guide)
   └── integration/     (integration guides)

Browser Recommendations
-----------------------

**For optimal viewing:**

.. list-table:: Browser Compatibility
   :header-rows: 1
   :widths: 25 25 50

   * - Browser
     - Arabic Support
     - Recommendations
   * - Chrome 80+
     - Excellent
     - Best for development, good debugging tools
   * - Firefox 75+
     - Excellent
     - Good Arabic font rendering
   * - Safari 13+
     - Good
     - macOS integration, good performance
   * - Edge 80+
     - Good
     - Windows integration

Quality Assurance and Testing
=============================

Build Validation
----------------

**Always validate builds before submitting:**

.. code-block:: bash

   # Test English build
   make html-en
   echo "English build status: $([[ $? -eq 0 ]] && echo 'SUCCESS' || echo 'FAILED')"

   # Test Arabic build
   make html-ar
   echo "Arabic build status: $([[ $? -eq 0 ]] && echo 'SUCCESS' || echo 'FAILED')"

   # Test all formats
   make all
   echo "Complete build status: $([[ $? -eq 0 ]] && echo 'SUCCESS' || echo 'FAILED')"

Translation Testing
------------------

**For translation contributors:**

.. code-block:: bash

   # Check translation file syntax
   find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --check {} \;

   # Get translation statistics
   find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --statistics {} \;

   # Build Arabic version to test translations
   make html-ar

   # Visual inspection checklist:
   # □ Arabic text displays correctly (RTL)
   # □ Navigation works in Arabic
   # □ No English text in Arabic version
   # □ Proper Arabic fonts used
   # □ Cross-references work correctly

Link Validation
---------------

**Check internal and external links:**

.. code-block:: bash

   # Install link checker
   pip install sphinx-linkcheck

   # Check links in documentation
   sphinx-build -b linkcheck source build/linkcheck

   # Review results
   cat build/linkcheck/output.txt

Performance Testing
------------------

**Test documentation performance:**

.. code-block:: bash

   # Build time measurement
   time make html-en

   # File size analysis
   du -sh build/html/
   du -sh build/html-ar/

   # Page load testing with live server
   sphinx-autobuild source build/html --port 8000
   # Use browser developer tools to analyze load times

Troubleshooting
===============

Common Issues and Solutions
--------------------------

**Issue: Virtual Environment Not Activated**

.. code-block:: text

   Problem: Commands fail with "sphinx-build not found"

   Solution:
   cd /home/vagrant/os/k/C++/src_c/doc/docs
   source sphinx-env/bin/activate
   which sphinx-build  # Should show sphinx-env path

**Issue: Build Failures**

.. code-block:: bash

   Problem: Build fails with errors

   Solutions:
   # Clean previous builds
   make clean

   # Rebuild environment
   rm -rf sphinx-env
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

   # Check for syntax errors in .rst files
   sphinx-build -b dummy source build/test

**Issue: Arabic Text Display Problems**

.. code-block:: text

   Problem: Arabic text appears as boxes or incorrect direction

   Solutions:
   # Check browser Arabic font support
   # Install Arabic fonts on system:

   Ubuntu/Debian:
   sudo apt install fonts-noto fonts-amiri

   macOS:
   # Install from Font Book or Google Fonts

   Windows:
   # Install Arabic language pack

**Issue: Translation Files Not Found**

.. code-block:: bash

   Problem: Arabic build shows English text

   Solutions:
   # Ensure translation files exist
   ls locales/ar/LC_MESSAGES/

   # Update translation files
   sphinx-build -M gettext source build/gettext
   sphinx-intl update -p build/gettext/gettext -l ar

   # Check .po file status
   msgfmt --statistics locales/ar/LC_MESSAGES/*.po

**Issue: Live Server Not Working**

.. code-block:: bash

   Problem: sphinx-autobuild not starting or not reloading

   Solutions:
   # Install/reinstall sphinx-autobuild
   pip install --upgrade sphinx-autobuild

   # Check for port conflicts
   lsof -i :8000  # Check if port is in use

   # Use different port
   sphinx-autobuild source build/html --port 8080

**Issue: PDF Generation Fails**

.. code-block:: bash

   Problem: LaTeX/PDF build fails

   Solutions:
   # Install LaTeX dependencies
   # Ubuntu/Debian:
   sudo apt install texlive-xetex texlive-fonts-recommended texlive-fonts-extra

   # macOS:
   brew install basictex
   # Then install additional packages as needed

   # Check LaTeX log for specific errors
   cat build/latex/*.log

Performance Optimization
-----------------------

**Build Speed Optimization:**

.. code-block:: bash

   # Parallel builds (if supported)
   make -j4 html-en

   # Only rebuild changed files
   sphinx-build -b html source build/html

   # Use nitpicky mode for development (finds broken references)
   sphinx-build -n -b html source build/html

**Memory Usage:**

.. code-block:: bash

   # For large documentation projects
   export SPHINX_BUILD_OPTIONS="-j auto"
   make html-en

**Clean Builds:**

.. code-block:: bash

   # Regular cleanup to prevent stale files
   make clean

   # Deep clean (removes virtual environment)
   rm -rf sphinx-env build/

   # Full reset and rebuild
   make clean
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt
   make all

Development Best Practices
==========================

Documentation Writing
---------------------

**File Organization:**

.. code-block:: text

   Guidelines:
   □ Use descriptive filenames (kebab-case.rst)
   □ Organize by content type and audience
   □ Follow existing directory structure
   □ Include proper cross-references

**RestructuredText Best Practices:**

.. code-block:: rst

   # Use consistent heading hierarchy
   Page Title
   ==========

   Section Title
   =============

   Subsection Title
   ----------------

   Sub-subsection Title
   ~~~~~~~~~~~~~~~~~~~~

   # Use proper cross-references
   :doc:`other-document`
   :ref:`section-label`

   # Include code examples with language
   .. code-block:: python

      def example():
          return "Hello World"

Translation Integration
----------------------

**For new content:**

.. code-block:: bash

   # After adding new .rst files
   # 1. Extract new translatable strings
   sphinx-build -M gettext source build/gettext

   # 2. Update Arabic translation files
   sphinx-intl update -p build/gettext/gettext -l ar

   # 3. Test build with new content
   make html-ar

   # 4. Commit both source and translation files
   git add source/ locales/ar/LC_MESSAGES/
   git commit -m "Add new documentation with translation templates"

Version Control Best Practices
------------------------------

**What to commit:**

.. code-block:: text

   ✅ Commit:
   - source/*.rst (documentation source)
   - locales/ar/LC_MESSAGES/*.po (translation files)
   - requirements.txt (dependencies)
   - Makefile (build configuration)
   - conf.py (Sphinx configuration)

   ❌ Don't commit:
   - build/ directory (generated files)
   - sphinx-env/ (virtual environment)
   - .doctrees/ (Sphinx cache)
   - *.mo files (compiled translations)

**Commit message examples:**

.. code-block:: text

   Good commit messages:
   - "docs: Add documentation development guide"
   - "translation: Update Arabic translations for user guide"
   - "docs: Fix broken links in developer guide"
   - "build: Update Sphinx configuration for Arabic support"

Contribution Workflow
=====================

For New Contributors
-------------------

**First-time setup:**

.. code-block:: bash

   # 1. Clone repository (or fork on GitHub)
   git clone https://github.com/arabic-os/documentation
   cd documentation/docs

   # 2. Set up environment
   python3 -m venv sphinx-env
   source sphinx-env/bin/activate
   pip install -r requirements.txt

   # 3. Test build
   make dev

   # 4. Open documentation
   open build/html/index.html

**Making contributions:**

.. code-block:: bash

   # 1. Create feature branch
   git checkout -b docs/add-new-section

   # 2. Make changes to .rst files in source/

   # 3. Test build
   make html-en html-ar

   # 4. Commit changes
   git add source/
   git commit -m "docs: Add new section to user guide"

   # 5. Push and create pull request
   git push origin docs/add-new-section

For Translation Contributors
---------------------------

**Translation workflow:**

.. code-block:: bash

   # 1. Update translation files
   sphinx-build -M gettext source build/gettext
   sphinx-intl update -p build/gettext/gettext -l ar

   # 2. Edit .po files in locales/ar/LC_MESSAGES/
   # Use Poedit or text editor

   # 3. Test Arabic build
   make html-ar

   # 4. Commit translation work
   git add locales/ar/LC_MESSAGES/
   git commit -m "translation: Update Arabic translations for developer guide"

Continuous Integration
=====================

Our documentation system includes automated building and deployment:

GitHub Actions Integration
-------------------------

**Automated builds trigger on:**

.. code-block:: yaml

   # .github/workflows/docs.yml
   on:
     push:
       branches: [ main, develop ]
       paths: [ 'docs/**' ]
     pull_request:
       branches: [ main ]

**Build process includes:**

.. code-block:: text

   Automated Steps:
   1. Environment setup (Python, dependencies)
   2. Translation file validation
   3. English documentation build
   4. Arabic documentation build
   5. Multi-format generation (PDF, EPUB)
   6. Link checking and validation
   7. Deployment to GitHub Pages (on main branch)

Local CI Testing
----------------

**Test locally before pushing:**

.. code-block:: bash

   # Simulate CI environment
   ./scripts/ci-test.sh

   # Or manually test all builds
   make clean
   make all

   # Validate translations
   find locales/ar/LC_MESSAGES -name "*.po" -exec msgfmt --check {} \;

Production Deployment
====================

Our documentation is automatically deployed to production:

**English Documentation**: https://docs.arabic-os.org/en/
**Arabic Documentation**: https://docs.arabic-os.org/ar/

Manual Deployment
-----------------

**For emergency deployments:**

.. code-block:: bash

   # Build production-ready documentation
   make all

   # Deploy to GitHub Pages (if you have permissions)
   # This is normally handled by GitHub Actions
   gh-pages -d build/html

Development vs Production
------------------------

.. list-table:: Environment Differences
   :header-rows: 1
   :widths: 30 35 35

   * - Aspect
     - Development
     - Production
   * - Build Command
     - ``make dev``
     - ``make all``
   * - Formats
     - HTML only
     - HTML, PDF, EPUB
   * - Languages
     - Usually English
     - Both English and Arabic
   * - Optimization
     - Fast builds
     - Optimized assets
   * - Error Handling
     - Show warnings
     - Warnings as errors

This comprehensive documentation development guide ensures that anyone can efficiently build, access, and contribute to the Arabic OS Platform documentation system. Whether you're developing content, translating, or simply accessing the guides, you now have all the tools and knowledge needed for success.