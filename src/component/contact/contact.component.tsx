import "./contact.styles.css";
import emailjs from "emailjs-com";
import { useState } from "react";
const Contact: React.FC = (): JSX.Element => {
  const [data, setData] = useState({
    from_name: "",
    message: "",
    from_email: "",
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    await emailjs.sendForm(
      "service_g1kyoah",
      "template_m5sszie",
      e.target,
      "uPYs61px3xGg_-8I-"
    );
    setData({
      from_name: "",
      message: "",
      from_email: "",
    });
  };

  return (
    <div className="skills-section" id="contact">
      <div className="section-center">
        <div className="title">
          <h2 className="number number-section">04.</h2>
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>
        <div className="section-center contact-container">
          <form onSubmit={sendEmail}>
            <div className="form-container">
              <label className="label">Your Name</label>
              <input
                className="input-name"
                type={"text"}
                placeholder="Name"
                name="from_name"
                value={data.from_name}
                onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-container">
              <label className="label">Email</label>
              <input
                className="input-name"
                type={"email"}
                value={data.from_email}
                placeholder="email@email.com"
                name="from_email"
                onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-container">
              <label className="label">message</label>
              <textarea
                className="input-name text-area"
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <button type="submit" className="btn submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
