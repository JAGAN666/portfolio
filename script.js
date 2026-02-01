// ===== Apple-Style Interaction Script =====

// 1. Intersection Observer for Scroll Reveals
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05 // Trigger almost immediately (5% visible)
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = 400; // Pixel range for the effect
        const progress = Math.min(scrollY / maxScroll, 1); // 0 to 1

        // Name: Starts Big (1.5), Ends Normal (1.0)
        // We use Math.max to stop it from going below 1.0
        const nameScale = 1.5 - (0.5 * progress);

        // Title: Starts Small (0.9), Ends Big (1.1)
        const titleScale = 0.9 + (0.2 * progress);

        // Apply transforms
        // Note: We use requestAnimationFrame for smoother performance in complex apps, 
        // but simple style updates here are usually fine.
        requestAnimationFrame(() => {
            heroName.style.transform = `scale(${nameScale})`;
            heroMainTitle.style.transform = `scale(${titleScale})`;

            // Optional: Fade out name slightly on scroll to focus on title?
            // heroName.style.opacity = 1 - (0.3 * progress); 
        });
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

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                formMessage.textContent = "✓ Message sent successfully!";
                formMessage.className = "success";
                formMessage.style.display = "block";
                contactForm.reset();

                // Hide after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = "none";
                }, 5000);
            })
            .catch((error) => {
                formMessage.textContent = "⚠ Failed to send message. Please try again.";
                formMessage.className = "error";
                formMessage.style.display = "block";
            });
    });
}

// 9. Console Greeting
console.log('%c Designed by Jagannath ', 'background: #000; color: #fff; padding: 10px; border-radius: 5px;');
