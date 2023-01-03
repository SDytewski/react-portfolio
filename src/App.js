import './App.css';
import { Container } from 'react-bootstrap'
import Navbar from './components/Header/NavBar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="App">
      <Navbar />
        <Container>
          <HomeScreen />
        </Container>
      <Footer />
    </div>
  );
}

export default App;
