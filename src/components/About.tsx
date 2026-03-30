import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        About
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Personal + Professional</h2>
          <p className="mt-4 text-lg text-slate-200">
            I’m Ekemewoma Ogbogbo Favour, a Computer Science student at Delta State University
            building scalable, resilient interfaces. My work blends strong frontend foundations with
            modern animation systems and AI-assisted development, so teams move faster without
            sacrificing polish.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Problem solving with a product-first mindset.',
              'Real-world solutions that balance performance and aesthetics.',
              'Clear communication and clean, maintainable code.',
              'Always learning—growing toward full-stack expertise.',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-slate-100"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white">Snapshot</h3>
          <div className="mt-4 space-y-4 text-slate-200">
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Primary focus</span>
              <span className="font-semibold text-white">Frontend Excellence</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Core stack</span>
              <span className="font-semibold text-white">React · TypeScript · Tailwind</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>Motion</span>
              <span className="font-semibold text-white">GSAP · Framer Motion</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <span>AI</span>
              <span className="font-semibold text-white">Prompt design & workflows</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
