import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/footer/Footer";
import Politique from "./pages/Politique";
import Conditions from "./pages/Conditions";
import ScrollToTop from "./components/ScrollToTop";
import Projets from "./pages/Projets";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {}
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Politique" element={<Politique />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route path="/Projets" element={<Projets />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
