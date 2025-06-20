import "./Footer.css";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="icon">
            <Mail size={24} />
          </div>
          <h3>Email</h3>
          <p>
            Contactez-nous par e-mail pour toute demande d'information ou de
            devis.
          </p>
          <a href="mailto:email@exemple.com">
            potagerdestoilesnumeriques@gmail.com
          </a>
        </div>

        <div className="footer-col">
          <div className="icon">
            <Phone size={24} />
          </div>
          <h3>Téléphone</h3>
          <p>
            Appelez-nous directement pour une réponse rapide à vos questions.
          </p>
          <a href="tel:+33758201663">+33 7 58 20 16 63</a>
        </div>

        <div className="footer-col">
          <div className="icon">
            <MapPin size={24} />
          </div>
          <h3>Bureau</h3>
          <p>Adresse de correspondance pour toute communication postale.</p>
          <a href="#">24 rue du Soleil, Stains</a>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="footer-nav">
          <Link to="/Contact">Contactez-nous</Link>
          <Link to="/Services">Nos Services</Link>
          <Link to="/Apropos">À Propos</Link>
          <Link to="/Temoignages">Témoignages</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Le Potager des Toiles Numériques. Tous droits réservés.</p>
        <div className="footer-links">
          <Link to="/Politique">Politique de Confidentialité</Link>
          <Link to="/Conditions">Conditions de Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
