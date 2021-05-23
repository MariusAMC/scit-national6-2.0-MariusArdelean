import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SendIcon from "@material-ui/icons/Send";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <div className="title-only">
        <h1>
          Contact <span className="me">Me</span>
        </h1>
        <span className="underline"></span>
        <span className="subtitle">Get in touch</span>
      </div>
      <div className="sides">
        <div className="left">
          <div className="container">
            <div>
              <div className="info">
                <PhoneIcon className="phone-icon" />
                <div>
                  <h3 className="contact-title">Call Me</h3>
                  <span className="contact-subtitle">+40 746 929 362</span>
                </div>
              </div>
              <div className="info">
                <EmailIcon className="phone-icon" />
                <div>
                  <h3 className="contact-title">Email</h3>
                  <span className="contact-subtitle">
                    marius20amc@gmail.com
                  </span>
                </div>
              </div>
              <div className="info">
                <LocationOnIcon className="phone-icon" />
                <div>
                  <h3 className="contact-title">Location</h3>
                  <span className="contact-subtitle">
                    Baia Mare - Maramures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form action="" className="contact-form-grid">
            <div className="contact-inputs">
              <div className="contact-content">
                <label htmlFor="" className="contact-label">
                  Name
                </label>
                <input type="text" className="input" />
              </div>
              <div className="contact-content">
                <label htmlFor="" className="contact-label">
                  Email
                </label>
                <input type="email" className="input" />
              </div>
            </div>
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
            <div className="btn">
              <button className="button">
                <span>Send Message</span>
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
