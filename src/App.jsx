import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import Project from "./component/project.jsx";
import About from "./component/aboutMe.jsx";
import Experience from "./component/experience.jsx";
function App() {
    // const [resumData, setResumData] = useState([]);
    // const [sharedData, setSharedData] = useState([]);
  return (
    <>
        <Header/>
        <About/>
        <Experience />
        <Project />
        <Footer />
    </>
  )
}

export default App
