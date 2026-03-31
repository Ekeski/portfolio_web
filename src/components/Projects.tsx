import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        Projects
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Real work, production mindset.
        </h2>
        {/* <p className="max-w-xl text-slate-300">
          Each build pairs fast performance with tactile interactions. Images are placeholders—swap
          them with project snapshots anytime.
        </p> */}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft-glow transition hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-cyan-500/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
          >
            <div className="relative h-52 w-full overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative h-full w-full bg-gradient-to-br from-indigo-500/40 via-slate-900 to-cyan-400/30">
                  <div className="absolute inset-0 hero-grid opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/70" />
                  <div className="absolute inset-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium text-slate-200">
                    {project.imageAlt} (placeholder)
                  </p>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-950/70 opacity-80 transition duration-500 group-hover:opacity-50" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{project.description}</p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100">Live</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-100">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/5 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-100"
                >
                  View live
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
