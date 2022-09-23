import "./projects.styles.css";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import { FaBootstrap, FaGithub, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPuppeteer,
  SiChartdotjs,
  SiStyledcomponents,
} from "react-icons/si";

const Projects: React.FC = (): JSX.Element => {
  return (
    <div className="projects-section" id="projects">
      <div className="section-center">
        <div className="title">
          <h2 className="number number-section">03.</h2>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-container">
          <div className="project">
            <div className="project-img">
              <img src={img1} alt="bug tracker img" className="p-img" />
            </div>
            <div className="project-text">
              <h2 className="p-title">Bug Tracker</h2>
              <h3 className="p-explain">
                The Bug tracker is a software that allows companies or
                organization to keep track of reported bugs from development,
                production or testing and assign them to developers to get
                fixed.
              </h3>
              <div className="click-container">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://aiman-bug-tracker.netlify.app"
                  className="btn click"
                >
                  Live-site
                </a>
                <a
                  href="https://www.youtube.com/watch?v=k2XLY81k6m0&t=4s"
                  className="btn click"
                >
                  Demo
                </a>
              </div>
              <div className="click-container">
                <a
                  href="https://github.com/Abdulaiman/REACT-bug-tracker-front-end"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn click"
                >
                  Front-End
                  <FaGithub />
                </a>
                <a
                  href="https://github.com/Abdulaiman/NODE-bug-tracker-Back-End"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn click"
                >
                  Back-End
                  <FaGithub />
                </a>
              </div>
              <div className="tech-container">
                <div className="tech-title">
                  <h3 className="tech">Technologies Used</h3>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaReact />
                    </span>
                    <h3 className="skill-text text-tech">React</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaNode />
                    </span>
                    <h3 className="skill-text text-tech">Node</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiExpress />
                    </span>
                    <h3 className="skill-text text-tech">Express</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiMongodb />
                    </span>
                    <h3 className="skill-text text-tech">MongoDb</h3>
                  </div>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiChartdotjs />
                    </span>
                    <h3 className="skill-text text-tech">Chart.js</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaBootstrap />
                    </span>
                    <h3 className="skill-text text-tech">Bootstrap</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiStyledcomponents />
                    </span>
                    <h3 className="skill-text text-tech">Styled-Components</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project">
            <div className="project-text">
              <h2 className="p-title">Employee Management Software</h2>
              <h3 className="p-explain">
                This is an app that allows organization or companies to keep
                track of there employees, departments and manage leaves, the
                software also allow employees to make complaints anonymously and
                the organization to pass notice to all employees.
              </h3>
              <div className="click-container">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://aiman-employee-management-system.netlify.app"
                  className="btn click"
                >
                  Live-site
                </a>
                {/* <a href="/" className="btn click">
                  Demo
                </a> */}
              </div>
              <div className="click-container">
                <a
                  href="https://github.com/Abdulaiman/TYPESCRIPT-REACT-employee-management-system"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn click"
                >
                  Front-End
                  <FaGithub />
                </a>
                <a
                  target={"_blank"}
                  href="https://github.com/Abdulaiman/TYPESCRIPT_NODE-employee-management-system"
                  rel="noreferrer"
                  className="btn click"
                >
                  Back-End
                  <FaGithub />
                </a>
              </div>
              <div className="tech-container">
                <div className="tech-title">
                  <h3 className="tech">Technologies Used</h3>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiTypescript />
                    </span>
                    <h3 className="skill-text text-tech">Typescript</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiChartdotjs />
                    </span>
                    <h3 className="skill-text text-tech">Chart.Js</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaReact />
                    </span>
                    <h3 className="skill-text text-tech">React</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaNode />
                    </span>
                    <h3 className="skill-text text-tech">Node</h3>
                  </div>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiExpress />
                    </span>
                    <h3 className="skill-text text-tech">Express</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaBootstrap />
                    </span>
                    <h3 className="skill-text text-tech">Bootstrap</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiMongodb />
                    </span>
                    <h3 className="skill-text text-tech">MongoDb</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-img">
              <img src={img3} alt="bug tracker img" className="p-img" />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="project">
            <div className="project-img">
              <img src={img2} alt="bug tracker img" className="p-img" />
            </div>
            <div className="project-text">
              <h2 className="p-title">Job-search Web Scrapper</h2>
              <h3 className="p-explain">
                The job search web scrapper is a web application that allows
                users to search for jobs from top job posting sites like Indeed
                and Linkedin and also keep track of the application process with
                a click of a button without having to do it manually.
              </h3>
              <div className="click-container">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://aiman-job-search-and-tracker.netlify.app"
                  className="btn click"
                >
                  Live-site
                </a>
                <a
                  href="https://www.youtube.com/watch?v=k2XLY81k6m0&t=4s"
                  className="btn click"
                >
                  Demo
                </a>
              </div>
              <div className="click-container">
                <a
                  href="https://github.com/Abdulaiman/TYPSCRIPT_-_REACT_Job-search-and-tracker"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn click"
                >
                  Front-End
                  <FaGithub />
                </a>
                <a
                  href="https://github.com/Abdulaiman/NODE__Job-search-and-tracker"
                  target={"_blank"}
                  rel="noreferrer"
                  className="btn click"
                >
                  Back-End
                  <FaGithub />
                </a>
              </div>
              <div className="tech-container">
                <div className="tech-title">
                  <h3 className="tech">Technologies Used</h3>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiTypescript />
                    </span>
                    <h3 className="skill-text text-tech">Typescript</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiPuppeteer />
                    </span>
                    <h3 className="skill-text text-tech">Puppeteer</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaReact />
                    </span>
                    <h3 className="skill-text text-tech">React</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaNode />
                    </span>
                    <h3 className="skill-text text-tech">Node</h3>
                  </div>
                </div>
                <div className="technologies">
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiExpress />
                    </span>
                    <h3 className="skill-text text-tech">Express</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <FaBootstrap />
                    </span>
                    <h3 className="skill-text text-tech">Bootstrap</h3>
                  </div>
                  <div className="skill skill-tech-1">
                    <span className="skill-icon icon-tect">
                      <SiMongodb />
                    </span>
                    <h3 className="skill-text text-tech">MongoDb</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
