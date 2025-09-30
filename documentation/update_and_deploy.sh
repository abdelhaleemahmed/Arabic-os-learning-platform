#!/bin/bash

# Documentation Update and Deployment Script
# Usage: ./update_and_deploy.sh [options]
# Options:
#   --no-translate    Skip translation update step
#   --no-build        Skip build step (use existing builds)
#   --no-deploy       Skip deployment to GitHub upload directory
#   --check-only      Only run checks and show status

set -e  # Exit on any error

# Configuration
DOCS_DIR="/home/vagrant/os/k/C++/src_c/doc/docs"
GITHUB_DIR="/home/vagrant/os/k/C++/src_c/github_upload/documentation"
VENV_PATH="sphinx-env/bin/activate"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse command line arguments
SKIP_TRANSLATE=false
SKIP_BUILD=false
SKIP_DEPLOY=false
CHECK_ONLY=false

for arg in "$@"; do
    case $arg in
        --no-translate)
            SKIP_TRANSLATE=true
            ;;
        --no-build)
            SKIP_BUILD=true
            ;;
        --no-deploy)
            SKIP_DEPLOY=true
            ;;
        --check-only)
            CHECK_ONLY=true
            ;;
        *)
            echo "Unknown option: $arg"
            echo "Usage: $0 [--no-translate] [--no-build] [--no-deploy] [--check-only]"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}🚀 Arabic OS Documentation Update and Deployment${NC}"
echo "=================================================="

# Change to docs directory
cd "$DOCS_DIR"

# Activate virtual environment
echo -e "${BLUE}📦 Activating virtual environment...${NC}"
source "$VENV_PATH"

# Check current status
echo -e "${BLUE}📊 Current Status Check...${NC}"
if [ -f translation_assessment.py ]; then
    echo "Translation Progress:"
    python3 translation_assessment.py --simple | head -10
else
    echo -e "${YELLOW}⚠️  Assessment tool not found${NC}"
fi

if [ "$CHECK_ONLY" = true ]; then
    echo -e "${GREEN}✅ Check completed. Exiting.${NC}"
    exit 0
fi

# Step 1: Update translations
if [ "$SKIP_TRANSLATE" = false ]; then
    echo -e "${BLUE}🌍 Updating translation templates...${NC}"

    # Generate .pot files
    echo "Extracting translatable strings..."
    sphinx-build -M gettext source build/gettext

    # Update .po files
    echo "Updating Arabic translation files..."
    sphinx-intl update -p build/gettext/gettext -l ar

    echo -e "${GREEN}✅ Translation templates updated${NC}"
    echo -e "${YELLOW}💡 Remember to update Arabic translations in .po files before final deployment${NC}"
else
    echo -e "${YELLOW}⏭️  Skipping translation update${NC}"
fi

# Step 2: Build documentation
if [ "$SKIP_BUILD" = false ]; then
    echo -e "${BLUE}🔨 Building documentation...${NC}"

    # Clean previous builds
    rm -rf build/html build/html-ar

    # Build English version
    echo "Building English documentation..."
    if sphinx-build -b html source build/html; then
        echo -e "${GREEN}✅ English build completed${NC}"
    else
        echo -e "${RED}❌ English build failed${NC}"
        exit 1
    fi

    # Build Arabic version
    echo "Building Arabic documentation..."
    if sphinx-build -b html -D language=ar source build/html-ar; then
        echo -e "${GREEN}✅ Arabic build completed${NC}"
    else
        echo -e "${RED}❌ Arabic build failed${NC}"
        exit 1
    fi

    # Verify builds
    echo -e "${BLUE}🔍 Verifying builds...${NC}"
    if [ -f "build/html/index.html" ] && [ -f "build/html-ar/index.html" ]; then
        echo -e "${GREEN}✅ Both index files exist${NC}"
    else
        echo -e "${RED}❌ Missing index files${NC}"
        exit 1
    fi

    # Check CSS loading
    if grep -q "rtl-layout.css" build/html-ar/index.html; then
        echo -e "${GREEN}✅ RTL CSS loaded in Arabic build${NC}"
    else
        echo -e "${YELLOW}⚠️  RTL CSS not found in Arabic build${NC}"
    fi

    if ! grep -q "rtl-layout.css" build/html/index.html; then
        echo -e "${GREEN}✅ No RTL CSS in English build (correct)${NC}"
    else
        echo -e "${YELLOW}⚠️  RTL CSS found in English build (should not be there)${NC}"
    fi

else
    echo -e "${YELLOW}⏭️  Skipping build step${NC}"

    # Verify existing builds
    if [ ! -f "build/html/index.html" ] || [ ! -f "build/html-ar/index.html" ]; then
        echo -e "${RED}❌ No existing builds found. Cannot skip build step.${NC}"
        exit 1
    fi
fi

# Step 3: Deploy to GitHub upload directory
if [ "$SKIP_DEPLOY" = false ]; then
    echo -e "${BLUE}📤 Deploying to GitHub upload directory...${NC}"

    # Verify target directory exists
    if [ ! -d "$GITHUB_DIR" ]; then
        echo -e "${RED}❌ GitHub upload directory not found: $GITHUB_DIR${NC}"
        exit 1
    fi

    # Copy English build
    echo "Copying English documentation..."
    cp -r build/html/* "$GITHUB_DIR/html-en/"

    # Copy Arabic build
    echo "Copying Arabic documentation..."
    cp -r build/html-ar/* "$GITHUB_DIR/html-ar/"

    # Copy source files
    echo "Copying source files..."
    cp -r source/* "$GITHUB_DIR/source/"

    # Copy translation files
    echo "Copying translation files..."
    cp -r locales "$GITHUB_DIR/"

    # Copy build tools
    echo "Copying build tools..."
    cp translation_assessment.py requirements.txt Makefile "$GITHUB_DIR/"

    # Update tools directory
    echo "Updating tools directory..."
    cp translation_assessment.py "$GITHUB_DIR/../tools/translation/"

    echo -e "${GREEN}✅ Files copied to GitHub upload directory${NC}"

    # Show git status
    echo -e "${BLUE}📋 Git Status in GitHub directory:${NC}"
    cd "$GITHUB_DIR/.."
    git status --porcelain documentation/ | head -10

    echo -e "${YELLOW}💡 Next steps:${NC}"
    echo "   cd $GITHUB_DIR/.."
    echo "   git add documentation/"
    echo "   git commit -m \"Update documentation: [describe your changes]\""
    echo "   git push origin main"

else
    echo -e "${YELLOW}⏭️  Skipping deployment${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Documentation update process completed!${NC}"

# Final status summary
echo -e "${BLUE}📊 Final Status Summary:${NC}"
cd "$DOCS_DIR"
if [ -f translation_assessment.py ]; then
    echo "Top 5 files needing translation:"
    python3 translation_assessment.py --simple | grep -E "(❌|🟠)" | head -5 || echo "All files have good translation coverage!"
fi

echo ""
echo -e "${BLUE}🔗 Access URLs (when deployed):${NC}"
echo "English: https://your-domain.github.io/documentation/html-en/"
echo "Arabic:  https://your-domain.github.io/documentation/html-ar/"