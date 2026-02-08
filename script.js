// ===================================
// Smooth Scrolling Navigation
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // ===================================
    // Active Navigation Link Highlighting
    // ===================================
    
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ===================================
    // Gallery Lightbox Functionality
    // ===================================
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Open lightbox on gallery item click
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Check if there's an actual image (not a placeholder)
            const imgElement = this.querySelector('img');
            
            if (imgElement && imgElement.src) {
                lightbox.style.display = 'block';
                lightboxImg.src = imgElement.src;
                lightboxImg.alt = imgElement.alt || 'Gallery image';
                
                // Set caption if available
                const caption = this.querySelector('.gallery-placeholder p');
                if (caption) {
                    document.querySelector('.lightbox-caption').textContent = caption.textContent;
                }
            }
        });
    });
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
    
    // ===================================
    // Scroll Animation for Elements
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.project-card, .blog-item, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===================================
    // Table Row Hover Effect Enhancement
    // ===================================
    
    const tableRows = document.querySelectorAll('.talks-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f3f2f1';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // ===================================
    // Navbar Shadow on Scroll
    // ===================================
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ===================================
    // Utility: Copy Email to Clipboard (if needed)
    // ===================================
    
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            console.log('Copied to clipboard:', text);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
        
        document.body.removeChild(textarea);
    }
    
    // ===================================
    // Gallery Image Loading
    // ===================================
    
    // This function will help replace placeholders with actual images
    // when they are added to the images folder
    function loadGalleryImages() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            const imageNumber = item.getAttribute('data-image');
            const placeholder = item.querySelector('.gallery-placeholder');
            
            // Example image paths - update these when actual images are added
            const imagePaths = {
                '1': 'images/conference1.jpg',
                '2': 'images/speaking1.jpg',
                '3': 'images/community1.jpg',
                '4': 'images/workshop1.jpg',
                '5': 'images/conference2.jpg',
                '6': 'images/speaking2.jpg',
                '7': 'images/demo1.jpg',
                '8': 'images/community2.jpg',
                '9': 'images/conference3.jpg'
            };
            
            const imagePath = imagePaths[imageNumber];
            
            if (imagePath) {
                // Create a new image element
                const img = new Image();
                img.src = imagePath;
                
                // If image loads successfully, replace placeholder
                img.onload = function() {
                    item.innerHTML = '';
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    img.alt = placeholder ? placeholder.querySelector('p').textContent : 'Gallery image';
                    item.appendChild(img);
                };
                
                // If image fails to load, keep the placeholder
                img.onerror = function() {
                    console.log(`Image not found: ${imagePath} - Placeholder will remain visible`);
                };
            }
        });
    }
    
    // Call the function to attempt loading images
    // Images will only load if they exist in the images folder
    loadGalleryImages();
    
    // ===================================
    // Profile Image Loading
    // ===================================
    
    // Try to load the user's profile image, fallback to placeholder if not found
    function loadProfileImage() {
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            // Try jpg first, then png if jpg fails
            const tryLoadImage = (path, fallbackPath) => {
                const img = new Image();
                img.src = path;
                
                img.onload = function() {
                    profileImg.src = path;
                    console.log(`Profile image loaded: ${path}`);
                };
                
                img.onerror = function() {
                    console.log(`Profile image not found: ${path}`);
                    if (fallbackPath) {
                        // Try fallback image
                        const fallbackImg = new Image();
                        fallbackImg.src = fallbackPath;
                        
                        fallbackImg.onload = function() {
                            profileImg.src = fallbackPath;
                            console.log(`Profile image loaded: ${fallbackPath}`);
                        };
                        
                        fallbackImg.onerror = function() {
                            console.log(`Profile image not found: ${fallbackPath} - Using placeholder`);
                        };
                    } else {
                        console.log('Using placeholder image');
                    }
                };
            };
            
            // Try jpg first, then png as fallback
            tryLoadImage('images/profile.jpg', 'images/profile.png');
        }
    }
    
    // Load profile image on page load
    loadProfileImage();
    
    // ===================================
    // Performance: Lazy Load Images
    // ===================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute (for future optimization)
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===================================
// Console Welcome Message
// ===================================

console.log('%c👋 Welcome to Milan Kaur\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #E91E63;');
console.log('%cDeveloper Relations & AI Advocacy', 'font-size: 14px; color: #605E5C;');
console.log('%cInterested in collaboration? Let\'s connect!', 'font-size: 12px; color: #323130;');
