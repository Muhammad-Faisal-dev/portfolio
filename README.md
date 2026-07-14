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
  name: "Your Name",           // Change this
  initials: "YN",              // Your initials
  title: "Your Title",
  tagline: "Your tagline",
  location: "Your City",
  email: "your@email.com",     // Change this
  graduationYear: "2026",
  university: "Your University",
};

export const socialLinks = {
  github: "https://github.com/yourusername",  // Add your URL
  linkedin: "https://linkedin.com/in/yourname", // Add your URL
};

export const resumeFile = "/resume.pdf";  // Add your PDF to /public folder
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

#### Step 5: Deploy with Environment Variables

**On Vercel:**
1. Go to your project settings → **Environment Variables**
2. Add all 3 variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy your project

**On Netlify:**
1. Go to **Site Settings** → **Environment Variables**
2. Add all 3 variables
3. Redeploy

**Free Tier:** 200 emails/month (FREE)

---

### Alternative Options

#### Option 2: Formspree (FREE - No Code Backend)
1. Go to [formspree.io](https://formspree.io/)
2. Create a form and get your endpoint URL
3. Replace the `handleSubmit` function in `Contact.jsx`

#### Option 3: Netlify Forms (If hosting on Netlify)
Add `data-netlify="true"` to your form tag - Netlify handles submissions automatically!

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    setSubmitted(true);
    // ... rest of success handling
  });
};
```

#### Option 2: Formspree (FREE - No Backend)
1. Go to [formspree.io](https://formspree.io/)
2. Create a form and get your endpoint URL
3. Update `Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  setSubmitted(true);
  // ... rest of success handling
};
```

#### Option 3: Netlify Forms (If hosting on Netlify)
Add `data-netlify="true"` to your form tag - Netlify handles submissions automatically!

---

## 🌐 FREE HOSTING OPTIONS

### Option 1: Vercel (RECOMMENDED - Easiest) ⭐

**Why Vercel:**
- ✅ Completely FREE
- ✅ Automatic deployments from GitHub
- ✅ Custom domain (free)
- ✅ SSL certificate (free)
- ✅ Lightning fast (global CDN)
- ✅ Built for React/Vite

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "Add New Project"
5. Import your GitHub repository
6. Vercel auto-detects Vite - just click "Deploy"
7. Done! Your site is live at `yourname.vercel.app`

**Custom Domain (Optional):**
- Go to your project settings → Domains
- Add your custom domain (e.g., `yourname.com`)
- Follow DNS instructions
- Free SSL is automatic!

---

### Option 2: Netlify

**Why Netlify:**
- ✅ FREE tier is generous
- ✅ Drag & drop deployment
- ✅ Form handling built-in
- ✅ Custom domain (free)

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Done! Your site is live at `yourname.netlify.app`

**Bonus:** Netlify Forms - add `data-netlify="true"` to your contact form and submissions appear in your Netlify dashboard!

---

### Option 3: GitHub Pages

**Why GitHub Pages:**
- ✅ FREE with GitHub
- ✅ Simple for static sites

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```
4. Run: `npm run deploy`
5. Go to GitHub repo → Settings → Pages
6. Your site is live at `username.github.io/your-repo-name`

---

### Option 4: Cloudflare Pages

**Why Cloudflare Pages:**
- ✅ FREE
- ✅ Extremely fast (Cloudflare CDN)
- ✅ Unlimited bandwidth

**Steps:**
1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your GitHub account
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy!

---

## 🎨 Quick Customization Guide

### Change Colors
Edit `src/index.css` - look for the gradient definitions and change the colors.

### Change Fonts
Edit `index.html` - update the Google Fonts link and CSS variables.

### Add More Projects
Edit `src/data/portfolioData.js` - add new objects to the `projects` array.

### Change Animations
All animations use Framer Motion. Edit the `motion.*` components in each file.

### Disable Animations (for performance)
Remove or comment out the `<Preloader />`, `<AnimatedCursor />`, and `<ParticlesBackground />` components in `App.jsx`.

---

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

## 💡 Need Help?

1. **Edit Data:** `src/data/portfolioData.js`
2. **Add Resume:** Place PDF in `/public/` folder
3. **Add Images:** Place in `/public/images/` folder
4. **Contact Form:** Use EmailJS, Formspree, or Netlify Forms
5. **Deploy:** Use Vercel (recommended) or Netlify

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion**
