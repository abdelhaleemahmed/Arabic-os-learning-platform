# Arabic OS Platform Tools

This directory contains standalone tools for the Arabic OS Interactive Learning Platform development and maintenance.

## 📁 Directory Structure

```
tools/
├── translation/                 # Translation and localization tools
│   └── translation_assessment.py   # Translation progress assessment tool
└── README.md                   # This file
```

## 🔧 Available Tools

### Translation Tools (`translation/`)

#### Translation Assessment Tool
**File**: `translation/translation_assessment.py`
**Purpose**: Analyze translation coverage across documentation files
**Language**: Python 3.7+

**Features**:
- ✅ Comprehensive translation coverage analysis
- ✅ Visual progress indicators (✅🟡🟠❌)
- ✅ Priority recommendations for translation work
- ✅ Multiple output formats (detailed/simple)
- ✅ Support for multiple target languages
- ✅ Integration with gettext workflow

**Quick Usage**:
```bash
# Download the tool
wget https://raw.githubusercontent.com/YOUR_USERNAME/REPO_NAME/main/tools/translation/translation_assessment.py

# Make executable
chmod +x translation_assessment.py

# Run assessment (requires .po files in locales/ directory)
python3 translation_assessment.py --simple
```

**Full Documentation**: See `/documentation/html-en/developer-guide/translation/assessment-tool.html`

## 📥 Download Links

### Direct Downloads
- **Translation Assessment Tool**: [`translation_assessment.py`](translation/translation_assessment.py)

### Via Git
```bash
# Clone entire repository
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME/tools/

# Or download specific tool
wget https://raw.githubusercontent.com/YOUR_USERNAME/REPO_NAME/main/tools/translation/translation_assessment.py
```

### Via Browser
1. Navigate to the [tools directory](.) in GitHub
2. Click on the tool you need
3. Click "Raw" button to view source
4. Right-click and "Save As..." to download

## 🚀 Usage Examples

### Translation Assessment Tool

**Basic Usage**:
```bash
# Quick status check
python3 translation_assessment.py --simple

# Detailed analysis
python3 translation_assessment.py

# Generate report for specific language
python3 translation_assessment.py --language ar
```

**Output Example**:
```
Translation Status Summary (AR):
--------------------------------------------------
✅ index: 43/43 (100.0%)
🟠 assessment-tool: 32/137 (23.4%)
❌ translation-workflow: 0/130 (0.0%)

Overall Coverage: 75/310 (24.2%)
PRIORITY: Focus on translation-workflow (0.0%) and assessment-tool (23.4%)
```

**Requirements**:
- Python 3.7 or higher
- Access to gettext tools (`msgfmt`)
- Project with `.po` translation files

## 🛠️ Tool Development

### Adding New Tools

1. **Create appropriate subdirectory** under `tools/`
2. **Add tool with documentation**
3. **Update this README** with tool description
4. **Add download links** and usage examples
5. **Include in main repository README**

### Tool Categories

**Planned categories for future tools**:
- `translation/` - Translation and localization tools
- `build/` - Build and deployment automation
- `testing/` - Quality assurance and testing tools
- `documentation/` - Documentation generation and maintenance
- `development/` - Development utilities and helpers

### Contributing Tools

We welcome contributions of useful tools for the Arabic OS platform:

1. **Fork the repository**
2. **Create your tool** in appropriate subdirectory
3. **Include documentation** and usage examples
4. **Test thoroughly** with the platform
5. **Submit pull request** with tool description

## 📋 Tool Requirements

All tools in this directory should:
- ✅ **Work standalone** - minimal external dependencies
- ✅ **Include help text** - `--help` flag for usage information
- ✅ **Handle errors gracefully** - proper error messages and exit codes
- ✅ **Follow platform conventions** - compatible with Arabic OS workflows
- ✅ **Include examples** - usage examples in documentation
- ✅ **Support automation** - suitable for scripts and CI/CD

## 📞 Support

- **Documentation**: Comprehensive guides in `/documentation/`
- **Examples**: Built-in help and usage examples in each tool
- **Issues**: Report problems via GitHub Issues
- **Community**: Tool development encouraged

---

**🔗 Quick Access**: [Main Repository](../) | [Documentation](../documentation/) | [Interactive Tools](../interactive/)