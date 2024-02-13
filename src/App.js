import './App.css';
// import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Skills} from "./components/Skills";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import Footer from './components/Footer';
import { Form } from "./components/Form";
import Particle from './components/Particle';
import React, { useEffect, useRef } from "react";


// import HomeScreen from './screens/HomeScreen'


function App() {
  const formRef = useRef(null);

  return (
    <div className="App">
      <Particle />
      <NavBar />
      <Banner formRef={formRef}/>
      <Skills />
      <Projects />
      <About />
      <Form ref={formRef} />
      <Footer />
    </div>
  );
}


export default App;
