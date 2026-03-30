import { motion } from 'framer-motion';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        Services
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="glass rounded-3xl border border-white/10 p-6 transition hover:-translate-y-2 hover:border-cyan-300/60"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-slate-300">{service.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
