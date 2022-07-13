import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./components/pages/Beranda";
import Artikel from "./components/pages/Artikel";
import Potensi from "./components/pages/Potensi";
import Dokumentasi from "./components/pages/Dokumentasi";
import Footer from "./components/Footer";
import PotensiItem from "./components/pages/PotensiItem";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" exact element={<Beranda />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/potensi-daerah" element={<Potensi />} />
          <Route path="/potensi-daerah/:id" element={<PotensiItem />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
