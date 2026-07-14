import { ThemeProvider } from "./context/ThemeContext";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-[var(--bg-gradient-1)] text-[var(--text-primary)] transition-colors duration-500">
        <Preloader />
        <AnimatedCursor />
        <ParticlesBackground />
        <Navbar />
        <main className="relative z-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
