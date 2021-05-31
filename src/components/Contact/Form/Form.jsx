import React from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import SendIcon from "@material-ui/icons/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const notifyOk = () => toast("Success");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mptdas",
        "template_ej6kptt",
        e.target,
        "user_JqQ3Oef59Kgmg5hrCCNoO"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifyOk();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <form action="" onSubmit={sendEmail} className="contact-form-grid">
      <div className="contact-inputs">
        <Fade right>
          <div className="contact-content">
            <label htmlFor="" className="contact-label">
              Name
            </label>
            <input type="text" name="name" className="input" />
          </div>
        </Fade>
        <Fade right>
          <div className="contact-content">
            <label htmlFor="" className="contact-label">
              Email
            </label>
            <input type="email" name="email" className="input" />
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="contact-content">
          <label htmlFor="" className="contact-label">
            Message
          </label>
          <textarea
            name="message"
            id="text"
            cols="0"
            rows="7"
            className="input"
          ></textarea>
        </div>
      </Fade>
      <Fade up>
        <div className="btn">
          <button type="submit" className="button">
            <span>Send Message</span>
            <SendIcon />
          </button>
        </div>
      </Fade>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </form>
  );
}
