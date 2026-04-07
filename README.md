# 🌟 Aurora Creative Agency - Professional Digital Solutions

A modern, professional website built with Bootstrap 5, designed for enterprise-level digital agency presentations.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive across all devices
- **Bootstrap 5**: Latest Bootstrap framework with custom components
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Professional Color Scheme**: Gradient-based modern design
- **Custom CSS Variables**: Easy to customize and maintain

### 🚀 Interactive Features
- **Preloader Animation**: Smooth page loading experience
- **Sticky Navigation**: Smart navbar that changes on scroll
- **Counter Animations**: Animated statistics display
- **Portfolio Filtering**: Interactive project filtering
- **Modal Popups**: Detailed project view in modals
- **Form Validation**: Real-time client-side validation
- **Back to Top Button**: Easy navigation
- **Hover Effects**: Professional hover animations

### 📱 Pages Included
1. **Home Page**: Hero section, services preview, portfolio showcase, testimonials, CTA
2. **Services Page**: Detailed services, process workflow, pricing tables, FAQ
3. **Portfolio Page**: Filterable gallery, project modals, statistics
4. **Contact Page**: Contact form, map, business hours, social links

### 🛠️ Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.3
- **Animations**: AOS Library
- **Icons**: Font Awesome 6.5.1
- **Backend**: Node.js with Express.js
- **Fonts**: Google Fonts (Poppins)

## 📦 Installation

1. **Clone or download the project**
```bash
cd aurora-agency-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
aurora-agency-main/
├── index.html              # Home page
├── services.html           # Services page
├── portofolio.html        # Portfolio page
├── contact.html           # Contact page
├── style.css              # Custom CSS styles
├── server.js              # Express server
├── package.json           # Dependencies
└── public/
    └── js/
        ├── main.js        # Main JavaScript
        └── portofolio.js  # Portfolio functionality
```

## 🎯 Key Features Breakdown

### Home Page
- Animated hero section with gradient background
- Statistics counter section
- Client logos/trust badges
- Services preview cards with icons
- Portfolio showcase with hover effects
- Client testimonials
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Feature lists for each service
- 4-step process workflow
- 3-tier pricing tables
- FAQ accordion
- Service-specific CTAs

### Portfolio Page
- Category filtering system (All, Web, E-Commerce, Branding, Apps)
- 9 sample projects with images
- Project detail modals with:
  - Full descriptions
  - Key features list
  - Technologies used
  - Results achieved
  - Live demo links
- Project statistics section

### Contact Page
- Contact information cards
- Detailed contact form with:
  - Name, email, phone
  - Company name
  - Service selection
  - Budget range
  - Project details
  - Newsletter subscription
- Real-time form validation
- Google Maps integration
- Business hours display
- Social media links
- FAQ section

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #0d6efd;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content
- Update text content directly in HTML files
- Replace images by updating `src` attributes
- Modify project data in `public/js/portofolio.js`

### Contact Form
The form currently logs submissions to console. To integrate with email:
1. Use services like EmailJS, SendGrid, or Nodemailer
2. Update the `/api/contact` endpoint in `server.js`
3. Add database integration if needed

## 🌐 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/services` - Get all services
- `GET /api/health` - Health check

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

## 🎭 Animation Features

- **Preloader**: Smooth fade-out on page load
- **AOS**: Scroll-triggered animations
- **Counter**: Number counting animation
- **Hover Effects**: Cards, buttons, icons
- **Smooth Scrolling**: Anchor link navigation

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer Notes

- All images use Unsplash for high-quality photos
- Icons from Font Awesome 6.5.1
- Google Fonts: Poppins for modern typography
- Bootstrap 5.3.3 for responsive grid system

## 🚀 Future Enhancements

- Database integration for contact forms
- Blog section
- Team member profiles
- Live chat integration
- Multi-language support
- Admin dashboard
- Testimonial management system

## 📞 Support

For questions or issues, please contact:
- Email: hello@aurora.agency
- Phone: +62 812 3456 7890

---

**Built with ❤️ using Bootstrap 5, Node.js, and modern web technologies**
