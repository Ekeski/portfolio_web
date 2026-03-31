import { motion } from 'framer-motion';
import { skillCategories } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        Skills
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="glass group rounded-3xl border border-white/10 p-6 transition hover:border-cyan-300/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-100">
                {category.items.length} tools
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-slate-100 transition group-hover:bg-white/10"
                >
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
