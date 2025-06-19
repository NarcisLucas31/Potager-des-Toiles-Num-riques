import "./Service.css";
import { FaReact, FaServer, FaGlobe } from "react-icons/fa";
import useInView from "../../hooks/useInView";

const Service = () => {
  const [ref1, visible1] = useInView({ threshold: 0.2 });
  const [ref2, visible2] = useInView({ threshold: 0.2 });
  const [ref3, visible3] = useInView({ threshold: 0.2 });

  return (
    <section className="services--section">
      <h2 className="service--title">Nos Services</h2>
      <p className="service--subtitle">
        Des solutions web modernes, adaptées à vos besoins : développement,
        hébergement et accompagnement sur mesure.
      </p>

      <div className="services-grid">
        <div ref={ref1} className={`service-card ${visible1 ? "fade-in" : ""}`}>
          <FaReact className="service-icon" />
          <h3>Création de site React</h3>
          <p>
            Développement de sites performants et modernes en React.js, adaptés
            à tous les écrans.
          </p>
        </div>
        <div ref={ref2} className={`service-card ${visible2 ? "fade-in" : ""}`}>
          <FaServer className="service-icon" />
          <h3>Hébergement & Maintenance</h3>
          <p>
            Hébergement sécurisé, sauvegardes, mises à jour et support technique
            continu.
          </p>
        </div>
        <div ref={ref3} className={`service-card ${visible3 ? "fade-in" : ""}`}>
          <FaGlobe className="service-icon" />
          <h3>Nom de domaine</h3>
          <p>
            Réservation, configuration et gestion de votre nom de domaine
            professionnel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
