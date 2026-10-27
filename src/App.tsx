import { useEffect, useState } from "react";
import About from "@/components/About";
import BeyondTheCode from "@/components/BeyondTheCode";
import Contact from "@/components/Contact";
import Curiosities from "@/components/Curiosities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Projects from "@/components/Projects";
import Values from "@/components/Values";
import type { Theme } from "@/components/ThemeToggle";
import { content } from "@/content";

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  } catch {
    // Fall through to the system preference when browser storage is unavailable.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies for the current visit without storage.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main-content">{content.skipLink}</a>
      <Header
        name={content.name}
        navigation={content.navigation}
        navigationLabel={content.navigationLabel}
        menuOpenLabel={content.menuOpenLabel}
        menuCloseLabel={content.menuCloseLabel}
        theme={theme}
        onToggleTheme={toggleTheme}
        themeToggleLabels={content.theme}
      />
      <main id="main-content">
        <Hero {...content.hero} />
        <About {...content.about} />
        <Values {...content.values} />
        <Curiosities {...content.curiosities} />
        <HowIWork {...content.howIWork} />
        <BeyondTheCode {...content.beyondTheCode} whyIBuild={content.whyIBuild} />
        <Projects {...content.projects} />
        <Contact
          ctaLabel={content.hero.getInTouch}
          openToWork={content.openToWork}
          contact={content.contact}
        />
      </main>
      <Footer name={content.name} email={content.contact.email} content={content.footer} />
    </div>
  );
}
