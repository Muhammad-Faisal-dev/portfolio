import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaServer,
  FaRocket,
} from "react-icons/fa";
import { personalInfo, socialLinks, resumeFile, typeAnimationSequence } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 md:pt-32"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-500/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        {/* Left - Content */}
        <div className="relative z-10">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient">{personalInfo.name}</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C50 2 150 2 298 8"
                  stroke="url(#underline-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#6366f1" />
                    <stop offset="0.5" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 h-16 font-display text-2xl font-semibold text-slate-700 sm:text-3xl md:text-4xl dark:text-slate-200"
          >
            <span>I'm a </span>
            <span className="text-gradient">
              <TypeAnimation
                sequence={typeAnimationSequence}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={50}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-[position:100%_0] hover:shadow-indigo-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href={resumeFile}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group glass relative flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-slate-800 transition-all hover:border-indigo-500/40 dark:text-slate-100"
            >
              <FaDownload className="transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
              Connect with me
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700" />
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right - 3D Futuristic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-[500px]">
            {/* Orbiting rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border-2 border-dashed border-purple-500/20"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border-2 border-dashed border-cyan-500/20"
            />

            {/* Central orb */}
            <div className="absolute inset-20 md:inset-24">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 blur-2xl opacity-60 animate-pulse" />
                <div className="relative h-full w-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 p-1 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-950">
                    {/* Code pattern inside */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center font-mono text-xs text-white/80">
                        <div className="mb-2 text-cyan-400">{"{ "}</div>
                        <div className="pl-4 text-indigo-300">"stack": <span className="text-emerald-400">"MERN"</span>,</div>
                        <div className="pl-4 text-indigo-300">"passion": <span className="text-pink-400">"∞"</span>,</div>
                        <div className="pl-4 text-indigo-300">"status": <span className="text-amber-400">"building"</span></div>
                        <div className="mt-2 text-cyan-400">{"}"}</div>
                      </div>
                    </div>
                    {/* Shiny overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute top-8 left-8 flex h-16 w-16 items-center justify-center rounded-2xl text-blue-500 shadow-xl"
            >
              <FaCode className="h-7 w-7" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute top-12 right-4 flex h-16 w-16 items-center justify-center rounded-2xl text-emerald-500 shadow-xl"
            >
              <FaServer className="h-7 w-7" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="glass absolute bottom-12 left-4 flex h-16 w-16 items-center justify-center rounded-2xl text-green-500 shadow-xl"
            >
              <FaDatabase className="h-7 w-7" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="glass absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-2xl text-orange-500 shadow-xl"
            >
              <FaRocket className="h-7 w-7" />
            </motion.div>

            {/* Small orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8"
            >
              <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16"
            >
              <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Scroll Down
          </span>
          <div className="h-12 w-7 rounded-full border-2 border-slate-400 dark:border-slate-600">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
