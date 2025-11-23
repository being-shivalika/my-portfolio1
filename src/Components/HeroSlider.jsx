import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Slide One",
    text: "This is the first slide",
    nextSection: "#about"
  },
  {
    id: 2,
    title: "Slide Two",
    text: "This is the second slide",
    nextSection: "#projects"
  },
  {
    id: 3,
    title: "Slide Three",
    text: "This is the third slide",
    nextSection: "#contact"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSection = (sectionID) => {
    document.querySelector(sectionID).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="slider-container">
      <div className="slide">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>

        <div className="btn-row" style={{ display: "flex", gap: "10px" }}>

          <button onClick={prevSlide}>Previous Slide</button>

          <button onClick={nextSlide}>Next Slide</button>

          <button onClick={() => goToSection(slides[current].nextSection)}>
            Next Section
          </button>
        </div>
      </div>
    </div>
  );
}
