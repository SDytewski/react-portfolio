import './App.css';
// import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Skills} from "./components/Skills";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import Footer from './components/Footer';
// import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
