import "./Contacter.css";
import useInView from "../../hooks/useInView";
import { Link } from "react-router-dom";
import contactImg from "../../assets/Contact.webp"; // ajuste le chemin selon ton dossier

export default function Contacter() {
  const [ref, isVisible] = useInView();

  return (
    <section className={`contact ${isVisible ? "is-visible" : ""}`} ref={ref}>
      <div className="contact__inner">
        <div className="contact__content">
          <h2 className="contact__title">Contactez-nous pour votre projet</h2>
          <p className="contact__subtitle">
            Nous sommes prêts à transformer vos idées en un site web
            éco-responsable et efficace.
          </p>
          <div className="contact__buttons">
            <Link to="/Contact">
              <button className="btn btn-primary">Démarrer</button>
            </Link>
            <Link to="/Projets">
              <button className="btn btn--secondary">Voir</button>{" "}
            </Link>
          </div>
        </div>
        <div
          className="contact__image"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "350px",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
