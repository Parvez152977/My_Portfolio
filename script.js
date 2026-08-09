// ===== MOBILE NAVIGATION TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
// This adds a subtle fade-in animation when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== HAMBURGER ANIMATION =====
// Add this to make the hamburger animate into an 'X'
const hamburgerSpans = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', () => {
    hamburgerSpans.forEach((span, index) => {
        if (index === 0) {
            span.style.transform = hamburger.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 6px)' 
                : 'rotate(0) translate(0, 0)';
        } else if (index === 1) {
            span.style.opacity = hamburger.classList.contains('active') ? '0' : '1';
        } else if (index === 2) {
            span.style.transform = hamburger.classList.contains('active') 
                ? 'rotate(-45deg) translate(5px, -6px)' 
                : 'rotate(0) translate(0, 0)';
        }
    });
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c👋 Welcome to Parvez\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #1A73E8;');
console.log('%cInterested in connecting? Check out the Contact section!', 'font-size: 14px; color: #5f6368;');