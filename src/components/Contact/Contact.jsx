import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SendIcon from "@material-ui/icons/Send";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <div className="title-only">
        <Fade down>
          <h1>
            Contact <span className="me">Me</span>
          </h1>
        </Fade>
        <Slide left>
          <span className="underline"></span>
        </Slide>
        <Fade up>
          <span className="subtitle">Get in touch</span>
        </Fade>
      </div>
      <div className="sides">
        <div className="left">
          <div className="container">
            <div>
              <Rotate top left>
                <div className="info">
                  <PhoneIcon className="phone-icon" />
                  <div>
                    <h3 className="contact-title">Call Me</h3>
                    <span className="contact-subtitle">+40 746 929 362</span>
                  </div>
                </div>
              </Rotate>
              <Slide left>
                <div className="info">
                  <EmailIcon className="phone-icon" />
                  <div>
                    <h3 className="contact-title">Email</h3>
                    <span className="contact-subtitle">
                      marius20amc@gmail.com
                    </span>
                  </div>
                </div>
              </Slide>
              <Rotate bottom left>
                <div className="info">
                  <LocationOnIcon className="phone-icon" />
                  <div>
                    <h3 className="contact-title">Location</h3>
                    <span className="contact-subtitle">
                      Baia Mare - Maramures
                    </span>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
        <div className="right">
          <form action="" className="contact-form-grid">
            <div className="contact-inputs">
              <Fade right>
                <div className="contact-content">
                  <label htmlFor="" className="contact-label">
                    Name
                  </label>
                  <input type="text" className="input" />
                </div>
              </Fade>
              <Fade right>
                <div className="contact-content">
                  <label htmlFor="" className="contact-label">
                    Email
                  </label>
                  <input type="email" className="input" />
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className="contact-content">
                <label htmlFor="" className="contact-label">
                  Message
                </label>
                <textarea
                  name=""
                  id="text"
                  cols="0"
                  rows="7"
                  className="input"
                ></textarea>
              </div>
            </Fade>
            <Fade up>
              <div className="btn">
                <button className="button">
                  <span>Send Message</span>
                  <SendIcon />
                </button>
              </div>
            </Fade>
          </form>
        </div>
      </div>
    </div>
  );
}
