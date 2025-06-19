import "./Presentation.css";
import useInView from "../../hooks/useInView"; // <- nouveau
import imgService from "../../assets/Presentation1.png";
import imgDesign from "../../assets/Presentation2.png";
import imgEco from "../../assets/Presentation3.png";

const cards = [
  {
    title: "Services personnalisés pour chaque besoin",
    text: "Nous offrons des solutions sur mesure pour votre présence en ligne.",
    image: imgService,
  },
  {
    title: "Design moderne et minimaliste",
    text: "Nos designs sont pensés pour captiver et engager.",
    image: imgDesign,
  },
  {
    title: "Optimisation pour un impact environnemental positif",
    text: "Nous intégrons des pratiques durables dans chaque projet.",
    image: imgEco,
  },
];

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__inner">
        <span className="presentation__label">Innovant</span>
        <h2 className="presentation__title">
          Des sites web écoresponsables et performants
        </h2>
        <p className="presentation__subtitle">
          Nous créons des sites web qui allient efficacité et respect de
          l’environnement. Chaque projet est conçu pour être léger, rapide et
          durable.
        </p>

        <div className="presentation__cards">
          {cards.map(({ title, text, image }, idx) => {
            const [ref, isVisible] = useInView();
            return (
              <div
                ref={ref}
                key={idx}
                className={`presentation__card ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                <div
                  className="presentation__card-image"
                  style={{ backgroundImage: `url(${image})` }}
                  aria-hidden="true"
                />
                <h3 className="presentation__card-title">{title}</h3>
                <p className="presentation__card-text">{text}</p>
              </div>
            );
          })}
        </div>

        <div className="presentation__buttons">
          <button className="btn btn-primary">Contact</button>
          <button className="btn btn--secondary">Démarrer →</button>
        </div>
      </div>
    </section>
  );
}
