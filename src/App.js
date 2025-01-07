import './App.css';
import './css/btncolor.css';
import './css/nav.css';
import './css/room.css';
import Navbar from './components/Navbar.js';
import Carousel from './pages/carousel.js';
import Room from './pages/room.js';
import Footer from './pages/footer.js';
import Contact from './pages/ContactPage.js';  
import About from './pages/AboutPage.js';  
import ContactMethods from './pages/ContactMethodsPage.js';
import RoomDetail1 from './pages/room/room-detail1.js';  
import Buyroom from './pages/room/buyroom.js'; 
import Buyroom2 from './pages/room/buyroom2.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import for React Router v6

function App() {
  return (
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <div className="App">
        <Navbar />

        {/* Define routes using Routes and Route */}
        <Routes>
          <Route path="/" element={<><Carousel /><Room /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-methods" element={<ContactMethods />} />
          <Route path="/room-detail1" element={<RoomDetail1 />} />

          <Route path="/buyroom" element={<Buyroom />} />
          <Route path="/buyroom2" element={<Buyroom2 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
