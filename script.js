// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initNewsletterForm();
    loadInstagramFeed();
    loadLatestBlogPosts();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(35, 31, 32, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(35, 31, 32, 0.1)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // Add scroll-animate class to elements that should animate on scroll
    const elementsToAnimate = [
        '.about-content',
        '.blog-card',
        '.stat-item',
        '.newsletter-content'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('scroll-animate');
            observer.observe(el);
        });
    });
}

// Newsletter form functionality
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Show loading state
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.innerHTML = '<span class="loading"></span> Subscribing...';
                button.disabled = true;

                // Simulate API call (replace with actual newsletter service)
                setTimeout(() => {
                    button.textContent = 'Subscribed!';
                    button.style.background = '#28a745';
                    this.querySelector('input').value = '';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        button.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    }
}

// Load Instagram feed with real posts
function loadInstagramFeed() {
    const feedContainer = document.getElementById('instagram-feed');
    if (!feedContainer) return;

    // Instagram posts data - using the provided URLs
    const instagramPosts = [
        {
            id: 'DMI8K-kua-F',
            url: 'https://www.instagram.com/p/DMI8K-kua-F/',
            embedUrl: 'https://www.instagram.com/p/DMI8K-kua-F/embed'
        },
        {
            id: 'DMGuIzYuWHp',
            url: 'https://www.instagram.com/p/DMGuIzYuWHp/',
            embedUrl: 'https://www.instagram.com/p/DMGuIzYuWHp/embed'
        },
        {
            id: 'DMGVVcWOk4O',
            url: 'https://www.instagram.com/p/DMGVVcWOk4O/',
            embedUrl: 'https://www.instagram.com/p/DMGVVcWOk4O/embed'
        }
    ];

    // Create Instagram feed HTML
    const feedHTML = `
        <div class="instagram-grid">
            ${instagramPosts.map(post => `
                <div class="instagram-post" data-post-id="${post.id}">
                    <iframe src="${post.embedUrl}" 
                            width="320" 
                            height="400" 
                            frameborder="0" 
                            scrolling="no" 
                            allowtransparency="true"
                            loading="lazy">
                    </iframe>
                </div>
            `).join('')}
        </div>
        <div class="instagram-cta">
            <a href="https://www.instagram.com/wherebebe/" target="_blank" class="btn btn-primary">
                <i class="fab fa-instagram"></i> Follow @wherebebe
            </a>
        </div>
    `;

    feedContainer.innerHTML = feedHTML;

    // Add loading animation
    const posts = feedContainer.querySelectorAll('.instagram-post');
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        setTimeout(() => {
            post.style.transition = 'all 0.6s ease';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Blog posts database (simulating a CMS/API)
const blogPosts = [
    {
        id: 1,
        title: "Fort Worth's Best-Kept Dining Secrets",
        excerpt: "If you're looking for some of the best restaurants in Fort Worth, look no further. Whether you're looking for Mexican food, barbecue, or just somewhere to get a good burger, we've got you covered. Just be warned: once you've tried some of these places, you'll want to keep returning to sample more of their delicious food.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop&crop=center",
        category: "Food",
        date: "2024-04-22",
        author: "Getaway Staff",
        readTime: "5 min read",
        slug: "fort-worth-food-secrets",
        featured: true
    },
    {
        id: 2,
        title: "Fort Worth Nightlife Recharged",
        excerpt: "Fort Worth’s nightlife is buzzing in 2025, proving the city’s after-hours scene is thriving. From the laid-back charm of Magnolia Motor Lounge to the craft cocktails at The Usual and high-energy shows at Tulips FTW, there’s something for every night owl. These spots are where locals connect, music plays, and Fort Worth’s spirit comes alive past midnight.",
        image: "images/dark.png",
        category: "Nightlife",
        date: "2025-04-25",
        author: "Mladen Petrovic",
        readTime: "7 min read",
        slug: "fort-worth-nightlife-guide",
        featured: true
    }
];

// Load latest blog posts dynamically
function loadLatestBlogPosts() {
    const postsContainer = document.getElementById('latest-posts');
    if (!postsContainer) return;

    // Get the 2 most recent posts
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

    // Create blog posts HTML
    const postsHTML = latestPosts.map((post, index) => {
        const readMoreLink = index === 0 ? 
            "https://thegetaway.com/destinations/fort-worths-best-kept-dining-secrets/" : 
            "https://www.fwweekly.com/2025/04/25/fort-worth-nightlife-recharged/";
        
        return `
        <article class="blog-card" data-post-id="${post.id}">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
                <div class="blog-category">${post.category}</div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${formatDate(post.date)}</span>
                    <span class="blog-read-time">${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-footer">
                    <a href="${readMoreLink}" target="_blank" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    <div class="blog-author">By ${post.author}</div>
                </div>
            </div>
        </article>
        `;
    }).join('');

    postsContainer.innerHTML = postsHTML;

    // Add loading animation
    const cards = postsContainer.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300 + 500);
    });
}

// Helper function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to get all blog posts
function getAllBlogPosts() {
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to get featured blog posts
function getFeaturedBlogPosts() {
    return blogPosts.filter(post => post.featured);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// Add loading states for buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && e.target.tagName === 'A') {
        // Add loading effect for external links
        if (e.target.href && e.target.href.startsWith('http') && !e.target.href.includes(window.location.hostname)) {
            e.target.style.opacity = '0.7';
            setTimeout(() => {
                e.target.style.opacity = '1';
            }, 300);
        }
    }
});

// Animate stats on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
                
                if (numericValue > 0) {
                    animateNumber(target, 0, numericValue, finalValue);
                }
                observer.unobserve(target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, originalText) {
    const duration = 2000;
    const increment = end / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = originalText;
            clearInterval(timer);
        } else {
            const suffix = originalText.includes('K') ? 'K+' : '+';
            element.textContent = Math.floor(current / 1000) + suffix;
        }
    }, 16);
}

// Initialize stats animation
document.addEventListener('DOMContentLoaded', animateStats);

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.blog-card, .stat-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Preload images for better performance
function preloadImages() {
    const images = [
        'images/main-logo.png',
        'images/logo2.png',
        'images/logo-text.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Enhanced Charts Animation
function initializeCharts() {
    // Animate bar charts
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('age-bars')) {
                    animateBarChart(entry.target);
                } else if (entry.target.classList.contains('pie-chart')) {
                    animatePieChart(entry.target);
                } else if (entry.target.classList.contains('donut-chart')) {
                    animateDonutChart(entry.target);
                } else if (entry.target.classList.contains('line-chart')) {
                    animateLineChart(entry.target);
                }
                chartObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all chart elements
    document.querySelectorAll('.age-bars, .pie-chart, .donut-chart, .line-chart').forEach(chart => {
        chartObserver.observe(chart);
    });
}

function animateBarChart(container) {
    const bars = container.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animation = 'fillBar 1.5s ease-out forwards';
        }, index * 200);
    });
}

function animatePieChart(chart) {
    chart.style.animation = 'fadeIn 1s ease-out forwards, scaleIn 0.8s ease-out 0.2s forwards';
}

function animateDonutChart(chart) {
    chart.style.animation = 'fadeIn 1s ease-out forwards, rotateIn 1.2s ease-out 0.3s forwards';
}

function animateLineChart(chart) {
    const svg = chart.querySelector('.line-svg');
    if (svg) {
        const lines = svg.querySelectorAll('.engagement-line, .reach-line');
        const points = svg.querySelectorAll('.data-point');
        
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.animation = 'drawLine 2s ease-out forwards';
            }, index * 500);
        });
        
        points.forEach((point, index) => {
            setTimeout(() => {
                point.style.animation = 'fadeInPoint 0.5s ease-out forwards';
            }, 1000 + (index * 100));
        });
    }
}

// Add CSS animations for charts
function addChartAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            from { transform: scale(0.8); }
            to { transform: scale(1); }
        }
        
        @keyframes rotateIn {
            from { transform: rotate(-90deg) scale(0.8); }
            to { transform: rotate(0deg) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize preloading and charts
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    initializeCharts();
    addChartAnimations();
});

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
    });
});

// Portfolio Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.getElementById('carousel-slides');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!carouselSlides || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const totalSlides = 3;
    
    function updateCarousel() {
        const translateX = -currentSlide * (100 / totalSlides);
        carouselSlides.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto-play carousel (optional)
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-play on hover
    const phoneFrame = document.querySelector('.phone-frame');
    if (phoneFrame) {
        phoneFrame.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        phoneFrame.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carouselSlides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carouselSlides.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
});
