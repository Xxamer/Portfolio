import { useState } from "react";
import "./contact_form.css";
const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/c1ba3060-3038-11ed-8e75-59d5c7f4376d"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const sendEmail = () => {
        setTimeout(() => {
            alert("SUBMITTEADO");
            setSubmitted(true);
        }, 100);
    };
    return (
        <form
            action={FORM_ENDPOINT}
            target="_blank"
            method="post"
            onSubmit={sendEmail}
        >
            <div className="row">
                <div className="col-12">
                    <label className="SynthTitle MediumText" htmlFor="Name">Name</label>
                    <input
                        className="SynthInput"
                        type="text"
                        placeholder="Name"
                        name="Name"
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="SynthTitle MediumText" htmlFor="email">Contact Email</label>
                    <input
                        className="SynthInput"
                        type="email"
                        placeholder="Email of contact"
                        name="email"
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="SynthTitle MediumText" htmlFor="Subject">Subject</label>
                    <textarea
                        rows={12}
                        className="SynthTextArea"
                        placeholder="Subject"
                        name="Subject"
                        required
                    ></textarea>
                </div>
              <div className="centerButton">
                <button className="sendButton" type="submit">
                    Send
                </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
