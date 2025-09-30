/**
 * Arabic OS Language Switcher
 * Universal language switching component for interactive tools
 */

class ArabicOSLanguageSwitcher {
    constructor(options = {}) {
        this.currentLanguage = 'en';
        this.options = {
            persistLanguage: true,
            showNotifications: true,
            autoDetectRTL: true,
            defaultLanguage: 'en',
            ...options
        };

        this.content = {};
        this.callbacks = [];

        this.init();
    }

    init() {
        this.createSwitcherHTML();
        this.loadSavedLanguage();
        this.attachEventListeners();
    }

    createSwitcherHTML() {
        // Check if switcher already exists
        if (document.querySelector('.language-switcher')) return;

        const switcherHTML = `
            <div class="language-switcher" id="languageSwitcher">
                <button class="lang-btn active" onclick="languageSwitcher.switchLanguage('en')" id="langEn">
                    🇺🇸 English
                </button>
                <button class="lang-btn" onclick="languageSwitcher.switchLanguage('ar')" id="langAr">
                    🇸🇦 العربية
                </button>
            </div>
        `;

        // Add CSS if not already present
        if (!document.querySelector('#languageSwitcherCSS')) {
            const css = `
                <style id="languageSwitcherCSS">
                .language-switcher {
                    position: fixed;
                    top: 1rem;
                    right: 1rem;
                    display: flex;
                    gap: 0.5rem;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    border-radius: 8px;
                    padding: 0.25rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .lang-btn {
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(5px);
                }

                .lang-btn:hover {
                    background: rgba(255, 255, 255, 1);
                    border-color: rgba(0, 0, 0, 0.2);
                    transform: translateY(-1px);
                }

                .lang-btn.active {
                    background: #2E7D32;
                    color: white;
                    border-color: #2E7D32;
                    box-shadow: 0 2px 8px rgba(46, 125, 50, 0.3);
                }

                .rtl-mode .language-switcher {
                    right: auto;
                    left: 1rem;
                }

                .rtl-mode {
                    direction: rtl;
                }

                /* Text alignment for RTL */
                .rtl-mode h1, .rtl-mode h2, .rtl-mode h3, .rtl-mode h4, .rtl-mode h5, .rtl-mode h6 {
                    text-align: right;
                }

                .rtl-mode p, .rtl-mode div, .rtl-mode span, .rtl-mode label {
                    text-align: right;
                }

                /* Cards and containers */
                .rtl-mode .demo-card, .rtl-mode .info-card, .rtl-mode .stat-card,
                .rtl-mode .control-group, .rtl-mode .legend-item, .rtl-mode .info-row {
                    text-align: right;
                }

                .rtl-mode .demo-grid, .rtl-mode .controls-grid, .rtl-mode .memory-stats {
                    direction: rtl;
                }

                /* Form elements */
                .rtl-mode input, .rtl-mode select, .rtl-mode textarea {
                    text-align: right;
                    direction: rtl;
                }

                .rtl-mode button {
                    direction: rtl;
                }

                /* Lists */
                .rtl-mode ul, .rtl-mode ol {
                    text-align: right;
                    direction: rtl;
                }

                .rtl-mode li {
                    text-align: right;
                }

                /* Tables */
                .rtl-mode table {
                    direction: rtl;
                }

                .rtl-mode th, .rtl-mode td {
                    text-align: right;
                }

                /* Specific layout adjustments */
                .rtl-mode .header {
                    text-align: center !important; /* Keep headers centered */
                }

                .rtl-mode .intro-section {
                    text-align: center !important; /* Keep intro sections centered */
                }

                .rtl-mode .demo-card {
                    text-align: center !important; /* Keep demo cards centered */
                }

                .rtl-mode .learning-path {
                    text-align: center !important; /* Keep learning path centered */
                }

                .rtl-mode footer {
                    text-align: center !important; /* Keep footer centered */
                }

                .rtl-mode .header h1, .rtl-mode .header h2, .rtl-mode .header p {
                    text-align: center !important; /* Force header text centered */
                }

                .rtl-mode .demo-card h3, .rtl-mode .demo-card p {
                    text-align: center !important; /* Force card content centered */
                }

                .rtl-mode .memory-container {
                    direction: rtl;
                }

                .rtl-mode .stat-box {
                    text-align: center !important; /* Keep stats centered for readability */
                }

                /* Fix positioning for RTL */
                .rtl-mode .language-switcher {
                    right: auto;
                    left: 1rem;
                }

                @media (max-width: 768px) {
                    .language-switcher {
                        position: relative;
                        top: auto;
                        right: auto;
                        left: auto;
                        margin: 1rem auto;
                        justify-content: center;
                        width: fit-content;
                    }
                }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', css);
        }

        // Insert switcher at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', switcherHTML);
    }

    async switchLanguage(lang) {
        if (lang === this.currentLanguage) return;

        const previousLanguage = this.currentLanguage;
        this.currentLanguage = lang;

        console.log(`🔄 Switching language from ${previousLanguage} to ${lang}`);

        try {
            // Update button states
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.getElementById(`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`);
            if (activeBtn) activeBtn.classList.add('active');

            // Apply RTL/LTR mode
            if (this.options.autoDetectRTL) {
                if (lang === 'ar') {
                    document.body.classList.add('rtl-mode');
                    document.documentElement.setAttribute('dir', 'rtl');
                    document.documentElement.setAttribute('lang', 'ar');
                } else {
                    document.body.classList.remove('rtl-mode');
                    document.documentElement.setAttribute('dir', 'ltr');
                    document.documentElement.setAttribute('lang', 'en');
                }
            }

            // Apply content translations
            this.applyTranslations(lang);

            // Save language preference
            if (this.options.persistLanguage) {
                localStorage.setItem('arabicOSLanguage', lang);
            }

            // Execute callbacks with better error handling
            const callbackPromises = this.callbacks.map(async (callback) => {
                try {
                    // Support both sync and async callbacks
                    const result = callback(lang, previousLanguage);
                    if (result instanceof Promise) {
                        await result;
                    }
                } catch (error) {
                    console.error('Language switcher callback error:', error);
                }
            });

            // Wait for all callbacks to complete
            await Promise.allSettled(callbackPromises);

            // Show notification
            if (this.options.showNotifications) {
                this.showNotification(lang);
            }

            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang, previousLanguage }
            }));

            console.log(`✅ Language switch to ${lang} completed successfully`);

        } catch (error) {
            console.error(`❌ Error switching language to ${lang}:`, error);

            // Revert language change on error
            this.currentLanguage = previousLanguage;
            const revertBtn = document.getElementById(`lang${previousLanguage.charAt(0).toUpperCase() + previousLanguage.slice(1)}`);
            if (revertBtn) {
                document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
                revertBtn.classList.add('active');
            }
        }
    }

    registerContent(content) {
        this.content = { ...this.content, ...content };
    }

    applyTranslations(lang) {
        const translations = this.content[lang];
        if (!translations) return;

        Object.entries(translations).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                if (typeof value === 'string') {
                    element.textContent = value;
                } else if (typeof value === 'object') {
                    if (value.html) {
                        element.innerHTML = value.html;
                    } else if (value.text) {
                        element.textContent = value.text;
                    }
                    if (value.attr) {
                        Object.entries(value.attr).forEach(([attr, attrValue]) => {
                            element.setAttribute(attr, attrValue);
                        });
                    }
                }
            }
        });
    }

    showNotification(lang) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-size: 0.9rem;
        `;

        const messages = {
            ar: 'تم تغيير اللغة إلى العربية',
            en: 'Language changed to English'
        };

        notification.textContent = messages[lang] || messages.en;

        // Adjust position for RTL
        if (lang === 'ar') {
            notification.style.right = 'auto';
            notification.style.left = '20px';
            notification.style.transform = 'translateX(-100%)';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            const exitTransform = lang === 'ar' ? 'translateX(-100%)' : 'translateX(100%)';
            notification.style.transform = exitTransform;
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    loadSavedLanguage() {
        if (!this.options.persistLanguage) return;

        const savedLanguage = localStorage.getItem('arabicOSLanguage');
        if (savedLanguage && savedLanguage !== this.currentLanguage) {
            this.switchLanguage(savedLanguage);
        }
    }

    onLanguageChange(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }
    }

    attachEventListeners() {
        // Handle URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && ['en', 'ar'].includes(langParam)) {
            this.switchLanguage(langParam);
        }
    }

    // Helper method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Helper method to check if current language is RTL
    isRTL() {
        return this.currentLanguage === 'ar';
    }
}

// Create global instance
window.languageSwitcher = new ArabicOSLanguageSwitcher();

// Create global function for direct onclick usage (backwards compatibility)
window.switchLanguage = function(lang) {
    if (window.languageSwitcher) {
        // Call the async version but don't wait for it in onclick context
        window.languageSwitcher.switchLanguage(lang).catch(error => {
            console.error('Language switch failed:', error);
        });
    } else {
        console.error('Language switcher not initialized');
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Additional initialization can go here
    });
} else {
    // DOM is already ready
    // Additional initialization can go here
}