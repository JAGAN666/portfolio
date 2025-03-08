// This file contains additional JavaScript functionality for the portfolio

// Function to handle the counter animation
function animateCounter(elementId, endValue, duration = 2000) {
  const element = document.getElementById(elementId)
  if (!element) return

  let startTime = null
  const startValue = 0

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp

    const progress = Math.min((timestamp - startTime) / duration, 1)
    const currentValue = Math.floor(progress * (endValue - startValue) + startValue)

    element.textContent = currentValue + "+"

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "years-counter") {
          animateCounter("years-counter", 2)
        }
        counterObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

// Observe counter elements
document.addEventListener("DOMContentLoaded", () => {
  const yearsCounter = document.getElementById("years-counter")
  if (yearsCounter) counterObserver.observe(yearsCounter)

  // Add active class to navigation links based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll("nav a")

  function highlightNavLink() {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
  highlightNavLink() // Initial check
})

