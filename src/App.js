
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from './pages/carousel.js';
import Room from './pages/room.js';
import Footer from './pages/footer.js';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Carousel />
      <Room />
      <Footer />

    </div>
  );
}

export default App;
