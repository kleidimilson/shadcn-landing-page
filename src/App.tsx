import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      
      <About />
      <HowItWorks />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Newsletter /> */}
{/*       <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
