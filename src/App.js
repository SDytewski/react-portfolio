import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="App">
      <NavBar />
        <Container>
          <HomeScreen />
        </Container>
      <Footer />
    </div>
  );
}

export default App;
