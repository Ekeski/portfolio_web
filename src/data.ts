import { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
  SiVite,
  SiGreensock,
  SiFramer,
} from 'react-icons/si';
import { Sparkles, Wand2, Code2, Cpu, Zap, Gauge } from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export type SkillCategory = {
  title: string;
  items: { name: string; icon: IconType }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', icon: SiGithub },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    title: 'Animation',
    items: [
      { name: 'GSAP', icon: SiGreensock },
      { name: 'Framer Motion', icon: SiFramer },
    ],
  },
  {
    title: 'AI / Prompt Engineering',
    items: [
      { name: 'Prompt design', icon: Sparkles as unknown as IconType },
      { name: 'AI-assisted workflows', icon: Wand2 as unknown as IconType },
    ],
  },
];

export const projects = [
  {
    title: 'Evo Gym (TypeScript)',
    description: 'Modern gym website with smooth UI and purposeful motion.',
    tech: ['TypeScript', 'React', 'Framer Motion'],
    link: 'https://ts-evo-gym-3z5n.vercel.app/',
    image: '/evo-gym.jpg',
    imageAlt: 'Evo Gym interface',
  },
  {
    title: 'BestEats Food App (React)',
    description: 'Food ordering interface with clean layouts and intuitive flows.',
    tech: ['React', 'TailwindCSS'],
    link: 'https://best-eats-food-app.vercel.app/',
    image: '/besteats.jpg',
    imageAlt: 'BestEats interface',
  },
  {
    title: 'Food Recipe App (React)',
    description: 'Recipe discovery app focused on clarity and usability.',
    tech: ['React', 'API Integration'],
    link: 'https://foodapp-ten-theta.vercel.app/',
    image: '/food-recipe.jpg',
    imageAlt: 'Food Recipe interface',
  },
];

export const services = [
  {
    title: 'Website Development',
    detail: 'Premium, scalable sites that balance aesthetics with performance.',
    icon: Code2,
  },
  {
    title: 'Frontend Development',
    detail: 'Component-driven UIs with strong state management and animation.',
    icon: Cpu,
  },
  {
    title: 'AI Prompt Engineering',
    detail: 'Designing prompts and AI-assisted flows that accelerate delivery.',
    icon: Wand2,
  },
];

export const workflow = [
  {
    title: 'Clean & maintainable code',
    detail: 'Readable architecture, reusable patterns, and thoughtful comments.',
    icon: Code2,
  },
  {
    title: 'Performance focus',
    detail: 'Ship fast UIs with profiling, lazy loading, and motion budgets.',
    icon: Gauge,
  },
  {
    title: 'Attention to detail',
    detail: 'Micro-interactions, spacing rhythm, and accessibility baked in.',
    icon: Sparkles,
  },
  {
    title: 'Modern tools & AI',
    detail: 'Framer Motion, GSAP, and AI co-pilots to deliver faster.',
    icon: Zap,
  },
];
