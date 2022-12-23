import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <div className="App">
      <Header />
        <Container>
          <HomeScreen />
        </Container>
      <Footer />
    </div>
  );
}

export default App;
