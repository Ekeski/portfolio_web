import { motion } from 'framer-motion';
import { workflow } from '../data';

const Process = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        How I Work
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {workflow.map((item, idx) => (
          <motion.div
            key={item.title}
            className="glass rounded-3xl border border-white/10 p-6 transition hover:-translate-y-2 hover:border-cyan-300/60"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <div className="flex items-center gap-3 text-cyan-200">
              <item.icon className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-2 text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
