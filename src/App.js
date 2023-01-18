import './App.css';
// import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Skills} from "./components/Skills";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import Footer from './components/Footer';
import Particle from './components/Particle';
// import HomeScreen from './screens/HomeScreen'

function App() {
  

  return (
    <div className="App">
      <Particle />
      <NavBar />
      <Banner/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;
