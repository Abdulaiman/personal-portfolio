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
              <a href="/" className="dropdown-items">
                <span className="number">01. </span>about
              </a>
              <a href="/" className="dropdown-items">
                <span className="number">02. </span>skills
              </a>
              <a href="/" className="dropdown-items">
                <span className="number">03. </span>projects
              </a>
              <a href="/" className="dropdown-items">
                <span className="number">04. </span>contact
              </a>

              <button className="btn resume">resume</button>
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
          <a href="/" className="nav-items">
            <span className="number">01. </span>about
          </a>
          <a href="/" className="nav-items">
            <span className="number">02. </span>skills
          </a>
          <a href="/" className="nav-items">
            <span className="number">03. </span>projects
          </a>
          <a href="/" className="nav-items">
            <span className="number">04. </span>contact
          </a>
          <button className="btn">resume</button>
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
          <h1 className="build">I build apps for the web</h1>
          <p className="description">
            I am a fullstack MERN (Mongodb, express, react and node)
            developer...
          </p>
          <button className="btn hire">Hire me</button>
        </div>
      </div>
      <div className="parent-icons">
        <div className="icons">
          <div className="icons-container">
            <a href="/" className="social-icons">
              <FaTwitter />
            </a>
            <a href="/" className="social-icons">
              <FaGithub />
            </a>
            <a href="/" className="social-icons">
              <FaLinkedin />
            </a>
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
