import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import Project from "./component/project.jsx";
import About from "./component/aboutMe.jsx";
import Experience from "./component/experience.jsx";
import {useRef, useState} from "react";
import Sidebar from "./component/Sidebar.jsx";

function App() {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
  return (
    <div >

        <Header
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
        />
        <Sidebar
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
        />
        <div ref={aboutRef}>
            <About/>
        </div>
        <div ref={experienceRef}>
            <Experience />
        </div>
        <div ref={projectsRef}>
            <Project/>
        </div>
        <Footer />
    </div>
  )
}

export default App
