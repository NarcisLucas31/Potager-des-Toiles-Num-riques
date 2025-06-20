import stackImg from "../../assets/Ecodesign.jpg"; // ← adapte selon ton chemin
import goalImg from "../../assets/Pc.jpg";
import useInView from "../../hooks/useInView";
import "./AboutVision.css";

export default function AboutVision() {
  const [ref1, visible1] = useInView();
  const [ref2, visible2] = useInView();

  return (
    <section className="about-vision">
      <div className="about-container">
        <div className="text-block">
          <h2>
            Une approche moderne
            <br />
            et responsable
          </h2>

          <p>
            Au Potager des Toiles Numériques, nous développons chaque projet
            avec l’ambition de proposer des sites web performants, épurés et
            respectueux de l’environnement. Nous privilégions une logique de
            sobriété fonctionnelle : chaque ligne de code est pensée pour son
            utilité réelle, chaque ressource est optimisée afin de réduire
            l'empreinte technique et énergétique.
          </p>
          <p>
            Notre stack repose sur des technologies modernes et légères. Le
            front-end est conçu en <strong>React.js</strong>, avec un
            déploiement rapide via <strong>Vercel</strong>, que nous prévoyons
            de remplacer à terme par un hébergement{" "}
            <strong>écologique et européen</strong>. Pour les projets
            nécessitant une base de données ou des fonctionnalités dynamiques,
            nous intégrons un back-end simple mais puissant via{" "}
            <strong>Supabase</strong>, garantissant une gestion sécurisée des
            données sans complexité superflue.
          </p>
          <p>
            En tant qu'agence jeune et engagée, nous adoptons une approche
            agile, transparente et évolutive. Nous sommes à l’écoute des besoins
            de chaque client, afin de construire des solutions réellement
            utiles, durables et faciles à maintenir. Notre objectif est de
            produire des sites de qualité, clairs et rapides, sans sacrifier la
            simplicité d’usage ni l’éthique du numérique.
          </p>
        </div>

        <div className="images-block">
          <div className="image-wrapper">
            <img
              ref={ref1}
              src={visible1 ? stackImg : ""}
              alt="Technologies utilisées"
              className={`vision-img ${visible1 ? "fade-in" : ""}`}
              loading="lazy"
            />
          </div>
          <div className="image-wrapper">
            <img
              ref={ref2}
              src={visible2 ? goalImg : ""}
              alt="Objectif écoresponsable"
              className={`vision-img ${visible2 ? "fade-in" : ""}`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
