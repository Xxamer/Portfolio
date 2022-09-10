import { useEffect } from "react";
import "./hero.css";

function HeroSection() {
  return (
    <section className="HeroBackground">
      <div className="HeroText">
        <p className="WaveText">
          Christian Granado    
        </p>
        <p className="RetroWaveText">FullStack Developer</p>
      </div>
    </section>
  );
}

export default HeroSection;
