import "./EcoPratiques.css";

const pratiques = [
  {
    titre: "Des sites légers et rapides",
    texte:
      "Nous optimisons chaque ligne de code, chaque image, pour offrir une expérience fluide tout en réduisant la consommation d'énergie.",
  },
  {
    titre: "Un design sobre et réfléchi",
    texte:
      "Nous évitons les éléments superflus et privilégions la lisibilité, la hiérarchie claire et des interfaces épurées.",
  },
  {
    titre: "Hébergement écologique",
    texte:
      "Nos sites sont hébergés sur des serveurs alimentés par des énergies renouvelables et basés en Europe.",
  },
  {
    titre: "Accessibilité et durabilité humaine",
    texte:
      "Nous concevons des sites accessibles à tous, y compris sur des appareils anciens ou à faible bande passante.",
  },
  {
    titre: "Contenu durable",
    texte:
      "Nous favorisons des contenus pertinents, bien structurés et durables, qui ne nécessitent pas de refonte constante.",
  },
];

export default function EcoPratiques() {
  return (
    <section className="eco-pratiques">
      <div className="eco-pratiques__inner">
        <h2 className="eco-pratiques__title">Nos pratiques écoresponsables</h2>
        <p className="eco-pratiques__intro">
          Parce que le numérique a aussi une empreinte écologique, nous avons
          fait le choix de concevoir chaque site de manière responsable.
        </p>

        <ul className="eco-pratiques__list">
          {pratiques.map((item, idx) => (
            <li
              key={idx}
              className="eco-pratiques__item fade-in"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <h3>{item.titre}</h3>
              <p>{item.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
