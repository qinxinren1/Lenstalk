// Unified Navigation Component
// This script provides consistent navigation across all pages

class NavigationManager {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename.replace('.html', '');
    }

    generateNavigation() {
        const navItems = [
            { name: 'Home', href: 'index.html', key: 'index' },
            { 
                name: 'Program', 
                href: 'program.html', 
                key: 'program',
                hasDropdown: true,
                dropdownItems: [
                    { name: 'One on one Intensive Chinese', href: 'program-intensive.html' },
                    { name: 'One on one Business Chinese', href: 'program-business.html' },
                    { name: 'One on one Travel Chinese', href: 'program-travel.html' },
                    { name: 'One on one HSK preparation', href: 'program.html#hsk' }
                ]
            },
            { name: 'Location', href: 'location.html', key: 'location' },
            { 
                name: 'Enrollment', 
                href: 'enrollment.html', 
                key: 'enrollment',
                hasDropdown: true,
                dropdownItems: [
                    { name: 'requirements of apply class', href: 'enrollment.html#requirements-section' },
                    { name: 'payment methods', href: 'enrollment.html#payment-section' },
                    { name: 'FAQ', href: 'enrollment.html#faq-section' }
                ]
            },
            { name: 'Apply Now', href: 'apply.html', key: 'apply', isSpecial: true },
            { name: 'Community', href: 'community.html', key: 'community' },
            { name: 'About Us', href: 'about.html', key: 'about' },
            { name: 'Contact Us', href: 'contact.html', key: 'contact' }
        ];

        let navHTML = '';
        
        navItems.forEach(item => {
            const isActive = this.currentPage === item.key ? 'active' : '';
            const specialClass = item.isSpecial ? 'nav-apply-btn' : '';
            
            if (item.hasDropdown) {
                navHTML += `
                    <li class="nav-dropdown" style="position: relative;">
                        <a href="${item.href}" class="nav-link ${isActive} ${specialClass}">${item.name}</a>
                        <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px; opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 1000; min-width: 280px; padding: 8px 0;">
                `;
                
                item.dropdownItems.forEach(dropdownItem => {
                    navHTML += `
                        <a href="${dropdownItem.href}" class="nav-scroll-link" style="display: block; padding: 8px 16px; color: #333; text-decoration: none; transition: background 0.2s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">${dropdownItem.name}</a>
                    `;
                });
                
                navHTML += `
                        </div>
                    </li>
                `;
            } else {
                navHTML += `
                    <li><a href="${item.href}" class="nav-link ${isActive} ${specialClass}">${item.name}</a></li>
                `;
            }
        });

        return navHTML;
    }

    init() {
        // Find all navigation menus and update them
        const navMenus = document.querySelectorAll('.nav-menu');
        
        navMenus.forEach(navMenu => {
            navMenu.innerHTML = this.generateNavigation();
        });

        // Initialize dropdown functionality
        this.initDropdowns();
        
        // Initialize mobile navigation
        this.initMobileNav();
    }

    initDropdowns() {
        const navDropdowns = document.querySelectorAll('.nav-dropdown');
        
        navDropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (dropdownMenu) {
                // Hover effect for Program dropdown in navbar
                dropdown.addEventListener('mouseenter', function() {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.visibility = 'visible';
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                });
                
                // Keep dropdown visible when hovering over the dropdown menu
                dropdownMenu.addEventListener('mouseenter', function() {
                    this.style.opacity = '1';
                    this.style.visibility = 'visible';
                });
                
                dropdownMenu.addEventListener('mouseleave', function() {
                    this.style.opacity = '0';
                    this.style.visibility = 'hidden';
                });
            }
        });
    }

    initMobileNav() {
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
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new NavigationManager();
});
