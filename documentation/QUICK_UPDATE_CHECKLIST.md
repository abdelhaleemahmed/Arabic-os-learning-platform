# Quick Documentation Update Checklist

## 🚀 Fast Update Process

### Setup (Once per session)
```bash
cd /home/vagrant/os/k/C++/src_c/doc/docs/
source sphinx-env/bin/activate
```

### 📝 Content Updates
- [ ] Edit `.rst` files in `source/` directory
- [ ] Add new files to appropriate `index.rst` toctree

### 🌍 Translation Updates
```bash
# Generate new translation templates
sphinx-build -M gettext source build/gettext
sphinx-intl update -p build/gettext/gettext -l ar

# Check what needs translation
python3 translation_assessment.py --simple

# Translate using Poedit or edit .po files directly
poedit locales/ar/LC_MESSAGES/path/to/file.po
```

### 🔨 Build & Test
```bash
# Build both versions
sphinx-build -b html source build/html
sphinx-build -b html -D language=ar source build/html-ar

# Quick verification
ls build/html/index.html build/html-ar/index.html
```

### 📤 Deploy to GitHub
```bash
# Copy to GitHub upload directory
cp -r build/html/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/html-en/
cp -r build/html-ar/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/html-ar/
cp -r source/* /home/vagrant/os/k/C++/src_c/github_upload/documentation/source/
cp -r locales /home/vagrant/os/k/C++/src_c/github_upload/documentation/
cp translation_assessment.py requirements.txt Makefile /home/vagrant/os/k/C++/src_c/github_upload/documentation/

# Commit and push
cd /home/vagrant/os/k/C++/src_c/github_upload/
git add documentation/
git commit -m "Update documentation: [describe changes]"
git push origin main
```

## 🔍 Quick Checks

### Translation Progress
```bash
python3 translation_assessment.py --simple | grep -E "(❌|🟠)" | head -5
```

### Build Status
```bash
echo "English: $([ -f build/html/index.html ] && echo '✅' || echo '❌')"
echo "Arabic: $([ -f build/html-ar/index.html ] && echo '✅' || echo '❌')"
```

### CSS Loading
```bash
# Should find CSS in Arabic build only
grep -q "rtl-layout.css" build/html-ar/index.html && echo "Arabic RTL: ✅" || echo "Arabic RTL: ❌"
grep -q "rtl-layout.css" build/html/index.html && echo "English RTL: ❌ (should not be there)" || echo "English LTR: ✅"
```

## 📋 Priority Files for Translation

Focus on these high-impact files first:
1. `index.po` - Main page
2. `user-guide/index.po` - User guide landing
3. `user-guide/tools/index.po` - Tools overview
4. `developer-guide/translation/index.po` - Translation system

## 🆘 Emergency Recovery

If builds fail:
```bash
# Clean everything and rebuild
rm -rf build/
sphinx-build -b html source build/html
sphinx-build -b html -D language=ar source build/html-ar
```

If translations are broken:
```bash
# Check file syntax
msgfmt --check locales/ar/LC_MESSAGES/problematic-file.po
# Fix syntax errors and rebuild
```

## 📞 Quick Commands Reference

| Task | Command |
|------|---------|
| Check translation stats | `msgfmt --statistics file.po` |
| Validate .po file | `msgfmt --check file.po` |
| Find untranslated | `grep -l 'msgstr ""' locales/ar/LC_MESSAGES/*.po` |
| Clean build | `rm -rf build/ && make clean` |
| Test Arabic title | `grep "<title>" build/html-ar/index.html` |

---
For detailed instructions, see `DOCUMENTATION_UPDATE_GUIDE.md`