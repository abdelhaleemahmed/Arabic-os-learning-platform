/**
 * Arabic OS Content Loader
 * Dynamic content loading system for bilingual support
 */

class ContentLoader {
    constructor() {
        this.currentContent = null;
        this.currentLanguage = 'en';
        this.loadedScripts = new Set(); // Track loaded scripts to avoid duplicates
    }

    async loadContent(toolName, language = 'en', retryCount = 0) {
        const maxRetries = 2;

        try {
            // Clean up previous content
            this.removeContentScript();

            // Add a small delay to ensure cleanup is complete
            await new Promise(resolve => setTimeout(resolve, 50));

            // Try to load the requested language
            await this.loadScript(`content/${language}/${toolName}.js`);

            // Wait a bit for script to execute
            await new Promise(resolve => setTimeout(resolve, 100));

            if (window.content) {
                this.currentContent = window.content;
                this.currentLanguage = language;
                console.log(`✅ Loaded ${language} content for ${toolName}`);
                return;
            } else {
                throw new Error('Content object not found in loaded script');
            }
        } catch (error) {
            console.warn(`⚠️ Failed to load ${language} content for ${toolName} (attempt ${retryCount + 1}):`, error.message);

            // Retry mechanism for transient failures
            if (retryCount < maxRetries) {
                console.log(`🔄 Retrying content load for ${toolName} (${retryCount + 1}/${maxRetries})`);
                await new Promise(resolve => setTimeout(resolve, 200));
                return this.loadContent(toolName, language, retryCount + 1);
            }

            // Fallback to English if not already trying English
            if (language !== 'en') {
                console.log(`🔄 Falling back to English content for ${toolName}`);
                await this.loadScript(`content/en/${toolName}.js`);

                // Wait for script execution
                await new Promise(resolve => setTimeout(resolve, 100));

                if (window.content) {
                    this.currentContent = window.content;
                    this.currentLanguage = 'en';
                    console.log(`✅ Loaded English fallback for ${toolName}`);
                } else {
                    throw new Error(`Failed to load English fallback for ${toolName}`);
                }
            } else {
                throw new Error(`Failed to load content for ${toolName}: ${error.message}`);
            }
        }
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            // Remove existing content script first
            this.removeContentScript();

            const script = document.createElement('script');
            script.src = src;
            script.id = 'current-content-script';
            script.onload = () => {
                console.log(`📄 Script loaded: ${src}`);
                resolve();
            };
            script.onerror = () => {
                console.error(`❌ Failed to load script: ${src}`);
                reject(new Error(`Failed to load script: ${src}`));
            };

            document.head.appendChild(script);
        });
    }

    removeContentScript() {
        // Remove previous content script and clear content
        const existingScript = document.getElementById('current-content-script');
        if (existingScript) {
            existingScript.remove();
        }

        // Clear the global content variable
        if (window.content) {
            delete window.content;
        }
    }

    getText(key) {
        if (!this.currentContent) {
            console.warn(`⚠️ No content loaded, returning key: ${key}`);
            return key;
        }

        const keys = key.split('.');
        let value = this.currentContent;

        // Enhanced debugging for index page
        const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');

        if (isIndexPage && key.startsWith('tools.')) {
            console.log(`🔍 [INDEX] Looking up key: ${key}`);
            console.log(`🔍 [INDEX] Keys path: ${keys.join(' → ')}`);
            console.log(`🔍 [INDEX] Starting with content:`, this.currentContent ? 'exists' : 'missing');
        }

        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const previousValue = value;
            value = value?.[k];

            if (isIndexPage && key.startsWith('tools.')) {
                console.log(`🔍 [INDEX] Step ${i + 1}: ${k} → ${value ? (typeof value === 'object' ? 'object' : `"${value}"`) : 'undefined'}`);
            }

            if (value === undefined) {
                if (isIndexPage && key.startsWith('tools.')) {
                    console.warn(`⚠️ [INDEX] Content key not found at step ${i + 1}: ${key}, failed at "${k}"`);
                    console.warn(`⚠️ [INDEX] Previous value was:`, previousValue);
                } else {
                    console.warn(`⚠️ Content key not found: ${key}, returning key`);
                }
                return key;
            }
        }

        if (isIndexPage && key.startsWith('tools.')) {
            console.log(`✅ [INDEX] Successfully resolved "${key}" → "${value}"`);
        }

        return value || key;
    }

    async applyContent() {
        return this._applyContentInternal();
    }

    // Legacy sync version for backwards compatibility
    applyContentSync() {
        this._applyContentInternal().catch(error => {
            console.error('❌ Error in sync content application:', error);
        });
    }

    async _applyContentInternal() {
        if (!this.currentContent) {
            console.warn('⚠️ No content to apply');
            return false;
        }

        console.log(`🎨 Applying ${this.currentLanguage} content to page`);

        try {
            // Apply content to elements with data-content attributes
            const elementsWithContent = document.querySelectorAll('[data-content]');
            console.log(`📝 Found ${elementsWithContent.length} elements with data-content attributes`);

            let appliedCount = 0;
            let skippedCount = 0;
            elementsWithContent.forEach(element => {
                const key = element.getAttribute('data-content');
                const text = this.getText(key);

                // Skip if text is same as key (not found)
                if (text === key) {
                    console.warn(`⚠️ No translation found for key: ${key}`);
                    skippedCount++;
                    return;
                }

                try {
                    if (element.tagName === 'INPUT' && (element.type === 'button' || element.type === 'submit')) {
                        element.value = text;
                    } else if (element.tagName === 'INPUT' && element.type === 'text') {
                        element.placeholder = text;
                    } else if (element.tagName === 'OPTION') {
                        element.textContent = text;
                    } else {
                        element.textContent = text;
                    }

                    appliedCount++;

                    // More detailed logging for index page
                    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
                        console.log(`📝 [INDEX] Applied "${text}" to ${element.tagName.toLowerCase()} with key "${key}"`);
                    } else {
                        console.log(`📝 Applied "${text}" to element with key "${key}"`);
                    }
                } catch (err) {
                    console.warn(`⚠️ Failed to apply text to element with key "${key}":`, err);
                }
            });

            console.log(`📊 Content application summary: ${appliedCount} applied, ${skippedCount} skipped, ${elementsWithContent.length} total`);

            // Apply page title
            const titleText = this.getText('pageTitle');
            if (titleText !== 'pageTitle') {
                document.title = titleText;
            }

            // Apply RTL/LTR styling with a slight delay to ensure DOM is ready
            await new Promise(resolve => setTimeout(resolve, 50));
            this.applyLanguageDirection();

            // Trigger layout refresh for headers and key elements
            await this.refreshLayoutAlignment();

            console.log(`✅ Successfully applied content to ${appliedCount}/${elementsWithContent.length} elements`);
            return true;

        } catch (error) {
            console.error('❌ Error applying content:', error);
            return false;
        }
    }

    applyLanguageDirection() {
        if (this.currentLanguage === 'ar') {
            document.body.classList.add('rtl-mode');
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');

            // Apply RTL to all containers
            document.querySelectorAll('.container, .controls-section, .visualization-section').forEach(element => {
                element.style.direction = 'rtl';
            });

            // Fix form elements alignment
            document.querySelectorAll('input, select, textarea, button').forEach(element => {
                if (element.type !== 'checkbox' && element.type !== 'radio') {
                    element.style.textAlign = 'right';
                    element.style.direction = 'rtl';
                }
            });

            // Fix text alignment for all text elements
            document.querySelectorAll('p, div, span, label, h1, h2, h3, h4, h5, h6').forEach(element => {
                // Skip elements that should stay centered
                const shouldStayCentered = (
                    element.classList.contains('header') ||
                    element.classList.contains('stat-value') ||
                    element.classList.contains('stat-label') ||
                    element.closest('.header') ||  // Inside header container
                    element.closest('.intro-section') ||  // Inside intro sections
                    element.closest('.demo-card') ||  // Inside demo cards
                    element.closest('.learning-path') ||  // Inside learning path
                    element.closest('footer') ||  // Inside footer
                    // Check for center alignment in CSS
                    getComputedStyle(element).textAlign === 'center'
                );

                if (!shouldStayCentered) {
                    element.style.textAlign = 'right';
                }
            });

            console.log('🔄 Applied comprehensive RTL mode for Arabic');
        } else {
            document.body.classList.remove('rtl-mode');
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');

            // Reset to LTR
            document.querySelectorAll('.container, .controls-section, .visualization-section').forEach(element => {
                element.style.direction = 'ltr';
            });

            // Reset form elements
            document.querySelectorAll('input, select, textarea, button').forEach(element => {
                element.style.textAlign = '';
                element.style.direction = 'ltr';
            });

            // Reset text alignment for all elements
            document.querySelectorAll('p, div, span, label, h1, h2, h3, h4, h5, h6').forEach(element => {
                element.style.textAlign = '';
            });

            // Explicitly restore center alignment for index page elements
            const centerElements = document.querySelectorAll('.header, .intro-section, .demo-card, .learning-path, footer');
            centerElements.forEach(element => {
                element.style.textAlign = 'center';
            });

            console.log('🔄 Applied comprehensive LTR mode for English');
        }
    }

    async refreshLayoutAlignment() {
        // Force layout recalculation and proper alignment
        console.log('🔄 Refreshing layout alignment');

        // Trigger reflow to ensure proper rendering
        const elementsToRefresh = document.querySelectorAll('.header, .intro-section, .demo-card, .learning-path, footer');

        elementsToRefresh.forEach(element => {
            // Force reflow by reading layout properties
            const currentDisplay = element.style.display;
            element.style.display = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.display = currentDisplay || '';

            // Re-apply proper alignment based on current language
            if (this.currentLanguage === 'ar') {
                // For Arabic, ensure these specific elements stay centered
                element.style.textAlign = 'center';
            } else {
                // For English, ensure center alignment
                element.style.textAlign = 'center';
            }
        });

        // Special handling for header elements
        const headers = document.querySelectorAll('.header h1, .header h2, .header p');
        headers.forEach(header => {
            header.style.textAlign = 'center';
        });

        // Special handling for demo card content
        const demoCards = document.querySelectorAll('.demo-card');
        demoCards.forEach(card => {
            card.style.textAlign = 'center';
            // Ensure child elements also stay centered
            const cardElements = card.querySelectorAll('h3, p, div, span');
            cardElements.forEach(el => el.style.textAlign = 'center');
        });

        // Special handling for index page
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            this.enforceIndexPageCenterAlignment();
        }

        // Wait for render to complete
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log('✅ Layout alignment refreshed');
    }

    enforceIndexPageCenterAlignment() {
        console.log('🎯 Enforcing center alignment for index page');

        // Override all text alignment for index page elements
        const indexElements = [
            '.header', '.header *',
            '.intro-section', '.intro-section *',
            '.demo-card', '.demo-card *',
            '.learning-path', '.learning-path *',
            'footer', 'footer *'
        ];

        indexElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.textAlign = 'center';
                element.style.setProperty('text-align', 'center', 'important');
            });
        });

        // Ensure the main container stays centered
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.textAlign = 'center';
        });

        console.log('✅ Index page center alignment enforced');
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getCurrentContent() {
        return this.currentContent;
    }

    // Helper method to update specific content dynamically
    updateText(elementId, contentKey) {
        const element = document.getElementById(elementId);
        if (element) {
            const text = this.getText(contentKey);
            element.textContent = text;
            return true;
        }
        return false;
    }

    // Enhanced page initialization helper
    async initializePage(toolName, options = {}) {
        const opts = {
            autoLoadContent: true,
            enableLanguageSwitcher: true,
            retryOnFailure: true,
            ...options
        };

        console.log(`🚀 Initializing page for tool: ${toolName}`);

        try {
            // Get current language from localStorage or default to English
            const currentLanguage = localStorage.getItem('arabicOSLanguage') || 'en';

            if (opts.autoLoadContent) {
                // Load content with retry mechanism
                await this.loadContent(toolName, currentLanguage);
                await this.applyContent();
                console.log(`✅ ${toolName} content loaded successfully`);
            }

            if (opts.enableLanguageSwitcher && window.languageSwitcher) {
                // Register with language switcher for future changes
                window.languageSwitcher.onLanguageChange(async (newLang) => {
                    console.log(`🔄 ${toolName} language change requested: ${newLang}`);
                    try {
                        await this.loadContent(toolName, newLang);
                        const success = await this.applyContent();
                        if (success) {
                            console.log(`✅ ${toolName} switched to ${newLang} content successfully`);
                        } else {
                            throw new Error('Failed to apply content');
                        }
                    } catch (error) {
                        console.error(`❌ Failed to switch ${toolName} to ${newLang}:`, error);

                        if (opts.retryOnFailure) {
                            console.log(`🔄 Retrying ${toolName} language switch after 500ms`);
                            setTimeout(async () => {
                                try {
                                    await this.loadContent(toolName, newLang);
                                    await this.applyContent();
                                    console.log(`✅ ${toolName} retry successful for ${newLang}`);
                                } catch (retryError) {
                                    console.error(`❌ ${toolName} retry failed:`, retryError);
                                }
                            }, 500);
                        }
                    }
                });
            }

            return true;
        } catch (error) {
            console.error(`❌ Failed to initialize ${toolName}:`, error);
            return false;
        }
    }
}

// Create global content loader instance
window.contentLoader = new ContentLoader();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🚀 Content Loader ready');
    });
} else {
    console.log('🚀 Content Loader ready');
}

// Global validation function for debugging
window.validateLanguageSwitching = function() {
    console.log('🔍 Validating language switching setup...');

    const checks = {
        contentLoader: !!window.contentLoader,
        languageSwitcher: !!window.languageSwitcher,
        switchLanguageFunction: typeof window.switchLanguage === 'function',
        dataContentElements: document.querySelectorAll('[data-content]').length,
        languageButtons: document.querySelectorAll('.lang-btn').length
    };

    console.log('✅ Language switching validation:', checks);
    return checks;
};