// Main JavaScript functionality for Study Chinese in China website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = document.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            }
        });
    });

    // Navigation links - allow page navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for anchor links (starting with #)
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // For HTML page links, allow normal navigation
        });
    });

    // Modal functionality
    const modal = document.getElementById('applyModal');
    const applyButtons = document.querySelectorAll('[onclick="openApplyForm()"]');
    const closeBtn = document.querySelector('.close');
    
    // Open modal
    window.openApplyForm = function() {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Form submission handling
    const applyForm = document.querySelector('.apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.country || !data.program) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            submitApplication(data);
        });
    }

    // Smooth scroll to section function
    window.scrollToSection = function(sectionId) {
        const targetSection = document.querySelector('#' + sectionId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.program-card, .location-card, .step, .requirement, .value');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for statistics
    const statNumbers = document.querySelectorAll('.stat-item h4');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Start counter when element is visible
        const statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statObserver.observe(stat);
    });
});

// Form submission function
function submitApplication(data) {
    // Show loading state
    const submitBtn = document.querySelector('.apply-form .btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success message
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h2 style="color: #27ae60; margin-bottom: 1rem;">Application Submitted!</h2>
                <p style="color: #666; margin-bottom: 2rem;">
                    Thank you for your interest in studying Chinese in China! 
                    We have received your application and will contact you within 24-48 hours.
                </p>
                <button class="btn btn-primary" onclick="closeModal()">Close</button>
            </div>
        `;
        
        // Reset form
        document.querySelector('.apply-form').reset();
    }, 2000);
}

// Application form submission for apply.html page
function submitApplication(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.country || !data.program || !data.startDate || !data.motivation) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success message
        form.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h3 style="color: #27ae60; margin-bottom: 1rem;">Application Submitted Successfully!</h3>
                <p style="color: #666; margin-bottom: 2rem;">
                    Thank you for your interest in studying Chinese with LensTalk! 
                    We have received your application and our admissions team will review it within 3-5 business days.
                </p>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; text-align: left;">
                    <h4 style="color: #2c3e50; margin-bottom: 1rem;">What happens next?</h4>
                    <ul style="color: #666; margin: 0; padding-left: 1.5rem;">
                        <li>Application review (3-5 business days)</li>
                        <li>Interview scheduling (if required)</li>
                        <li>Admission decision notification</li>
                        <li>Visa support and guidance</li>
                        <li>Pre-arrival orientation</li>
                    </ul>
                </div>
                <p style="color: #666; font-size: 0.9rem;">
                    If you have any questions, please contact us at <strong>info@lenstalk.com</strong> or call <strong>+86 10 1234 5678</strong>
                </p>
                <button class="btn btn-primary" onclick="location.reload()">Submit Another Application</button>
            </div>
        `;
    }, 2000);
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('applyModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset modal content
        setTimeout(() => {
            location.reload();
        }, 300);
    }
}

// Add loading animation for images (placeholder for future real images)
function preloadImages() {
    const imageUrls = [
        // Add real image URLs here when available
        // 'images/hero-bg.jpg',
        // 'images/beijing.jpg',
        // 'images/shanghai.jpg',
        // 'images/chengdu.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('applyModal');
    
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        closeModal();
    }
});

// Add form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Success message
        form.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h3 style="color: #27ae60; margin-bottom: 1rem;">Message Sent!</h3>
                <p style="color: #666; margin-bottom: 2rem;">
                    Thank you for contacting us! We have received your message and will respond within 24 hours.
                </p>
                <button class="btn btn-primary" onclick="location.reload()">Send Another Message</button>
            </div>
        `;
    }, 2000);
}

// Add smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll reveal
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger initial reveal
    revealOnScroll();
});

// Add active navigation highlighting based on current page
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Function to highlight current page in navigation
    function highlightCurrentPage() {
        navLinks.forEach(link => {
            // Remove active class from all links first
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            
            // Check if this link matches the current page
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Highlight current page on load
    highlightCurrentPage();
    
    // Debug: log current page for troubleshooting
    console.log('Current page:', currentPage);
}); 