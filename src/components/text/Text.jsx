import "./Text.css";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <section className="sustainable-section">
      <p className="texte-subtitle">Écologique</p>
      <h2 className="texte-title">Engagés pour un avenir numérique durable</h2>
      <p className="texte-description">
        Le Potager des Toiles Numériques est une agence dédiée à la création de
        sites web simples et efficaces, tout en respectant notre planète. Nous
        nous engageons à concevoir des solutions numériques légères et
        écoresponsables.
      </p>
      <div className="button-group">
        <Link to="/Apropos" className="btn btn--secondary">
          Découvrir →
        </Link>
      </div>
    </section>
  );
};

export default Text;
