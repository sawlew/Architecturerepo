import "./App.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Header from "./component/Header"
import Hero from "./component/Hero"
import Vision from "./component/Vision";
import Designs from "./component/Designs";
import Offer from "./component/Offer";
import Footer from "./component/Footer";

function App() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //   });
  // }, [])

  return (
    <>
      <Header />
      <Hero />
      <Vision />
      <Designs />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
