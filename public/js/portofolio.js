// ===================================
// Joh Creatives - Portfolio JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Portfolio Filter Functionality
  const filterButtons = document.querySelectorAll('.portfolio-filters .btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          item.classList.remove('hide');
          item.classList.add('show');
          item.style.display = '';
        } else {
          item.classList.add('hide');
          item.classList.remove('show');
          setTimeout(() => {
            if (item.classList.contains('hide')) {
              item.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });

  // Project Modal Functionality
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modal-content');
  
  // Project data
  const projectsData = {
    1: {
      title: 'Gourmet Haven Restaurant',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      description: 'A modern, elegant website for a premium restaurant featuring online reservation system, menu showcase, and event booking capabilities.',
      features: [
        'Online reservation and booking system',
        'Interactive menu with dietary filters',
        'Photo gallery of dishes and ambiance',
        'Event management and private dining bookings',
        'Integration with delivery platforms'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      results: '40% increase in online reservations, 60% improvement in user engagement',
      link: '#'
    },
    2: {
      title: 'StyleHub Fashion E-Commerce',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      description: 'A complete e-commerce platform for a fashion brand with advanced product filtering, wish lists, and seamless checkout experience.',
      features: [
        'Advanced product filtering and search',
        'Size guide and virtual try-on',
        'Wish lists and saved carts',
        'Multiple payment gateway integration',
        'Order tracking system'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      results: '200% sales growth, 45% increase in average order value',
      link: '#'
    },
    3: {
      title: 'DataFlow Analytics Dashboard',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description: 'A powerful real-time analytics dashboard providing actionable insights through interactive data visualizations and custom reports.',
      features: [
        'Real-time data visualization',
        'Custom report builder',
        'Automated email reports',
        'Multi-dimensional filtering',
        'API integration with 50+ platforms'
      ],
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      results: '50% faster decision-making, 35% improvement in marketing ROI',
      link: '#'
    },
    4: {
      title: 'TechVenture Brand Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e0c71c?auto=format&fit=crop&w=1200&q=80',
      description: 'Complete brand identity development for a technology startup including logo, brand guidelines, and marketing collateral.',
      features: [
        'Logo design and variations',
        'Comprehensive brand guidelines',
        'Business card and stationery design',
        'Social media templates',
        'Presentation deck templates'
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
      results: 'Brand recognition increased by 180% within 6 months',
      link: '#'
    },
    5: {
      title: 'EduLearn Online Platform',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      description: 'An comprehensive online learning platform with course management, progress tracking, and interactive learning materials.',
      features: [
        'Course catalog with categories',
        'Video lessons with progress tracking',
        'Interactive quizzes and assessments',
        'Certificate generation',
        'Discussion forums'
      ],
      technologies: ['WordPress', 'LearnDash', 'PHP', 'MySQL', 'AWS S3'],
      results: '10,000+ active students, 95% course completion rate',
      link: '#'
    },
    6: {
      title: 'PayEase Payment Gateway',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      description: 'A secure, scalable payment processing system supporting multiple payment methods and currencies with fraud detection.',
      features: [
        'Multi-currency support',
        'Fraud detection and prevention',
        'Recurring billing system',
        'Real-time transaction monitoring',
        'Comprehensive API documentation'
      ],
      technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Stripe API'],
      results: '99.99% uptime, processing $1M+ monthly transactions',
      link: '#'
    },
    7: {
      title: 'TaskFlow Project Manager',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      description: 'A collaborative project management tool with task tracking, team communication, and resource allocation features.',
      features: [
        'Kanban and Gantt chart views',
        'Team messaging and file sharing',
        'Time tracking and reporting',
        'Resource allocation management',
        'Integration with 100+ tools'
      ],
      technologies: ['React', 'Redux', 'Socket.io', 'Node.js', 'PostgreSQL'],
      results: '25% improvement in team productivity, adopted by 500+ companies',
      link: '#'
    },
    8: {
      title: 'Corporate Rebranding Project',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
      description: 'Enterprise-wide corporate rebranding for a Fortune 500 company including digital and physical brand assets.',
      features: [
        'Brand strategy development',
        'Visual identity redesign',
        'Brand guidelines documentation',
        'Employee brand toolkit',
        'Marketing collateral redesign'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'After Effects'],
      results: 'Brand perception improved by 65%, employee engagement up 40%',
      link: '#'
    },
    9: {
      title: 'InnoTech Corporate Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      description: 'A modern corporate website redesign focusing on user experience, lead generation, and brand storytelling.',
      features: [
        'Responsive, mobile-first design',
        'Dynamic content management',
        'Lead capture forms',
        'Case study showcase',
        'Multi-language support'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
      results: '120% increase in leads, 50% reduction in bounce rate',
      link: '#'
    }
  };

  // View project details
  const viewButtons = document.querySelectorAll('.view-project');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const project = projectsData[projectId];
      
      if (project && projectModal) {
        // Build modal content
        modalContent.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="img-fluid rounded-3 mb-4 w-100" style="max-height: 400px; object-fit: cover;">
          <span class="badge bg-primary mb-3">${project.category}</span>
          <h2 class="fw-bold mb-3">${project.title}</h2>
          <p class="lead text-muted mb-4">${project.description}</p>
          
          <div class="row g-4 mb-4">
            <div class="col-md-6">
              <h5 class="fw-bold mb-3"><i class="fas fa-check-circle text-primary me-2"></i>Key Features</h5>
              <ul class="list-unstyled">
                ${project.features.map(feature => `<li class="mb-2"><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
              </ul>
            </div>
            <div class="col-md-6">
              <h5 class="fw-bold mb-3"><i class="fas fa-tools text-primary me-2"></i>Technologies</h5>
              <div class="d-flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => `<span class="badge bg-secondary">${tech}</span>`).join('')}
              </div>
              
              <h5 class="fw-bold mb-3"><i class="fas fa-chart-line text-success me-2"></i>Results</h5>
              <p class="text-muted">${project.results}</p>
            </div>
          </div>
          
          <div class="d-flex gap-3">
            <a href="${project.link}" class="btn btn-primary btn-rounded" target="_blank">
              <i class="fas fa-external-link-alt me-2"></i>View Live Project
            </a>
            <a href="contact.html" class="btn btn-outline-primary btn-rounded">
              <i class="fas fa-paper-plane me-2"></i>Start Similar Project
            </a>
          </div>
        `;
        
        // Show modal
        const modal = new bootstrap.Modal(projectModal);
        modal.show();
      }
    });
  });

  // Initialize AOS for portfolio items after page load
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }

  // Smooth scroll for portfolio navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
