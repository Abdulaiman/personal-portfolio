import { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegWindowClose,
} from "react-icons/fa";

import "./header.styles.css";
const Header: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      {open === true ? (
        <>
          <div className="overlay"></div>
          <div className="dropdown">
            <span
              onClick={() => {
                setOpen(false);
              }}
              className="close"
            >
              <FaRegWindowClose />
            </span>
            <div className="dropdown-icons">
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="dropdown-items"
              >
                <span className="number">01. </span>about
              </a>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="dropdown-items"
              >
                <span className="number">02. </span>skills
              </a>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="dropdown-items"
              >
                <span className="number">03. </span>projects
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="dropdown-items"
              >
                <span className="number">04. </span>contact
              </a>

              <a href="resume.pdf" download="resume.pdf" className="btn resume">
                resume
              </a>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="navigation">
        <div>
          <a href="/" className="material-symbols-outlined">
            {"<<Aiman>>"}
          </a>
        </div>
        <div className="nav-icons">
          <a href="#about" className="nav-items">
            <span className="number">01. </span>about
          </a>
          <a href="#skills" className="nav-items">
            <span className="number">02. </span>skills
          </a>
          <a href="#projects" className="nav-items">
            <span className="number">03. </span>projects
          </a>
          <a href="#contact" className="nav-items">
            <span className="number">04. </span>contact
          </a>
          <a href="resume.pdf" download="resume.pdf" className="btn resumee">
            resume
          </a>
        </div>

        <div className="bars-container">
          <span
            className="bars"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaBars />
          </span>
        </div>
      </div>
      <div className="hero">
        <div className="hero-container">
          <p className="name-p">Hi, my name is</p>
          <h1 className="name">
            <span>Rabiu </span>
            <span>Abdulazeez,</span>
          </h1>
          <h1 className="name-2">Aiman.</h1>
          <p className="description">
            I am a fullstack MERN (Mongodb, express, react and node)
            developer...
          </p>
          <div className="head-socials">
            <a
              href="https://twitter.com/Aiman_webdev"
              target={"_blank"}
              className="social-icons head-icons"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Abdulaiman"
              rel="noreferrer"
              target="_blank"
              className="social-icons head-icons"
            >
              <FaGithub />
            </a>
            {/* <a href="/" className="social-icons head-icons">
              <FaLinkedin />
            </a> */}
          </div>
          <a href="#contact" className="btn hire">
            Hire me
          </a>
        </div>
      </div>
      <div className="parent-icons">
        <div className="icons">
          <div className="icons-container">
            <a
              href="https://twitter.com/Aiman_webdev"
              target={"_blank"}
              className="social-icons"
              rel="noreferrer"
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
          <div className="line"></div>
        </div>
      </div>
      <div className="parent-email">
        <div className="icons">
          <div className="icons-container">
            <p className="email">abduldanmaihaja@gmail.com</p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
