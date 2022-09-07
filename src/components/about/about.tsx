import "./about.css";

function AboutSection() {
  return (
    <section className="Blackground">
      <div className="Container">
        <p className="SynthTitle BigText">Sobre mí</p>
        <div className="row">
          <div className="col-6">
            <div className="AboutMeSynthBox glow">
              <p className="WhiteText">
                <strong>
                  Me llamo Christian, soy un desarrollador fullstack con
                  capacidad de organización y trabajo en equipo, fanático de
                  la tecnología y que le encanta aprender.
                </strong>
              </p>
              <p className="WhiteText">
                Desde que era un niño siempre me apasionó estar delante de un ordenador, 
                con 14 años empecé a programar pequeños scripts en python. 
                Me encantan los videojuegos, leer, la música y aprender cosas nuevas.
              </p>
              <p className="WhiteText">
               Actualmente estoy viviendo en Las Palmas de Gran Canaria (España)
              </p>
            </div>
          </div>
          <div className="col-5">
            <div className="ContactMeSynthBox glow">
              <p className="SynthTitle MediumText">Contáctame</p>
              <p className="WhiteText"> <a href="mailto:chrisgrarod96@gmail.com"> <strong>Email: Christian Granado</strong> </a> </p>
              <p className="WhiteText"> <a href="https://es.linkedin.com/in/christiangranadorodriguez"> <strong>LinkedIn</strong> </a> </p>
              <p className="WhiteText"> <a href="https://github.com/Xxamer"> <strong>Github</strong> </a> </p>
              <p className="WhiteText"> <a href="tel:+34667831974"><strong>Teléfono: (+34) 667-83-19-74</strong></a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
