import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { MatrixRain, ToggleMatrixRain, Nav } from './components';

function App() {
  const [rainOn, setRainOn] = useState(true);
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
          <ToggleMatrixRain rainOn={rainOn} setRainOn={setRainOn} />
        </div>
        {rainOn && <MatrixRain />}
      </div>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
