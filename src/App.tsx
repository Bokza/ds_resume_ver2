import { AboutMe } from "./components/AboutMe";
import { Activities } from "./components/Activities";
import { Career } from "./components/Career";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Career />
        <Skills />
        <Projects />
        <Activities />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
