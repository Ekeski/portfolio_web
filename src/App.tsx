import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="space-y-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
