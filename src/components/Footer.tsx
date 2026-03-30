import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div>
          <p className="text-sm font-semibold text-white">Ekemewoma Ogbogbo Favour</p>
          <p className="text-sm text-slate-400">Frontend Developer / Aspiring Full-Stack Engineer</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ekeski"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ekemewoma-ogbogbo-favour-100544332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
