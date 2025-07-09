import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Applications from './pages/Applications';
import News from './pages/News';
import About from './pages/About';
import { Route, Routes, useLocation } from 'react-router-dom';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;