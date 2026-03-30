import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const PROFILE_IMAGE = '/profile.jpg';
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } },
});

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-bubble', {
        opacity: 0,
        scale: 0.7,
        y: 30,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.to('.hero-floating', {
        y: '+=18',
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 pt-24 pb-12 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-20 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-5 md:flex-row md:items-center md:gap-12 md:px-6">
        <div className="relative z-10 flex-1">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Crafted with motion & detail
          </div> */}

          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
            >
              Hi, I&apos;m Favour
            </motion.h1>
            <motion.p
              className="text-2xl font-semibold text-cyan-100 sm:text-3xl"
              variants={fadeUp(0.05)}
              initial="hidden"
              animate="visible"
            >
              I build modern, scalable web experiences
            </motion.p>
            <motion.p
              className="max-w-2xl text-lg text-slate-200"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
            >
              Frontend developer and aspiring full-stack engineer focused on performant interfaces,
              immersive motion, and AI-assisted workflows that keep teams shipping faster.
            </motion.p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              variants={fadeUp(0.15)}
              initial="hidden"
              animate="visible"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://wa.me/2347067378611?text=Hi%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you"
              target="_blank"
              rel="noreferrer"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              'Clean, production-ready UI',
              'Motion that feels intentional',
              'Built for performance & scale',
            ].map((item) => (
              <motion.div
                key={item}
                className="glass hero-bubble rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-1 justify-end w-full md:w-auto">
          <div className="hero-floating relative aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-b from-indigo-500/25 via-transparent to-cyan-400/20 blur-2xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(45,212,191,0.2),transparent_45%)]" />
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-square">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Ekemewoma Ogbogbo Favour portrait"
                      className=" w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/60" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Profile</p>
                    <p className="text-2xl font-semibold text-white">Frontend Developer</p>
                    <p className="text-sm text-slate-300">Delta State University, Abraka</p>
                  </div>
                </div>
                <div className="grid gap-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                    <span className="text-slate-300">Stack</span>
                    <span className="font-semibold text-white">React · TypeScript · Tailwind</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                    <span className="text-slate-300">Specialty</span>
                    <span className="font-semibold text-white">GSAP · Framer Motion · AI</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                    <span className="text-slate-300">Focus</span>
                    <span className="font-semibold text-white">Scalable, polished UIs</span>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/15 px-4 py-3 text-sm text-cyan-100">
                  <Sparkles className="h-4 w-4" />
                  Prompt engineering & AI-assisted delivery baked into my workflow.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
