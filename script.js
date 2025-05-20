// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form submission handling
const registerForm = document.querySelector('.register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Add form validation logic here
        if (!validateForm(data)) {
            return;
        }
        
        // Simulate form submission
        alert('Thank you for registering! We will contact you soon.');
        this.reset();
    });
}

// Form validation function
function validateForm(data) {
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Validate phone number
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!data.phone || !phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    return true;
}

// Add animation effects
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}); 