import "./Projet.css";
import projet1Img from "../../assets/BolbosBTP.webp"; // Ajoute tes images ici

const projets = [
  {
    titre: "BolbosBTP",
    description:
      "Nous avons conçu le site vitrine de Bolbos BTP, une entreprise spécialisée dans les travaux de menuiserie et d'aménagement, avec une approche centrée sur la clarté et la confiance. Hébergé sur Vercel, ce projet met en valeur leur savoir-faire à travers une interface simple, responsive et chaleureuse, intégrant des visuels de réalisations et des appels à l’action clairs",
    image: projet1Img,
    lien: "https://bolbos-btp.vercel.app/",
  },
  // Tu pourras facilement en rajouter d'autres ici
];

export default function Projet() {
  return (
    <section className="projets">
      <div className="projets__inner">
        <h2 className="projets__title">Nos projets web</h2>
        <p className="projets__intro">
          Nous débutons cette belle aventure, alors nos projets sont encore peu
          nombreux… mais riches de sens et conçus avec soin.
        </p>

        <div className="projets__grid">
          {projets.map((projet, idx) => (
            <div key={idx} className="projets__card">
              <div
                className="projets__image"
                style={{ backgroundImage: `url(${projet.image})` }}
              />
              <div className="projets__content">
                <h3>{projet.titre}</h3>
                <p>{projet.description}</p>
                <a
                  href={projet.lien}
                  className="projets__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
