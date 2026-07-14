import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCode, FaRocket, FaCoffee } from "react-icons/fa";
import { personalInfo, stats } from "../data/portfolioData";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 backdrop-blur-sm dark:text-indigo-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            About Me
          </div>
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Turning Ideas Into{" "}
            <span className="text-gradient">Digital Reality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl" />

              {/* Main card */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="gradient-border relative h-full rounded-3xl overflow-hidden"
              >
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-8 flex items-center justify-center">
                  {/* Code mockup */}
                  <div className="w-full font-mono text-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-xs text-slate-500">about-me.js</span>
                    </div>
                    <div className="space-y-1 text-slate-300">
                      <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-pink-400">=</span> {"{"}</div>
                      <div className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">'{personalInfo.name}'</span>,</div>
                      <div className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">'MERN Dev'</span>,</div>
                      <div className="pl-4"><span className="text-emerald-400">education</span>: <span className="text-amber-300">'BSCS'</span>,</div>
                      <div className="pl-4"><span className="text-emerald-400">passion</span>: <span className="text-amber-300">'Building'</span>,</div>
                      <div className="pl-4"><span className="text-emerald-400">coffee</span>: <span className="text-amber-300">'Always'</span>,</div>
                      <div className="pl-4">
                        <span className="text-emerald-400">available</span>:{" "}
                        <span className="text-indigo-400">true</span>
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-white"
                        >
                          |
                        </motion.span>
                      </div>
                      <div>{"};"}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-xl text-indigo-500" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Class of</div>
                    <div className="font-bold text-slate-800 dark:text-white">{personalInfo.graduationYear}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                    <FaCode className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Expertise</div>
                    <div className="font-bold text-slate-800 dark:text-white">MERN</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-4 font-display text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
              A passionate developer with a love for clean code
            </h3>
            <div className="space-y-4 text-slate-600 md:text-lg dark:text-slate-400">
              <p>
                I'm a recent{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                  Computer Science graduate (BSCS {personalInfo.graduationYear})
                </span>{" "}
                from the {personalInfo.university}, with a strong foundation in both theoretical
                concepts and practical implementation.
              </p>
              <p>
                My journey started with <span className="font-semibold text-slate-800 dark:text-slate-200">C++</span>,
                where I developed strong problem-solving skills and a deep understanding of
                programming fundamentals. Today, I specialize in building{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                  full-stack web applications using the MERN stack
                </span>{" "}
                — creating seamless, scalable, and beautiful digital experiences.
              </p>
              <p>
                As a fresher stepping into the professional world, I bring enthusiasm, a
                growth mindset, and a relentless drive to learn and build meaningful products.
                Every line of code I write is crafted with passion and purpose. 🚀
              </p>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Education
                </div>
                <div className="mt-1 font-semibold text-slate-800 dark:text-white">
                  BSCS - {personalInfo.university}
                </div>
                <div className="text-sm text-slate-500">Graduated {personalInfo.graduationYear}</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Specialization
                </div>
                <div className="mt-1 font-semibold text-slate-800 dark:text-white">
                  MERN Stack Developer
                </div>
                <div className="text-sm text-slate-500">Full Stack Web Apps</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg">
                {i === 0 && <FaCode className="h-5 w-5" />}
                {i === 1 && <FaGraduationCap className="h-5 w-5" />}
                {i === 2 && <FaRocket className="h-5 w-5" />}
                {i === 3 && <FaCoffee className="h-5 w-5" />}
              </div>
              <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
