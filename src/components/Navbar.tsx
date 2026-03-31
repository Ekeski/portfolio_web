import { useMemo, useState } from 'react';
import { navLinks } from '../data';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => () => {
    setOpen(false);
    if (href.startsWith('#')) {
      requestAnimationFrame(() => {
        const target = document.querySelector(href);
        if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  };

  const scrollVariants = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    }),
    [],
  );

  return (
    <motion.header
      variants={scrollVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-1 flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-soft-glow">
        <div className="flex items-center gap-3">
          <div className="gradient-ring rounded-full bg-gradient-glow p-[1px]">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
              FO
            </div> */}
          </div>
          <div>
            {/* <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Portfolio</p> */}
            <p className="text-base font-semibold text-white">Ekemewoma Ogbogbo Favour</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="relative px-2 py-1 transition hover:text-white"
            >
              <span className="absolute inset-x-0 -bottom-2 h-[2px] scale-x-0 bg-gradient-to-r from-indigo-400 to-cyan-300 transition-transform duration-300 origin-left hover:scale-x-100" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#projects"
            onClick={handleNavClick('#projects')}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-100"
          >
            View Work
          </a>
          <a
            href="https://wa.me/2347067378611?text=Hi%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-auto mt-2 flex w-[90%] flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-4 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href="#projects"
                  onClick={handleNavClick('#projects')}
                  className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  View Work
                </a>
                <a
                  href="https://wa.me/2347067378611?text=Hi%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you"
                  onClick={() => setOpen(false)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/30"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
