/**
 * Arabic OS Gallery Component
 * Displays screenshots of the OS running on different platforms
 */

class ArabicOSGallery {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [
            {
                id: 'qemu',
                src: 'gallery/images/Qemu_Booted.png',
                thumbnail: 'gallery/images/Qemu_Booted.png',
                fallback: 'gallery/images/Qemu_Booted.png'
            },
            {
                id: 'virtualbox',
                src: 'gallery/images/VirtualBox_Booted.png',
                thumbnail: 'gallery/images/VirtualBox_Booted.png',
                fallback: 'gallery/images/VirtualBox_Booted.png'
            },
            {
                id: 'qemu-bootloader',
                src: 'gallery/images/Qemu_BootLoader.png',
                thumbnail: 'gallery/images/Qemu_BootLoader.png',
                fallback: 'gallery/images/Qemu_BootLoader.png'
            },
            {
                id: 'qemu-startup',
                src: 'gallery/images/Qemu_Startup.png',
                thumbnail: 'gallery/images/Qemu_Startup.png',
                fallback: 'gallery/images/Qemu_Startup.png'
            },
            {
                id: 'virtualbox-bootloader',
                src: 'gallery/images/VirtualBox_BootLoader.png',
                thumbnail: 'gallery/images/VirtualBox_BootLoader.png',
                fallback: 'gallery/images/VirtualBox_BootLoader.png'
            },
            {
                id: 'virtualbox-startup',
                src: 'gallery/images/VirtualBox_StartUp.png',
                thumbnail: 'gallery/images/VirtualBox_StartUp.png',
                fallback: 'gallery/images/VirtualBox_StartUp.png'
            },
            {
                id: 'bochs',
                src: 'gallery/images/bochs-terminal.svg',
                thumbnail: 'gallery/images/bochs-terminal.svg',
                fallback: 'gallery/images/bochs-terminal.svg'
            },
            {
                id: 'realHardware',
                src: 'gallery/images/real-hardware.svg',
                thumbnail: 'gallery/images/real-hardware.svg',
                fallback: 'gallery/images/real-hardware.svg'
            }
        ];

        this.init();
    }

    init() {
        this.createGalleryHTML();
        this.attachEventListeners();
        this.loadImages();
    }

    createGalleryHTML() {
        // Gallery CSS
        if (!document.querySelector('#galleryCSS')) {
            const css = `
                <style id="galleryCSS">
                .gallery-container {
                    margin: 2em 0;
                    padding: 2em;
                    background: linear-gradient(135deg, #F5F5F5 0%, #E8F5E8 100%);
                    border-radius: 15px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }

                .gallery-item {
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .gallery-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                }

                .gallery-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    background: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    font-size: 14px;
                }

                .gallery-content {
                    padding: 15px;
                }

                .gallery-title {
                    font-weight: 600;
                    color: var(--primary-color, #2E7D32);
                    margin-bottom: 8px;
                }

                .gallery-description {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.4;
                    margin-bottom: 8px;
                }

                .gallery-platform {
                    font-size: 12px;
                    color: #888;
                    font-style: italic;
                }

                .gallery-lightbox {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    z-index: 1000;
                    justify-content: center;
                    align-items: center;
                }

                .gallery-lightbox.active {
                    display: flex;
                }

                .gallery-lightbox-content {
                    max-width: 90%;
                    max-height: 90%;
                    position: relative;
                }

                .gallery-lightbox-image {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 8px;
                }

                .gallery-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    color: white;
                    font-size: 30px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    padding: 5px;
                }

                .gallery-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.2);
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    font-size: 20px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background 0.3s;
                }

                .gallery-nav:hover {
                    background: rgba(255,255,255,0.3);
                }

                .gallery-prev {
                    left: -60px;
                }

                .gallery-next {
                    right: -60px;
                }

                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: 1fr;
                    }

                    .gallery-nav {
                        top: auto;
                        bottom: -50px;
                        transform: none;
                    }

                    .gallery-prev {
                        left: 20px;
                    }

                    .gallery-next {
                        right: 20px;
                    }
                }

                [dir="rtl"] .gallery-container {
                    text-align: right;
                }

                [dir="rtl"] .gallery-content {
                    text-align: right;
                }
                </style>
            `;
            document.head.insertAdjacentHTML('beforeend', css);
        }
    }

    attachEventListeners() {
        // Close lightbox on click outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-lightbox')) {
                this.closeLightbox();
            }
        });

        // Close lightbox on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox();
            }
        });

        // Arrow key navigation
        document.addEventListener('keydown', (e) => {
            const lightbox = document.querySelector('.gallery-lightbox');
            if (lightbox && lightbox.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    this.previousImage();
                } else if (e.key === 'ArrowRight') {
                    this.nextImage();
                }
            }
        });
    }

    loadImages() {
        // Pre-load images for better performance
        this.images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }

    openLightbox(imageId) {
        const imageIndex = this.images.findIndex(img => img.id === imageId);
        if (imageIndex !== -1) {
            this.currentImageIndex = imageIndex;
            this.showLightbox();
        }
    }

    showLightbox() {
        let lightbox = document.querySelector('.gallery-lightbox');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.className = 'gallery-lightbox';
            lightbox.innerHTML = `
                <div class="gallery-lightbox-content">
                    <button class="gallery-close" onclick="gallery.closeLightbox()">&times;</button>
                    <img class="gallery-lightbox-image" src="" alt="">
                    <button class="gallery-nav gallery-prev" onclick="gallery.previousImage()">‹</button>
                    <button class="gallery-nav gallery-next" onclick="gallery.nextImage()">›</button>
                </div>
            `;
            document.body.appendChild(lightbox);
        }

        const image = this.images[this.currentImageIndex];
        const lightboxImage = lightbox.querySelector('.gallery-lightbox-image');

        // Try to load the actual image, fall back to placeholder
        lightboxImage.src = image.fallback;
        lightboxImage.alt = image.id;

        const actualImage = new Image();
        actualImage.onload = () => {
            lightboxImage.src = actualImage.src;
        };
        actualImage.src = image.src;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        const lightbox = document.querySelector('.gallery-lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.showLightbox();
    }

    previousImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.showLightbox();
    }

    generateGalleryHTML() {
        if (!window.content || !window.content.gallery) {
            return '<p>Gallery content not loaded</p>';
        }

        const gallery = window.content.gallery;
        const emulators = gallery.emulators;

        return `
            <div class="gallery-container">
                <h2 data-content="gallery.title">${gallery.title}</h2>
                <p data-content="gallery.subtitle" style="color: #666; margin-bottom: 10px;">${gallery.subtitle}</p>
                <p data-content="gallery.description" style="color: #888; font-size: 14px; margin-bottom: 20px;">${gallery.description}</p>

                <div class="gallery-grid">
                    ${Object.entries(emulators).map(([key, emulator], index) => `
                        <div class="gallery-item" onclick="gallery.openLightbox('${this.images[index]?.id || key}')">
                            <div class="gallery-image">
                                <img src="${this.images[index]?.fallback || ''}"
                                     alt="${emulator.title}"
                                     style="width: 100%; height: 100%; object-fit: cover;"
                                     onload="this.style.display='block'"
                                     onerror="this.style.display='none'; this.parentElement.innerHTML='📷 Screenshot Coming Soon'">
                            </div>
                            <div class="gallery-content">
                                <div class="gallery-title" data-content="gallery.emulators.${key}.title">${emulator.title}</div>
                                <div class="gallery-description" data-content="gallery.emulators.${key}.description">${emulator.description}</div>
                                <div class="gallery-platform" data-content="gallery.emulators.${key}.platform">${emulator.platform}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Initialize gallery when DOM is loaded
let gallery;
document.addEventListener('DOMContentLoaded', () => {
    gallery = new ArabicOSGallery();
    // Make gallery available globally for index.html
    window.gallery = gallery;
});