import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 backdrop-blur-sm dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            My Work
          </div>
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* Gradient background blur */}
                <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />

                <div className="gradient-border relative overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        ⭐ LATEST WORK
                      </div>
                    )}

                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                        aria-label="View source"
                      >
                        <FaGithub className="h-6 w-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-xl transition-transform"
                        aria-label="View live"
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -left-3 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div key={j} className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${project.gradient} opacity-60`} />
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`mb-2 inline-block font-mono text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                >
                  0{i + 1} / Featured Project
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-slate-600 dark:text-slate-400">
                  {project.subtitle}
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed dark:text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-full px-4 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.gradient} px-6 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl`}
                  >
                    Live Demo
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-indigo-500/40 dark:text-slate-200"
                  >
                    <FaGithub /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              More projects coming soon... Stay tuned!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
