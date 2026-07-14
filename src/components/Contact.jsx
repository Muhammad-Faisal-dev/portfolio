import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";
import { contactMethods, socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // ============================================
    // EMAILJS CONFIGURATION (Using Environment Variables)
    // ============================================
    // 🔒 Keys are loaded from .env file (NOT in code!)
    // 
    // SETUP STEPS:
    // 1. Copy .env.example to .env
    // 2. Get your keys from https://app.emailjs.com/
    // 3. Paste them in .env file
    // 4. NEVER commit .env to GitHub!
    //
    // Variables:
    // - VITE_EMAILJS_SERVICE_ID
    // - VITE_EMAILJS_TEMPLATE_ID
    // - VITE_EMAILJS_PUBLIC_KEY
    // ============================================
    
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate that keys exist
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS credentials not configured!");
      setError("Contact form not configured. Please contact the site owner.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-rose-500/10 px-4 py-1.5 text-sm font-medium text-pink-600 backdrop-blur-sm dark:text-pink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            Get in Touch
          </div>
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to say hi? Drop me a message —
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass space-y-4 rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-3 pt-4">
                {contactMethods.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 rounded-2xl bg-white/40 p-4 transition-all hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg`}>
                      {info.label === "Email" && <FaEnvelope className="h-5 w-5" />}
                      {info.label === "Location" && <FaMapMarkerAlt className="h-5 w-5" />}
                      {info.label === "GitHub" && <FaGithub className="h-5 w-5" />}
                      {info.label === "LinkedIn" && <FaLinkedin className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {info.label}
                      </div>
                      <div className="font-semibold text-slate-800 dark:text-white">
                        {info.value}
                      </div>
                    </div>
                    <FaPaperPlane className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500" />
                  </motion.a>
                ))}
              </div>

              {/* Decorative CTA */}
              <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-2 text-2xl">💼</div>
                  <div className="font-display text-lg font-bold">
                    Available for hire
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    Open to full-time roles
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass relative overflow-hidden rounded-3xl p-6 md:p-8"
            >
              <h3 className="mb-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Send me a message
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Let's work together!"
                  className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-red-500 dark:bg-red-500/20"
                >
                  <FaExclamationCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">{error}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={submitted || loading}
                whileHover={{ scale: submitted || loading ? 1 : 1.02, y: submitted || loading ? 0 : -2 }}
                whileTap={{ scale: submitted || loading ? 1 : 0.98 }}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white shadow-lg transition-all ${
                  submitted
                    ? "bg-gradient-to-r from-emerald-500 to-green-500"
                    : loading
                    ? "bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-indigo-500/30"
                }`}
              >
                {submitted ? (
                  <>
                    <FaCheck /> Message Sent Successfully!
                  </>
                ) : loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
