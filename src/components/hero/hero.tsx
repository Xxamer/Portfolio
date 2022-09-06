import { useEffect } from "react";
import "./hero.css";

const method = () => {
  console.log("Yes") 
}

function HeroSection() {
  useEffect(() => {
    method();
  }, [])

  return (
    <section className="HeroBackground">
      <div className="HeroText">
        <p className="WaveText">
          Christian Granado <br />
          FullStack Developer
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
