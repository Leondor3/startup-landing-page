import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Feature } from "./components/Features";
import { Video } from "./components/Video";
import { Grid } from "./components/Grid";
import { About } from "./components/About";
import { Testimonals } from "./components/Testimonals";
import { Pricing } from "./components/Princing";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-black h-screen w-full">
      <Header />
      <Banner />
      <Feature />
      <Video />
      <Grid />
      <About />
      <Testimonals />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
