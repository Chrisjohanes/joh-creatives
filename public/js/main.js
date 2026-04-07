// ===================================
// Joh Creatives - Main JavaScript
// ===================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function() {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    });
    
    // Fallback if load doesn't trigger
    setTimeout(() => {
      if (preloader.style.display !== 'none') {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    }, 3000);
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;
    
    const updateCount = () => {
      const count = +counter.innerText;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + '+';
      }
    };
    
    updateCount();
  };

  // Intersection Observer for counters
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      const alertBox = document.getElementById('contactAlert');
      
      // Form validation
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        
        // Show error alert
        alertBox.className = 'alert alert-danger mt-3';
        alertBox.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Please fill in all required fields correctly.';
        alertBox.classList.remove('d-none');
        return;
      }
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // Show loading state
      submitBtn.disabled = true;
      btnText.classList.add('d-none');
      btnLoading.classList.remove('d-none');
      
      try {
        const response = await fetch('/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Success alert
          alertBox.className = 'alert alert-success mt-3';
          alertBox.innerHTML = '<i class="fas fa-check-circle me-2"></i>' + result.message;
          alertBox.classList.remove('d-none');
          contactForm.reset();
          contactForm.classList.remove('was-validated');
          
          // Scroll to alert
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        // Error alert
        alertBox.className = 'alert alert-danger mt-3';
        alertBox.innerHTML = '<i class="fas fa-times-circle me-2"></i>Failed to send message. Please try again or contact us directly.';
        alertBox.classList.remove('d-none');
        
        // Scroll to alert
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        btnLoading.classList.add('d-none');
        
        // Hide alert after 5 seconds
        setTimeout(() => {
          alertBox.classList.add('d-none');
        }, 5000);
      }
    });
    
    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.classList.add('is-invalid');
          this.classList.remove('is-valid');
        } else if (this.value.trim()) {
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
        }
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') && this.value.trim()) {
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
        }
      });
    });
  }

  // Active nav link highlight
  const currentLocation = location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentLocation || (currentLocation === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Add hover effect to buttons with icons
  document.querySelectorAll('.btn i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
    icon.parentElement.addEventListener('mouseenter', () => {
      icon.style.transform = 'translateX(5px)';
    });
    icon.parentElement.addEventListener('mouseleave', () => {
      icon.style.transform = 'translateX(0)';
    });
  });

  // Lazy loading for images (if browser supports it)
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  }

  // Tooltip initialization (Bootstrap 5)
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Popover initialization (Bootstrap 5)
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

});

// Utility function to debounce events
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { debounce, isInViewport };
}
