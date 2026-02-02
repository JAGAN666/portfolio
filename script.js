// ===== Apple-Style Interaction Script =====

// 0. Theme Toggle Logic (Persistence & UI)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.classList.toggle('light', savedTheme === 'light');
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlElement.classList.add('light');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = htmlElement.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        // Trigger subtle haptic-like scaling on toggle
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => themeToggle.style.transform = 'scale(1)', 100);
    });
}

// 1. Intersection Observer for Scroll Reveals
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05 // Trigger almost immediately (5% visible)
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
const animatedElements = document.querySelectorAll(
    '.bento-card, .section-head, .experience-item, .skill-chip, .contact-grid'
);

// Apply snappier staggered delay to elements and observe
animatedElements.forEach((el, index) => {
    // Cap cumulative delay at 200ms and use a faster multiplier
    const delay = Math.min(index * 0.02, 0.2);
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
});

// 2. Navbar Glass Effect on Scroll
const navbar = document.querySelector('.navbar');
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navContainer.style.background = 'rgba(22, 22, 23, 0.95)';
        navContainer.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)';
        navbar.style.transform = 'translateX(-50%) translateY(0)';
    } else {
        navContainer.style.background = 'rgba(22, 22, 23, 0.8)';
        navContainer.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.5)';
        navbar.style.transform = 'translateX(-50%) translateY(0)';
    }
});

// 3. Smooth Scrolling for Anchors
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

// 4. Parallax Effect Removed (Replaced by Scroll Reveal)

// 5. Skills Interaction (Holo-List)
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
        // Close others (Accordion style - optional, remove if you want multiple open)
        document.querySelectorAll('.skill-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });

        // Toggle current
        item.classList.toggle('active');
    });
});

// 7. Dynamic Hero Scroll Effect (Name Shrink, Title Grow)
const heroName = document.querySelector('.hero-eyebrow');
const heroMainTitle = document.querySelector('.hero-title');

if (heroName && heroMainTitle) {
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = 500; // Pixel range for the main effect
        const progress = Math.min(scrollY / maxScroll, 1); // 0 to 1

        // 1. Zoom/Scale Effects
        // Name: Starts Big (1.5), Ends Normal (1.0)
        const nameScale = 1.5 - (0.5 * progress);
        // Title: Starts Small (0.9), Ends Big (1.1)
        const titleScale = 0.9 + (0.2 * progress);

        // Immerse Hero Container: Shrink slightly and fade as we scroll away
        if (heroSection) {
            const heroOpacity = 1 - (progress * 0.8);
            const heroScale = 1 - (progress * 0.05);
            heroSection.style.opacity = heroOpacity;
            heroSection.style.transform = `scale(${heroScale})`;
        }

        // Apply transforms to text
        requestAnimationFrame(() => {
            heroName.style.transform = `scale(${nameScale})`;
            heroMainTitle.style.transform = `scale(${titleScale})`;
            heroName.style.opacity = 1 - progress; // Fade name faster for focus
        });

        // 2. Dynamic Background Color Shift
        const workSection = document.getElementById('work');
        if (workSection) {
            const workTop = workSection.offsetTop - window.innerHeight / 2;
            const isLight = htmlElement.classList.contains('light');

            if (scrollY > workTop) {
                // Work Section Backgrounds
                document.body.style.backgroundColor = isLight ? '#f5f5f7' : '#020617';
            } else {
                // Hero Section Backgrounds
                document.body.style.backgroundColor = isLight ? '#ffffff' : '#000000';
            }
        }
    });

    // Set initial state immediately
    heroName.style.transform = 'scale(1.5)';
    heroMainTitle.style.transform = 'scale(0.9)';
}

// 8. Contact Form Handling (Netlify AJAX)
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        // Requirement for Netlify AJAX: form-name must be in the payload
        formData.append('form-name', 'contact');

        // Check if we are running locally (file:// or localhost)
        const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost';

        if (isLocal) {
            console.log("Local development detected. Simulating successful form submission.");
            showFormFeedback("✓ (Simulation) Message sent! Netlify forms work after deployment.", "success");
            contactForm.reset();
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                showFormFeedback("✓ Message sent successfully!", "success");
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Form Submission Error:', error);
                showFormFeedback("⚠ Failed to send message. Please try again.", "error");
            });
    });
}

function showFormFeedback(text, type) {
    formMessage.textContent = text;
    formMessage.className = type;
    formMessage.style.display = "block";

    // Smooth scroll to message if needed
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = "none";
    }, 5000);
}

// 9. Console Greeting
console.log('%c Designed by Jagannath ', 'background: #000; color: #fff; padding: 10px; border-radius: 5px;');
