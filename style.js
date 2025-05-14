// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Sticky Header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Back to Top Button
const backToTopBtn = document.createElement('div');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add particles to CTA section
const ctaSection = document.querySelector('.cta');
if (ctaSection) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `-${size}px`;
    
    // Random animation duration between 10s and 20s
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random delay
    particle.style.animationDelay = `${Math.random() * 10}s`;
    
    ctaSection.appendChild(particle);
  }
}

// Form Submission
const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('input[type="button"]');
    const originalText = submitBtn.value;
    
    // Show loading state
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      submitBtn.value = 'Sent!';
      setTimeout(() => {
        submitBtn.value = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 2000);
    }, 1500);
  });
}


// Sticky Header with Transparency
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero-section') || document.querySelector('.features');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initialize header state on page load
document.addEventListener('DOMContentLoaded', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
});