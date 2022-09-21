import "./about.styles.css";
const About: React.FC = (): JSX.Element => {
  return (
    <div className="about" id="about">
      <div className="section-center aboutt">
        <div className="title">
          <h2 className="number number-section">01.</h2>
          <h2 className="section-title">About</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-me">
          <p className="text">
            My name is Aiman, i am a fullstack web developer base in Lagos,
            Nigeria. my journey into tech began when i wanted to build a static
            website for a small business. i made some research and stumbled
            across HTML and CSS which i absolutely love.
          </p>
          <br />
          <br />
          <p className="text">
            fast forward to now i am focus on building real life full stack web
            applications using Typescript and the popular Javascript framework
            (React) and the Js runtime Node.js.
          </p>
          <br />
          <p className="text p-text">
            i am looking forward to learning and expanding my career.
          </p>
          <a href="#contact" className="btn contact-btn">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
