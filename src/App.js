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
import RoomDetail1 from './pages/room/room-detail1.js';  // ใช้ชื่อที่ถูกต้อง

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <Router> {/* ใช้ BrowserRouter เป็นตัวห่อหุ้ม Routing */}
      <div className="App">
        <Navbar />

        {/* กำหนดเส้นทางต่างๆ */}
        <Routes>
          {/* หน้าแรก จะต้องแสดง Carousel และ Room */}
          <Route path="/" element={<><Carousel /><Room /></>} />
          
          {/* หน้า Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* หน้า About */}
          <Route path="/about" element={<About />} />
          
          {/* หน้า Contact Methods */}
          <Route path="/contact-methods" element={<ContactMethods />} />
          
          {/* หน้า room-detail1 */}
          <Route path="/room-detail1" element={<RoomDetail1 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
