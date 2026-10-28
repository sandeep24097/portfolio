import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import AppShowcase from './components/sections/AppShowcase';
import BrandMarquee from './components/sections/BrandMarquee';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <BrandMarquee />
        <About />
        <Skills />
        <Projects />
        <AppShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
