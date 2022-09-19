import "./about.styles.css";
const About: React.FC = (): JSX.Element => {
  return (
    <div className="about">
      <div className="section-center aboutt">
        <div className="title">
          <h2 className="number number-section">01.</h2>
          <h2 className="section-title">About</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-me">
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
          <br />
          <br />
          <p className="text">
            <span>{"      n   "}</span>making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still
          </p>
          <br />
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </p>
          <button className="btn contact-btn">Contact Me</button>
        </div>
      </div>
    </div>
  );
};
export default About;
