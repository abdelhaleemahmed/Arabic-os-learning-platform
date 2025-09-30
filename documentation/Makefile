# Makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD  ?= sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Enterprise documentation targets
html-en:
	@echo "Building English HTML documentation..."
	@$(SPHINXBUILD) -b html "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS)

html-ar:
	@echo "Building Arabic HTML documentation..."
	@$(SPHINXBUILD) -b html -D language=ar "$(SOURCEDIR)" "$(BUILDDIR)/html-ar" $(SPHINXOPTS)

pdf-en:
	@echo "Building English PDF documentation..."
	@$(SPHINXBUILD) -b latex "$(SOURCEDIR)" "$(BUILDDIR)/latex" $(SPHINXOPTS)
	@cd "$(BUILDDIR)/latex" && make

pdf-ar:
	@echo "Building Arabic PDF documentation..."
	@$(SPHINXBUILD) -b latex -D language=ar "$(SOURCEDIR)" "$(BUILDDIR)/latex-ar" $(SPHINXOPTS)
	@cd "$(BUILDDIR)/latex-ar" && make

epub-en:
	@echo "Building English EPUB documentation..."
	@$(SPHINXBUILD) -b epub "$(SOURCEDIR)" "$(BUILDDIR)/epub" $(SPHINXOPTS)

epub-ar:
	@echo "Building Arabic EPUB documentation..."
	@$(SPHINXBUILD) -b epub -D language=ar "$(SOURCEDIR)" "$(BUILDDIR)/epub-ar" $(SPHINXOPTS)

# Extract translatable messages
gettext:
	@echo "Extracting translatable messages..."
	@$(SPHINXBUILD) -M gettext "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS)
	@sphinx-intl update -p "$(BUILDDIR)/gettext" -l ar

# Build all formats
all: html-en html-ar pdf-en pdf-ar epub-en epub-ar

# Enterprise deployment target
deploy: all
	@echo "All documentation formats built successfully!"
	@echo "English HTML: $(BUILDDIR)/html/"
	@echo "Arabic HTML: $(BUILDDIR)/html-ar/"
	@echo "English PDF: $(BUILDDIR)/latex/ArabicOSPlatformDocumentation.pdf"
	@echo "Arabic PDF: $(BUILDDIR)/latex-ar/ArabicOSPlatformDocumentation.pdf"
	@echo "English EPUB: $(BUILDDIR)/epub/ArabicOSPlatformDocumentation.epub"
	@echo "Arabic EPUB: $(BUILDDIR)/epub-ar/ArabicOSPlatformDocumentation.epub"

# Quick development build
dev: html-en
	@echo "Development HTML build complete: $(BUILDDIR)/html/"

# Clean all builds
clean:
	@echo "Cleaning all build directories..."
	@rm -rf "$(BUILDDIR)"

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)