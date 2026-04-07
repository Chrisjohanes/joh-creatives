# 🚀 Joh's Creatives - Crafting Code, Bringing Ideas to Life

Professional portfolio & landing page for freelance web development services. Built with modern dark theme and orange/amber accent design.

## ✨ Features

### 🎨 Modern Design
- **Dark Theme** with warm orange/amber gradient accents
- **Fully Responsive** — mobile-friendly with hamburger navigation
- **Smooth Animations** — scroll-reveal effects, counter animations, hover transitions
- **Custom CSS** — no framework dependency, lightweight and fast
- **Google Fonts** — Inter typeface for modern typography
- **Font Awesome** — icon integration throughout

### 🛠️ Tech Stack Showcase
- **JavaScript** — React, Vue.js, Vanilla JS, Node.js
- **Backend** — Laravel, PHP, MySQL, REST API
- **Front-End** — HTML5, CSS3, Bootstrap, Tailwind
- **Tools** — Git, VS Code

### 📱 Sections Included
1. **Hero** — Animated headline with stats counter (projects, clients, experience)
2. **Services** — 4 service cards: JavaScript Dev, Laravel/PHP, Static Sites, Custom Front-End
3. **Portfolio** — 4 fictional project showcases with hover overlays
4. **Tech Stack** — Technology badges showing skills and tools
5. **About Me** — Profile photo, bio, collaboration values
6. **CTA** — Call-to-action for project discussions
7. **Contact** — Form with simulated submission (alert notification toast)
8. **Footer** — Social links, quick navigation, contact info

## 📦 Usage

### Option 1: Open Directly
Just double-click `main.html` — no server required.

### Option 2: Run with Node.js Server
```bash
npm install
npm start
```
Then open `http://localhost:3000`

## 📁 Project Structure

```
joh-creatives/
├── main.html                 # Main portfolio landing page (all-in-one)
├── contact.html              # Contact page (legacy)
├── services.html             # Services page (legacy)
├── portofolio.html           # Portfolio page (legacy)
├── style.css                 # Custom CSS styles (legacy)
├── server.js                 # Express server
├── package.json              # Dependencies
├── .gitignore                # Git ignore rules
├── README.md                 # This file
├── foto_profil/
│   └── Christian Johanes.jpg # Profile photo
└── public/
    ├── images/
    │   └── project1.jpg
    └── js/
        ├── main.js
        └── portofolio.js
```

## 🎯 Key Sections Breakdown

### Hero Section
- Animated badge showing availability
- Tagline: "Crafting Code, Bringing Ideas to Life"
- CTA buttons: "Diskusikan Proyek" and "Lihat Portofolio"
- Live counter stats: projects, clients, experience

### Services Section
- **JavaScript Development** — React, Vue.js, Vanilla JS, Node.js
- **Laravel / PHP Development** — Laravel, PHP, MySQL, REST API
- **Static Website & Front-End** — HTML5, CSS3, Bootstrap, Tailwind
- **Custom Front-End Solutions** — UI kits, dashboards, responsive design

### Portfolio Section
- E-Commerce Admin Dashboard (Laravel + Vue.js)
- SaaS Analytics Platform (React + Node.js)
- Premium Restaurant Website (HTML + CSS + JS)
- Fashion E-Commerce Store (Laravel + Bootstrap)

### About Me Section
- Profile photo with floating experience badge
- Core values: Open Communication, Unlimited Revisions, On-Time Delivery, Collaboration
- Personal bio highlighting dedication to quality

### Contact Section
- Contact info: email, WhatsApp, location, response time
- Form fields: name, email, subject, message
- Simulated submission with success/error toast notification

## 🎨 Customization

### Colors
Edit CSS variables in `<style>` section of `main.html`:
```css
:root {
  --bg-primary: #0a0a0f;
  --accent-primary: #f59e0b;
  --accent-secondary: #f97316;
  --accent-gradient: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%);
}
```

### Content
- Update text content directly in `main.html`
- Replace profile photo in `foto_profil/` directory
- Modify portfolio project images and descriptions
- Adjust stats counter values via `data-target` attributes

### Contact Form
The form simulates submission with a toast notification. To integrate real email:
1. Use services like EmailJS, Formspree, or Netlify Forms
2. Or connect to `/api/contact` endpoint in `server.js`

## 🌐 API Endpoints (if using server)

- `POST /api/contact` — Submit contact form
- `GET /api/health` — Health check

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Mobile+: < 768px
- Tablet: 768px - 1024px
- Desktop: ≥ 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Future Enhancements

- Real contact form integration (EmailJS / Formspree)
- Blog section
- Client testimonials carousel
- Project case study pages
- Multi-language support (EN/ID)
- Dark/Light theme toggle

## 📞 Contact

- **Email**: joh@johscreatives.com
- **WhatsApp**: +62 812 3456 7890
- **Location**: Jakarta, Indonesia

---

**Built with ❤️ by Christian Johanes — Joh's Creatives**
