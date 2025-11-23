import { useState } from "react";
import "./Hero.css";

const slides = [
  {
    id: "hero",
    title: "Hi! I'm Shivalika Mehra",
    subtitle: "Frontend Developer",
    text: "I build clean, modern and interactive web experiences.",
    btn: "See Skills",
    btn2: "More About Me",
    targetPrimary: "#skills",
    targetSecondary: "#About",
    image: "/images/final1st.png",
  },
  {
    id: "skills",
    title: "The Way I Build",
    text: "I'm always refining how I build — cleaner structure, smoother flow, better timing. I've realised the small fixes matter the most; every tweak teaches me something about how interfaces actually behave. That steady improvement shapes the way I work, and the tools I use are the ones that help me build better each time",
    btn: "View Projects",
    btn2: "What i Use",
    targetPrimary: "#projects",
    targetSecondary: "#Skills",
    image: "/images/final2nd.png",
  },
  {
    id: "projects",
    title: "Projects",
    text: "Here's what I've built recently.",
    btn: "Let's connect!!",
    btn2: "Recent Projects",
    targetPrimary: "#hero",
    targetSecondary: "#Projects",
    image: "/images/final3rd.png",
  },
  {
    id: "contact",
    title: "Let's Connect!",
    text: "Feel free to reach out for collaborations or just a friendly chat.",
    btn: "Back To Start",
    btn2: "Reach Out",
    targetPrimary: "#skills",
    targetSecondary: "#Contact",
    image: "/images/final4th.png",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];

  const goToSection = (target) => {
    const el = document.querySelector(target);
    if (!el) return; 
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav">
        <div className="logo">Shivalika Mehra</div>
        <div className="nav-links">
          <div className="nav-items" onClick={() => goToSection("#About")}>About</div>
          <div className="nav-items" onClick={() => goToSection("#Projects")}>Projects</div>
          <div className="nav-items" onClick={() => goToSection("#Contact")}>Contact</div>
        </div>
      </div>

      <div id={slide.id} className="hero" style={{ backgroundImage: `url(${slide.image})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>{slide.title}</h1>
          {slide.subtitle && <h2>{slide.subtitle}</h2>}
          <p>{slide.text}</p>

          <button className="hero-btn" onClick={() => { setCurrent((current + 1) % slides.length); setTimeout(() => goToSection(slide.targetPrimary), 300); }}>
            {slide.btn}
          </button>
          <button className="hero-btn2" onClick={() => { setCurrent((current + 1) % slides.length);   setTimeout(() => goToSection(slide.targetSecondary), 300);  }}>
            
            {slide.btn2}
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
