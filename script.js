// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    });
});

// ===== ACTIVE LINK HIGHLIGHTING =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.querySelector('input[name="name"]')?.value || '',
            email: this.querySelector('input[name="email"]')?.value || '',
            phone: this.querySelector('input[name="phone"]')?.value || '',
            company: this.querySelector('input[name="company"]')?.value || '',
            service: this.querySelector('select[name="service"]')?.value || '',
            budget: this.querySelector('select[name="budget"]')?.value || '',
            message: this.querySelector('textarea[name="message"]')?.value || ''
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        // Simulate submission
        setTimeout(() => {
            console.log('Form Data:', formData);
            showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 16px 24px;
                border-radius: 12px;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
                max-width: 400px;
            }

            .notification-success {
                background: linear-gradient(135deg, #00d4ff, #0066ff);
                color: white;
                border: 1px solid rgba(0, 212, 255, 0.3);
                box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
            }

            .notification-error {
                background: linear-gradient(135deg, #ff6b6b, #ff0066);
                color: white;
                border: 1px solid rgba(255, 0, 102, 0.3);
            }

            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @media (max-width: 480px) {
                .notification {
                    left: 10px;
                    right: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .team-member-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && window.scrollY < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
});

// ===== DYNAMIC YEAR =====
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerContent = document.querySelector('.footer-bottom');
    if (footerContent && footerContent.innerHTML.includes('2026')) {
        footerContent.innerHTML = footerContent.innerHTML.replace('2026', year.toString());
    }
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    const observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            statNumbers.forEach(stat => {
                const number = parseInt(stat.textContent);
                animateCounter(stat, number);
            });
            observer2.unobserve(entries[0].target);
        }
    });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer2.observe(heroStats);
}

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Initialize first filter button
if (filterButtons.length > 0) {
    filterButtons[0].classList.add('active');
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    }
});

console.log('%c🚀 TechOl - Digital Excellence Redefined', 'font-size: 16px; color: #00d4ff; font-weight: bold;');
console.log('%cPremium Digital Design & Development Studio', 'font-size: 12px; color: #0066ff;');