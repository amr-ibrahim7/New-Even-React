import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import CreativeSpeakersComponent from "./components/CreativeSpeakers/CreativeSpeakers";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import WatchVideo from "./components/WatchVideo/WatchVideo";
import OurProgramsPages from "./components/OurPrograms";
import RegisterHere from "./components/RegisterHere";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";


export default function Home() {
  return (
  <>
  <Navbar />
  <Header />
  <AboutUs />
  <Overview />
  <WatchVideo />
  <CreativeSpeakersComponent />
  <OurProgramsPages />
  <RegisterHere />
  <AccordionComponent />

  </>
  )
}
