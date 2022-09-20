import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import "./skills.styles.css";

const Skills: React.FC = (): JSX.Element => {
  return (
    <div className="skills-section" id="skills">
      <div className="section-center">
        <div className="title">
          <h2 className="number number-section">02.</h2>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills">
          <div className="skill-container">
            <div className="skill">
              <span className="skill-icon">
                <SiTypescript />
              </span>
              <h3 className="skill-text">Typescript</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <SiJavascript />
              </span>
              <h3 className="skill-text">Javascript</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <FaReact />
              </span>
              <h3 className="skill-text">React</h3>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill">
              <span className="skill-icon">
                <FaNode />
              </span>
              <h3 className="skill-text">Node</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <SiExpress />
              </span>
              <h3 className="skill-text">Express</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <SiMongodb />
              </span>
              <h3 className="skill-text">Mongodb</h3>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill">
              <span className="skill-icon">
                <FaBootstrap />
              </span>
              <h3 className="skill-text">Bootstrap</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <FaHtml5 />
              </span>
              <h3 className="skill-text">Html</h3>
            </div>
            <div className="skill">
              <span className="skill-icon">
                <FaCss3 />
              </span>
              <h3 className="skill-text">Css</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
