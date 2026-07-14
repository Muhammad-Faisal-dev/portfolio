import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import { personalInfo, socialLinks, navLinks } from "../data/portfolioData";

const socials = [
  { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/50 dark:border-white/5">
      {/* Gradient top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg">
                <span className="font-display text-sm font-bold text-white">{personalInfo.initials}</span>
              </div>
              <span className="font-display text-xl font-bold text-gradient">
                {personalInfo.name}
              </span>
            </motion.div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Full Stack Developer specializing in the MERN stack. Building beautiful,
              scalable web applications with passion and purpose.
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Let's Connect
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Open for opportunities and collaborations. Don't hesitate to reach out!
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-[position:100%_0]"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-white/5 md:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with{" "}
            <FaHeart className="h-3.5 w-3.5 text-red-500 animate-pulse" /> using React & Tailwind
          </p>
          <p className="text-xs text-slate-500">
            Designed & built with passion ✨
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 transition-shadow hover:shadow-indigo-500/60"
        aria-label="Back to top"
      >
        <FaArrowUp className="h-4 w-4" />
      </motion.button>
    </footer>
  );
}
