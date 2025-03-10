import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import { Button } from "./components/ui/button.jsx";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo.jsx";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <ThreeDCardDemo/> */}
    </main>
  );
};

export default App;
