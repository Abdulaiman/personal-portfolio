import "./footer.styles.css";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegWindowClose,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";
const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <h2 className="footer-text">
          Thank you for your time <FaHeart />
        </h2>
      </div>
      <div className="contact-icons">
        <a
          href="https://twitter.com/Aiman_webdev"
          target={"_blank"}
          rel="noreferrer"
          className="social-icons"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/Abdulaiman"
          rel="noreferrer"
          target="_blank"
          className="social-icons"
        >
          <FaGithub />
        </a>
        {/* <a href="/" className="social-icons">
          <FaLinkedin />
        </a> */}
      </div>
    </div>
  );
};
export default Footer;
