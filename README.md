# 🚀 Professional Portfolio Website

A stunning, fully animated portfolio website built with React, Vite, and Tailwind CSS. Features dark/light mode, glassmorphism design, 3D animations, and interactive particles.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── data/
│   │   └── portfolioData.js    ← EDIT THIS FILE for your info!
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── AnimatedCursor.jsx
│   │   ├── Preloader.jsx
│   │   └── ParticlesBackground.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/
│   │   ├── project-dineflow.jpg
│   │   ├── project-lms.jpg
│   │   └── project-fashion.jpg
│   └── resume.pdf              ← ADD YOUR RESUME HERE
├── index.html
└── package.json
```

---

## ✏️ How to Customize Your Data

**All your personal information is in ONE file:** `src/data/portfolioData.js`

Open this file and edit:

```javascript
export const personalInfo = {
  name: "Your Name", // Change this
  initials: "YN", // Your initials
  title: "Your Title",
  tagline: "Your tagline",
  location: "Your City",
  email: "your@email.com", // Change this
  graduationYear: "2026",
  university: "Your University",
};

export const socialLinks = {
  github: "https://github.com/yourusername", // Add your URL
  linkedin: "https://linkedin.com/in/yourname", // Add your URL
};

export const resumeFile = "/resume.pdf"; // Add your PDF to /public folder
```

**Projects:** Edit the `projects` array in the same file to add/update your projects.

**Skills:** Edit the `skills` array to customize your skill categories and levels.

---

## 📧 CONTACT FORM - EmailJS Setup (SECURE!)

The contact form uses **EmailJS with environment variables** for security. Your API keys are **NEVER exposed** in the code!

### 🔒 Security Features

- ✅ Keys stored in `.env` file (not in code)
- ✅ `.env` is gitignored (won't upload to GitHub)
- ✅ Keys only accessible in browser at runtime
- ✅ Safe for production deployment

### ✅ Step-by-Step Setup

#### Step 1: Create `.env` File

In your project root, create a file named `.env` (no extension):

```bash
# Copy the example file
cp .env.example .env
```

#### Step 2: Get EmailJS Credentials

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for free account
3. **Email Services** → Add Gmail service → Copy **Service ID**
4. **Email Templates** → Create template → Copy **Template ID**
5. **Account** → API Keys → Copy **Public Key**

#### Step 3: Add Keys to `.env`

Open `.env` and paste your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

⚠️ **IMPORTANT:** Never commit `.env` to GitHub!

#### Step 4: Test Locally

```bash
npm run dev
```

Fill out the contact form and submit - you'll receive an email!

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📱 Responsive Design

The website is fully responsive:

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large Desktop (1280px+)

---

## 🎯 Features Checklist

- [x] Dark/Light mode toggle
- [x] Animated cursor (desktop only)
- [x] Interactive particles background
- [x] Smooth scroll animations
- [x] Typing animation in hero
- [x] Glassmorphism cards
- [x] Responsive navbar with mobile menu
- [x] Projects showcase with hover effects
- [x] Skills with animated progress bars
- [x] Contact form (demo)
- [x] Back to top button
- [x] SEO optimized
- [x] Fast loading

---

## 📄 License

Free to use and modify for personal and commercial projects.

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion**
