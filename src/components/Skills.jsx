import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiCplusplus,
  SiTypescript,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";
import { skills, techMarquee } from "../data/portfolioData";

const marqueeIcons = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  FaJs: FaJs,
  SiTailwindcss: SiTailwindcss,
  SiTypescript: SiTypescript,
  SiCplusplus: SiCplusplus,
};

const skillIcons = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  "React.js": FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "REST APIs": FaDatabase,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  "C++": SiCplusplus,
  Vite: SiVite,
  "Next.js": SiNextdotjs,
};

const skillColors = {
  HTML5: "text-orange-500",
  CSS3: "text-blue-500",
  JavaScript: "text-yellow-500",
  TypeScript: "text-blue-600",
  "React.js": "text-cyan-400",
  "Tailwind CSS": "text-sky-500",
  "Node.js": "text-green-500",
  "Express.js": "text-slate-700 dark:text-slate-300",
  MongoDB: "text-green-500",
  "REST APIs": "text-purple-500",
  Git: "text-orange-600",
  GitHub: "text-slate-800 dark:text-slate-200",
  Postman: "text-orange-500",
  "C++": "text-blue-500",
  Vite: "text-purple-500",
  "Next.js": "text-slate-900 dark:text-white",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-medium text-purple-600 backdrop-blur-sm dark:text-purple-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            My Skills
          </div>
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            A curated collection of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all"
            >
              {/* Top gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />

              {/* Category Header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.items.map((skill, i) => {
                  const Icon = skillIcons[skill.name] || FaDatabase;
                  const color = skillColors[skill.name] || "text-slate-500";
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.05 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 ${color}`} />
                          <span className="font-medium text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIdx * 0.1 + i * 0.05, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Hover glow */}
              <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 blur-xl transition-opacity group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 overflow-hidden"
        >
          <div className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
            My Tech Stack
          </div>
          <div className="relative flex overflow-hidden">
            {/* Gradient fade on edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-gradient-1)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-gradient-1)] to-transparent" />

            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {[...techMarquee, ...techMarquee].map((item, i) => {
                const IconComponent = marqueeIcons[item.icon] || FaDatabase;
                return (
                  <div
                    key={`${item.name}-${i}`}
                    className="glass flex items-center gap-3 rounded-2xl px-6 py-4"
                  >
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                    <span className="font-display text-lg font-semibold text-slate-800 dark:text-slate-200">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
