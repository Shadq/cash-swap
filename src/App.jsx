import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import FAQ from "./FAQ";
import Stats from "./Stats";
import Info from "./Info";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="font-newFont h-full text-white bg-goodGray">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Info />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
