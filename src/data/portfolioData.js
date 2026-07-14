// ============================================
// PORTFOLIO DATA - Edit this file to customize your website
// ============================================
// 
// 📧 For Contact Form Setup (EmailJS):
//    See EMAILJS_SETUP.md or README.md for step-by-step instructions
//    Then edit src/components/Contact.jsx to add your EmailJS credentials
// ============================================

export const personalInfo = {
  // Your basic information
  name: "MUHAMMAD FAISAL",
  initials: "MF",
  title: "Full Stack Developer",
  tagline: "I craft exceptional digital experiences using the MERN stack",
  description: `I'm a recent Computer Science graduate (BSCS 2026) from the University of Education, with a strong foundation in both theoretical concepts and practical implementation.

My journey started with C++, where I developed strong problem-solving skills and a deep understanding of programming fundamentals. Today, I specialize in building full-stack web applications using the MERN stack — creating seamless, scalable, and beautiful digital experiences.

As a fresher stepping into the professional world, I bring enthusiasm, a growth mindset, and a relentless drive to learn and build meaningful products. Every line of code I write is crafted with passion and purpose. 🚀`,
  location: "Lahore, Pakistan",
  email: "faisalhanif713@gmail.com",
  availableForHire: true,
  graduationYear: "2026",
  university: "University of Education",
};

// ============================================
// SOCIAL LINKS - Add your real profile URLs
// ============================================
export const socialLinks = {
  github: "https://github.com/Muhammad-Faisal-dev", // Replace with your GitHub URL
  linkedin: "https://linkedin.com", // Replace with your LinkedIn URL
  twitter: "", // Optional
  instagram: "", // Optional
  dribbble: "", // Optional
  behance: "", // Optional
};

// ============================================
// RESUME - Add your resume PDF path
// ============================================
// Place your resume PDF in the /public folder and add the filename here
export const resumeFile = "/MuhammadFaisal-Resume.pdf"; // e.g., "/resume.pdf" or "/cv.pdf"

// ============================================
// SKILLS - Organize your skills by category
// ============================================
export const skills = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    description: "Powering apps with scalable server-side logic",
    color: "from-emerald-500 to-green-500",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    description: "The complete toolkit for modern development",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "Postman", level: 85 },
      { name: "C++", level: 80 },
      { name: "Vite", level: 80 },
      { name: "Next.js", level: 70 },
    ],
  },
];

// ============================================
// PROJECTS - Add your projects here
// ============================================
export const projects = [
  // {
  //   title: "DINEFLOW",
  //   subtitle: "Restaurant Management Platform",
  //   description:
  //     "A full-featured restaurant management and food ordering platform with real-time order tracking, seamless payment integration, and an intuitive admin dashboard. Built as a complete end-to-end solution for modern restaurants.",
  //   tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  //   image: "/images/project-dineflow.jpg",
  //   github: "#", // Replace with your GitHub repo URL
  //   live: "#", // Replace with your live demo URL
  //   featured: true,
  //   gradient: "from-orange-500 via-pink-500 to-red-500",
  // },
  // {
  //   title: "LMS System",
  //   subtitle: "Learning Management Platform",
  //   description:
  //     "A complete learning management system with student & instructor dashboards, video course streaming, progress tracking, quizzes, certificate generation, and admin controls. Fully functional backend + frontend.",
  //   tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
  //   image: "/images/project-lms.jpg",
  //   github: "#", // Replace with your GitHub repo URL
  //   live: "#", // Replace with your live demo URL
  //   featured: false,
  //   gradient: "from-indigo-500 via-purple-500 to-pink-500",
  // },
  {
    title: "Fashion Store",
    subtitle: "E-commerce Frontend",
    description:
      "A beautifully designed, responsive e-commerce frontend for a luxury clothing brand. Features smooth animations, product galleries, filters, and an elegant checkout UI — crafted with pixel-perfect attention to detail.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
    image: "/images/project-fashion.jpg",
    github: "https://github.com/Muhammad-Faisal-dev/fashion-frontend-replica", // Replace with your GitHub repo URL
    live: "https://fashion-frontend-replica-wkld.vercel.app/", // Replace with your live demo URL
    featured: false,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
];

// ============================================
// STATS - For the About section
// ============================================
export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "BSCS", label: "CS Graduate" },
  { value: "MERN", label: "Tech Expertise" },
  { value: "∞", label: "Cups of Coffee" },
];

// ============================================
// CONTACT - Additional contact methods
// ============================================
export const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email.replace("@gmail.com" , ""),
    link: `mailto:${personalInfo.email}`,
    color: "from-indigo-500 to-purple-500",
  },
  // {
  //   label: "Location",
  //   value: personalInfo.location,
  //   link: "#",
  //   color: "from-cyan-400 to-blue-500",
  // },
  {
    label: "GitHub",
    value: socialLinks.github.replace("https://github.com/", ""),
    link: socialLinks.github,
    color: "from-slate-700 to-slate-900",
  },
  {
    label: "LinkedIn",
    value: socialLinks.linkedin.replace("https://", ""),
    link: socialLinks.linkedin,
    color: "from-blue-500 to-cyan-500",
  },
];

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// TYPE ANIMATION SEQUENCE (Hero Section)
// ============================================
export const typeAnimationSequence = [
  "Full Stack Developer",
  2000,
  "MERN Stack Expert",
  2000,
  "React Developer",
  2000,
  "Problem Solver",
  2000,
];

// ============================================
// TECH STACK MARQUEE
// ============================================
export const techMarquee = [
  { name: "React", icon: "FaReact", color: "text-cyan-400" },
  { name: "Node.js", icon: "FaNodeJs", color: "text-green-500" },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
  { name: "Express", icon: "SiExpress", color: "text-slate-700 dark:text-slate-300" },
  { name: "JavaScript", icon: "FaJs", color: "text-yellow-500" },
  { name: "Tailwind", icon: "SiTailwindcss", color: "text-sky-500" },
  { name: "C++", icon: "SiCplusplus", color: "text-blue-500" },
];
