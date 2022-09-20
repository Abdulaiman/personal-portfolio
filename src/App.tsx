import "./App.css";
import Header from "./component/home/header.component";
import About from "./component/about/about.component";
import Skills from "./component/skills/skills.component";
import Projects from "./component/projects/projects.component";
import Contact from "./component/contact/contact.component";
import Footer from "./component/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
