import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Projets from './pages/Projets';
import ProjectDetail from './pages/ProjectDetail';
import Parcours from './pages/Parcours';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 to-orange-900">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:id" element={<ProjectDetail />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;