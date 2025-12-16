import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Projets from './pages/Projets';
import Parcours from './pages/Parcours';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/parcours" element={<Parcours />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;