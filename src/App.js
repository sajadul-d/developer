import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";
import Testimonials from "./components/testimonials/Testimonials";
function App() {
  return (
    <div className="container-fluid bg-color">
      <Nav/>
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
