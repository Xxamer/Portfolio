import ContactForm from "../contact_form/contact_form";
import "./contact.css";
function ContactSection() {
  return (
    <section className="Blackground">
      <div className="Container">
        <p className="SynthTitle BigText">Contact</p>
        <div className="row">
          <div className="col-12">
            <div className="col-12 ContactSynth glow">
              <div className="col-6">
                <ContactForm></ContactForm>
              </div>
              <div className="col-6">
                <div className="ContactMeSynthBox">
                  <p className="SynthTitle MediumText CenterText">Reach me</p>
                  <h1 className="WhiteText CenterText"> <a href="mailto:chrisgrarod96@gmail.com"> <strong>Email: Christian Granado</strong> </a> </h1>
                  <h1 className="WhiteText CenterText"> <a href="https://es.linkedin.com/in/christiangranadorodriguez"> <strong>LinkedIn</strong> </a> </h1>
                  <h1 className="WhiteText CenterText"> <a href="https://github.com/Xxamer"> <strong>Github</strong> </a> </h1>
                  <h2 className="WhiteText CenterText"> <a href="tel:+34667831974"><strong>Phone: (+34) 667-83-19-74 / 828-01-73-22</strong></a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
