import {gsap, Power3} from 'gsap'
import ContactMe from "./components/contact/ContactMe.jsx";
import Footer from "./components/footer/Footer.jsx";
import Mainpage from "./components/mainPage/Mainpage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Skills from "./components/skills/Skills.jsx";
import WorkExperience from "./components/workExperience/WorkExperience.jsx";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <>
      <Navbar tl = {tl} ease = {ease} />
      <div className="container">
        <Mainpage tl = {tl} ease = {ease} />
        <Skills tl = {tl} ease = {ease} />
        <WorkExperience tl = {tl} ease = {ease} />
        <ContactMe tl = {tl} ease = {ease} />
      </div>
      <Footer />
    </>
  );
}

export default App;
