// ===================================
// Joh Creatives - Express Server
// ===================================

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'public')));

// ===================================
// Routes
// ===================================

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Services page
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

// Portfolio page
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portofolio.html'));
});

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// ===================================
// API Endpoints
// ===================================

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, service, budget, message, newsletter } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and message are required.' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  // Log the submission (in production, you would send email or save to database)
  console.log('📩 New Contact Form Submission:');
  console.log('================================');
  console.log(`Name     : ${name}`);
  console.log(`Email    : ${email}`);
  console.log(`Phone    : ${phone || 'Not provided'}`);
  console.log(`Company  : ${company || 'Not provided'}`);
  console.log(`Service  : ${service || 'Not specified'}`);
  console.log(`Budget   : ${budget || 'Not specified'}`);
  console.log(`Newsletter: ${newsletter ? 'Yes' : 'No'}`);
  console.log(`Message  : ${message}`);
  console.log('================================');

  // Success response
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.' 
  });
});

// Legacy contact endpoint (for backward compatibility)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required.' 
    });
  }

  console.log('📩 Legacy Contact Form Submission:');
  console.log(`Name: ${name}, Email: ${email}`);
  console.log(`Message: ${message}`);

  res.json({ 
    success: true, 
    message: 'Pesan Anda berhasil dikirim! Terima kasih 🙌' 
  });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email is required.' 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  console.log(`📧 Newsletter subscription: ${email}`);

  res.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter!' 
  });
});

// Get all services (API)
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom websites and web applications',
      icon: 'fa-laptop-code',
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'API Development']
    },
    {
      id: 2,
      name: 'Brand Identity',
      description: 'Complete branding solutions',
      icon: 'fa-paint-brush',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Packaging Design']
    },
    {
      id: 3,
      name: 'Digital Strategy',
      description: 'Data-driven marketing strategies',
      icon: 'fa-chart-line',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics']
    }
  ];

  res.json({ success: true, services });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong! Please try again later.' 
  });
});

// ===================================
// Start Server
// ===================================

app.listen(PORT, () => {
  console.log('========================================');
  console.log('🚀 Joh Creatives Server');
  console.log('========================================');
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`📂 Static files served from: ${path.join(__dirname)}`);
  console.log('========================================');
  console.log('📝 Available Routes:');
  console.log(`   - Home: http://localhost:${PORT}/`);
  console.log(`   - Services: http://localhost:${PORT}/services`);
  console.log(`   - Portfolio: http://localhost:${PORT}/portfolio`);
  console.log(`   - Contact: http://localhost:${PORT}/contact`);
  console.log('========================================');
  console.log('🔌 API Endpoints:');
  console.log(`   - POST /api/contact`);
  console.log(`   - POST /api/newsletter`);
  console.log(`   - GET /api/services`);
  console.log(`   - GET /api/health`);
  console.log('========================================');
  console.log('Press Ctrl+C to stop the server');
  console.log('========================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n👋 SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n👋 SIGINT received. Shutting down gracefully...');
  process.exit(0);
});
