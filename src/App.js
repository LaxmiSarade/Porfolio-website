import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Educations";
import WorkExp from "./pages/workExp/workExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer">
          <h4 className="text-center pb-3 ms-3">
            made with 🖤 Laxmi @copy;2023
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
