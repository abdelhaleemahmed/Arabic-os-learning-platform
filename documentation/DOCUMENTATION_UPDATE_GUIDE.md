# Documentation Update and Deployment Guide

This guide provides step-by-step instructions for updating the Arabic OS documentation, managing translations, and deploying to GitHub Pages.

## Overview

The documentation system uses:
- **Sphinx** for building HTML documentation
- **gettext** for translation management (.po/.pot files)
- **GitHub Pages** for hosting both English and Arabic versions
- **RTL CSS** for proper Arabic text layout

## Directory Structure

```
/home/vagrant/os/k/C++/src_c/doc/docs/           # Working directory
├── source/                                       # Source .rst files
├── locales/ar/LC_MESSAGES/                      # Arabic translation files
├── build/html/                                  # English HTML output
├── build/html-ar/                               # Arabic HTML output
├── translation_assessment.py                    # Translation progress tool
└── sphinx-env/                                  # Python virtual environment

/home/vagrant/os/k/C++/src_c/github_upload/documentation/  # GitHub deployment
├── html-en/                                     # English docs for GitHub Pages
├── html-ar/                                     # Arabic docs for GitHub Pages
├── source/                                      # Source files (backup)
├── locales/                                     # Translation files (backup)
└── translation_assessment.py                    # Assessment tool
```

## Step-by-Step Update Process

### 1. Environment Setup

```bash
cd /home/vagrant/os/k/C++/src_c/doc/docs/
source sphinx-env/bin/activate
```

### 2. Update Source Documentation

Edit `.rst` files in the `source/` directory:
```bash
# Edit documentation files
nano source/path/to/your-file.rst

# For new files, add them to the appropriate index.rst toctree
```

### 3. Generate Translation Templates

```bash
# Extract translatable strings to .pot files
sphinx-build -M gettext source build/gettext

# Update .po files with new strings
sphinx-intl update -p build/gettext/gettext -l ar
```

### 4. Translate Content

**Option A: Using Poedit (Recommended)**
```bash
# Install if not available
sudo apt install poedit

# Open .po files for translation
poedit locales/ar/LC_MESSAGES/path/to/file.po
```

**Option B: Direct editing**
```bash
# Edit .po files directly
nano locales/ar/LC_MESSAGES/path/to/file.po

# Format:
# msgid "English text"
# msgstr "النص العربي"
```

### 5. Check Translation Progress

```bash
# Run assessment tool for detailed report
python3 translation_assessment.py

# Quick summary
python3 translation_assessment.py --simple

# Check specific file
msgfmt --statistics locales/ar/LC_MESSAGES/path/to/file.po
```

### 6. Build Documentation

```bash
# Build English version
sphinx-build -b html source build/html

# Build Arabic version
sphinx-build -b html -D language=ar source build/html-ar

# Verify no build errors
echo "Build Status: $([ $? -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"
```

### 7. Test Locally

```bash
# Check key pages exist
ls build/html/index.html
ls build/html-ar/index.html

# Verify CSS loading
grep "rtl-layout.css" build/html-ar/index.html  # Should find RTL CSS
grep "rtl-layout.css" build/html/index.html || echo "No RTL in English - CORRECT"

# Check Arabic translations
grep -A 2 "<title>" build/html-ar/index.html  # Should show Arabic text
```

### 8. Deploy to GitHub Upload Directory

```bash
# Copy English build
cp -r build/html/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/html-en/

# Copy Arabic build
cp -r build/html-ar/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/html-ar/

# Update source and translation files
cp -r source/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/source/
cp -r locales /home/vagrant/os/k/C++/src_c/github_upload/documentation/

# Copy build tools
cp translation_assessment.py requirements.txt Makefile /home/vagrant/os/k/C++/src_c/github_upload/documentation/
```

### 9. Commit and Push to GitHub

```bash
cd /home/vagrant/os/k/C++/src_c/github_upload/

# Check git status
git status

# Add documentation changes
git add documentation/

# Commit with descriptive message
git commit -m "Update documentation: [describe changes]

- Updated Arabic translations (X% coverage)
- Fixed [specific issues]
- Added [new content]

🤖 Generated with Claude Code"

# Push to GitHub
git push origin main
```

## Common Tasks

### Adding New Documentation

1. **Create new .rst file** in appropriate `source/` subdirectory
2. **Add to toctree** in the relevant `index.rst` file
3. **Generate translations**: `sphinx-build -M gettext source build/gettext`
4. **Update .po files**: `sphinx-intl update -p build/gettext/gettext -l ar`
5. **Translate content** in the new .po files
6. **Build and deploy** following steps 6-9 above

### Updating Existing Content

1. **Edit .rst files** with changes
2. **Regenerate .pot files**: `sphinx-build -M gettext source build/gettext`
3. **Update .po files**: `sphinx-intl update -p build/gettext/gettext -l ar`
4. **Review fuzzy translations** and update Arabic text
5. **Build and deploy**

### Managing Translation Priorities

```bash
# Check what needs translation
python3 translation_assessment.py

# Focus on high-priority files (user guides, getting started)
# Files with ❌ (0%) or 🟠 (low %) need attention
```

## CSS and Styling Updates

### RTL Layout Changes

CSS files are in `source/_static/css/`:
- `rtl-layout.css` - RTL-specific layout fixes
- `arabic-style.css` - Arabic typography and fonts

**Key CSS loading logic in `source/conf.py`:**
```python
def setup(app):
    def add_rtl_css(app, config):
        if config.language == 'ar':
            config.html_css_files.extend([
                'css/arabic-style.css',
                'css/rtl-layout.css',
            ])
    app.connect('config-inited', add_rtl_css)
```

## Troubleshooting

### Build Errors

```bash
# Clean build and retry
rm -rf build/
sphinx-build -b html source build/html

# Check for syntax errors in .rst files
# Look for incorrect indentation, malformed directives
```

### Translation Issues

```bash
# Check .po file syntax
msgfmt --check locales/ar/LC_MESSAGES/file.po

# Fix encoding issues
# Ensure files are saved as UTF-8
file locales/ar/LC_MESSAGES/file.po  # Should show UTF-8
```

### CSS Not Loading

1. **Check conf.py setup function** exists and is correct
2. **Verify CSS files exist** in `source/_static/css/`
3. **Clean rebuild** both language versions
4. **Check HTML output** for CSS links

### GitHub Pages Deployment

1. **Verify folder structure** matches expected layout
2. **Check GitHub Actions** (if configured) for build status
3. **Test URLs**:
   - English: `https://your-domain.github.io/html-en/`
   - Arabic: `https://your-domain.github.io/html-ar/`

## Quality Checklist

Before deploying, verify:

- [ ] Both English and Arabic builds complete without errors
- [ ] Assessment tool shows translation progress
- [ ] Key pages render correctly in both languages
- [ ] RTL layout works properly in Arabic version
- [ ] Navigation buttons positioned correctly
- [ ] All CSS files loading properly
- [ ] Translation files copied to GitHub upload directory
- [ ] Git commit includes descriptive message

## Translation Guidelines

### Priority Order

1. **Index pages** - Main entry points (highest priority)
2. **User guides** - End-user documentation
3. **Tool documentation** - Interactive tool guides
4. **Developer guides** - Technical documentation
5. **Reference materials** - Supplementary content

### Quality Standards

- **Technical accuracy** - Preserve technical meaning
- **Cultural appropriateness** - Use respectful Arabic
- **Consistency** - Follow established terminology
- **Completeness** - Aim for 100% coverage in priority sections

### Arabic Style Guide

Refer to `source/developer-guide/translation/arabic-style-guide.rst` for:
- Terminology standards
- Grammar guidelines
- Cultural considerations
- Technical term translations

## Automation Opportunities

Consider setting up:

1. **GitHub Actions** for automatic builds
2. **Translation memory** integration
3. **Automated quality checks**
4. **Deployment pipelines**

This guide should be updated as the process evolves or new tools are added.

---

**Last Updated**: $(date)
**Created by**: Claude Code Documentation Assistant