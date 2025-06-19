import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Tarifs & Détails des Services</h2>
      <p className="pricing-subtitle">
        Voici une estimation de mes tarifs, selon vos besoins. Chaque projet
        peut être adapté sur mesure.
      </p>

      <div className="pricing-cards">
        <div className="pricing-card alt-style">
          <span className="badge">Site Web</span>
          <h3>Création & Design</h3>
          <p className="price">à partir de 350€</p>
          <ul>
            <li>Développement React.js</li>
            <li>Responsive (mobile/tablette/desktop)</li>
            <li>Délais rapides & flexibles</li>
            <li>+ Design personnalisé (complémentaire)</li>
          </ul>
        </div>

        <div className="pricing-card alt-style">
          <span className="badge">Hébergement</span>
          <h3>Domaine & Maintenance</h3>
          <p className="price">à partir de 20€/mois</p>
          <ul>
            <li>Nom de domaine </li>
            <li>Hébergement Vercel (éco prévu)</li>
            <li>Maintenance simple & support</li>
            <li>Optimisation SEO</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
