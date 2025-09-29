# Configuration file for the Sphinx documentation builder.
# Arabic OS Interactive Learning Platform - Enterprise Documentation
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os
import sys

# -- Project information -----------------------------------------------------

project = 'Arabic OS Interactive Learning Platform'
copyright = '2025, Arabic OS Development Team'
author = 'Arabic OS Development Team'
version = '2.0'
release = '2.0.0'

# -- Internationalization ---------------------------------------------------

language = 'en'  # Default language
locale_dirs = ['../locales/']  # Translation files location
gettext_compact = False    # One .pot file per source file
gettext_uuid = True        # UUID-based message tracking

# Multi-language configuration
languages = {
    'en': 'English',
    'ar': 'العربية'
}

# -- General configuration ---------------------------------------------------

extensions = [
    'sphinx.ext.autodoc',           # Auto-generate API docs
    'sphinx.ext.viewcode',          # Source code links
    'sphinx.ext.napoleon',          # Google/NumPy docstring support
    'sphinx.ext.intersphinx',       # Cross-project linking
    'sphinx.ext.todo',              # TODO items
    'sphinx.ext.coverage',          # Documentation coverage
    'sphinx.ext.imgmath',           # Math equations
    'sphinx_copybutton',            # Copy code buttons
    'sphinx_tabs',                  # Tabbed content
    'sphinx_togglebutton',          # Collapsible content
    'sphinx_design',                # Grid layouts and design elements
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------

html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'analytics_id': '',
    'analytics_anonymize_ip': False,
    'logo_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': False,
    'style_nav_header_background': '#2E7D32',  # Arabic green
    'collapse_navigation': False,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False
}

# Language-specific theme adjustments
if language == 'ar':
    html_theme_options.update({
        'rtl_support': True,
        'arabic_fonts': True,
    })

# Custom CSS and JavaScript
html_static_path = ['_static']
html_css_files = [
    'css/arabic-style.css',
    'css/interactive-embed.css',
    'css/rtl-layout.css',
    'css/responsive-design.css',
]
html_js_files = [
    'js/interactive-embed.js',
    'js/arabic-support.js',
    'js/language-detection.js',
    'js/search-enhancement.js',
]

# Logo and favicon
html_logo = '_static/images/arabic-os-logo.png'
html_favicon = '_static/images/favicon.ico'

# GitHub integration
html_context = {
    'display_github': True,
    'github_user': 'arabic-os',
    'github_repo': 'interactive-platform',
    'github_version': 'main/docs/source/',
}

# -- Options for LaTeX output ------------------------------------------------

latex_engine = 'xelatex'  # Required for Arabic
latex_elements = {
    'papersize': 'a4paper',
    'pointsize': '11pt',
    'preamble': r'''
\usepackage{fontspec}
\usepackage{polyglossia}
\setdefaultlanguage{english}
\setotherlanguage{arabic}
\newfontfamily\arabicfont[Script=Arabic]{Amiri}
\newfontfamily\sansseriffonts[Script=Arabic]{Noto Sans Arabic}
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE,RO]{\thepage}
\fancyhead[LO]{\rightmark}
\fancyhead[RE]{\leftmark}
''',
    'fncychap': '\\usepackage[Bjornstrup]{fncychap}',
    'printindex': '\\footnotesize\\raggedright\\printindex',
    'geometry': '\\usepackage[margin=1in]{geometry}',
}

latex_documents = [
    ('index', 'ArabicOSPlatformDocumentation.tex',
     'Arabic OS Interactive Learning Platform Documentation',
     'Arabic OS Development Team', 'manual'),
]

# -- Options for EPUB output -------------------------------------------------

epub_title = project
epub_exclude_files = ['search.html']
epub_language = language

# -- Options for manual page output ------------------------------------------

man_pages = [
    ('index', 'arabicosplatform', 'Arabic OS Interactive Learning Platform Documentation',
     [author], 1)
]

# -- Extension configuration --------------------------------------------------

# -- Options for intersphinx extension ---------------------------------------

intersphinx_mapping = {
    'python': ('https://docs.python.org/3', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}

# -- Options for todo extension ----------------------------------------------

todo_include_todos = True

# -- Custom configuration for enterprise support -----------------------------

# Add support for RTL languages
if language in ['ar', 'he', 'fa']:
    html_theme_options['navigation_depth'] = 6
    latex_elements['babel'] = '\\usepackage[arabic,english]{babel}'

# Enterprise features
html_show_sourcelink = True
html_show_sphinx = True
html_show_copyright = True

# Search configuration for multilingual
html_search_language = 'en'
if language == 'ar':
    html_search_language = 'ar'

# Version information
html_last_updated_fmt = '%b %d, %Y'
html_use_modindex = True
html_use_index = True
html_split_index = True