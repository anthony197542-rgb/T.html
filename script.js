// Mobile menu functionality
function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

// Smooth scroll to sections when clicking navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                closeMenu();
            }
        });
    });
});

// Email validation for forms
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Handle form submissions
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    
    if (!emailInput) return;
    
    if (validateEmail(emailInput.value)) {
        // Success state
        emailInput.style.borderColor = '#68d391';
        form.querySelector('button').textContent = 'Success!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            emailInput.style.borderColor = '';
            form.querySelector('button').textContent = 'Get Started';
            form.reset();
        }, 2000);
    } else {
        // Error state
        emailInput.style.borderColor = '#fc8181';
        emailInput.classList.add('shake');
        
        // Remove shake animation
        setTimeout(() => {
            emailInput.classList.remove('shake');
        }, 500);
    }
}

// Add form submission handlers
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});

// Add current year to footer copyright
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Treact. All Rights Reserved.`;
    }
});

// Add scroll-to-top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Optional: Add intersection observer for fade-in animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Initialize animations on load
document.addEventListener('DOMContentLoaded', observeElements);