import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <motion.div
        className="glass relative overflow-hidden rounded-3xl border border-white/10 px-8 py-12 shadow-soft-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-400/15" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Contact</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Let’s build something great together
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-200">
              I’m available for collaborations, freelance engagements, or full-time opportunities.
              Tell me about the problem you’re solving and let’s design the solution.
            </p>
          </div>
          <a
            href="https://wa.me/2347067378611?text=Hi%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Message Me on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
