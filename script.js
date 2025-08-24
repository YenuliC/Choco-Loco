// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initCategoryTabs();
    initFormHandling();
    initScrollAnimations();
    initTestimonialNavigation();
    initPagination();
    initHeaderScroll();
    
    // Hide cupcakes and cookies initially, show only cakes
    hideNonCakeItems();
    filterProducts('cakes');
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .footer-nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

// Category Tabs Functionality
function initCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const productItems = document.querySelectorAll('.product-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
}

// Hide Non-Cake Items Initially
function hideNonCakeItems() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category !== 'cakes') {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

// Filter Products by Category
function filterProducts(category) {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (itemCategory === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
    
    // Update pagination info based on visible items
    updatePaginationInfo();
}

// Update Pagination Info
function updatePaginationInfo() {
    const visibleItems = document.querySelectorAll('.product-item[style*="display: block"]');
    const totalVisible = visibleItems.length;
    const paginationInfo = document.querySelector('.pagination-info');
    
    if (paginationInfo && totalVisible > 0) {
        paginationInfo.textContent = `01/${totalVisible.toString().padStart(2, '0')}`;
    }
}

// Form Handling
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const customerName = formData.get('customerName');
            const phone = formData.get('phone');
            const cakeType = formData.get('cakeType');
            const eventDate = formData.get('eventDate');
            
            // Validate required fields
            if (!customerName || !phone || !cakeType || !eventDate) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Allow form to submit to Formspree
            // The form will submit normally and redirect to Formspree success page
        });
    }
}



// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-title, .product-item, .filling-options, .testimonial, .contact-info');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Testimonial Navigation
function initTestimonialNavigation() {
    const testimonials = [
        {
            text: "Wonderful bakery. It's always nice to sit in their cafe with a Cup of tea and a piece of my favorite cake. I love Snickers filling. When it is not possible to come to the cafe, I always use delivery. Cake bakeries always work quickly. Thanks.",
            author: "Julia Lan"
        },
        {
            text: "The best cakes I've ever tasted! The red velvet cake is absolutely divine. The staff is friendly and the cafe atmosphere is perfect for family gatherings.",
            author: "Michael Chen"
        },
        {
            text: "I ordered a custom birthday cake for my daughter and it was beyond my expectations. Beautiful design and delicious taste. Highly recommended!",
            author: "Sarah Johnson"
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialText = document.querySelector('.testimonial p');
    const testimonialAuthor = document.querySelector('.testimonial cite');
    const prevButton = document.querySelector('.reviews-navigation .nav-arrow:first-child');
    const nextButton = document.querySelector('.reviews-navigation .nav-arrow:last-child');
    
    function updateTestimonial() {
        if (testimonialText && testimonialAuthor) {
            testimonialText.style.opacity = '0';
            testimonialAuthor.style.opacity = '0';
            
            setTimeout(() => {
                testimonialText.textContent = testimonials[currentTestimonial].text;
                testimonialAuthor.textContent = `- ${testimonials[currentTestimonial].author}`;
                
                testimonialText.style.opacity = '1';
                testimonialAuthor.style.opacity = '1';
            }, 200);
        }
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial();
        });
    }
}

// Pagination Functionality
function initPagination() {
    const prevButton = document.querySelector('.pagination-arrow:first-child');
    const nextButton = document.querySelector('.pagination-arrow:last-child');
    const pageInfo = document.querySelector('.pagination-info');
    
    let currentPage = 1;
    const totalPages = 5;
    
    function updatePagination() {
        if (pageInfo) {
            pageInfo.textContent = `${String(currentPage).padStart(2, '0')}/${String(totalPages).padStart(2, '0')}`;
        }
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
                // Here you would typically load new products
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
                // Here you would typically load new products
            }
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Order Button Functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('order-button') || e.target.classList.contains('cta-button')) {
        e.preventDefault();
        
        // Scroll to contact form
        const contactForm = document.querySelector('.application');
        if (contactForm) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = contactForm.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Perform scroll-based operations here
        }, 16); // ~60fps
    });
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    optimizePerformance();
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
