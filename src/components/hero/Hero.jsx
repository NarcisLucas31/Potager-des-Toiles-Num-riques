import { Link } from "react-router-dom";
import "./Hero.css"; // tu peux aussi utiliser styled-components ou Tailwind si tu préfères

const Hero = () => {
  return (
    <section className="hero-overlay">
      <div className="overlay-content">
        <h1>Le Potager des Toiles Numériques</h1>
        <p>
          Nous créons des sites web simples et efficaces, alliant performance et
          durabilité. Faites le choix d’une présence en ligne respectueuse de
          l’environnement.
        </p>
        <div className="buttons">
          <Link to="/Contact">
            <button className="btn btn-secondary">Contact</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
