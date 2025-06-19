import "./PolitiqueConfidentialite.css";

const PolitiqueConfidentialite = () => {
  return (
    <div className="politique-container">
      <h1 className="politique-title">Politique de Confidentialité</h1>
      <p className="politique-paragraph">
        Nous accordons une grande importance à la protection de vos données
        personnelles. Cette politique de confidentialité explique quelles
        données nous collectons, comment nous les utilisons et quels sont vos
        droits.
      </p>

      <h2 className="politique-subtitle">1. Collecte des informations</h2>
      <p className="politique-paragraph">
        Nous collectons les informations que vous nous fournissez directement
        (formulaires, inscription, etc.) ainsi que les données collectées
        automatiquement via les cookies ou outils d’analyse.
      </p>

      <h2 className="politique-subtitle">2. Utilisation des données</h2>
      <p className="politique-paragraph">
        Les données collectées sont utilisées pour fournir nos services,
        améliorer votre expérience utilisateur, et assurer la sécurité de notre
        site.
      </p>

      <h2 className="politique-subtitle">3. Partage des données</h2>
      <p className="politique-paragraph">
        Nous ne partageons vos données personnelles avec des tiers que lorsque
        cela est nécessaire (partenaires de confiance, exigences légales, etc.).
      </p>

      <h2 className="politique-subtitle">4. Vos droits</h2>
      <p className="politique-paragraph">
        Vous disposez de droits d’accès, de rectification, de suppression et
        d’opposition sur vos données personnelles. Pour exercer ces droits,
        veuillez nous contacter.
      </p>

      <h2 className="politique-subtitle">5. Sécurité</h2>
      <p className="politique-paragraph">
        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
        vos données contre tout accès non autorisé, modification, divulgation ou
        destruction.
      </p>

      <h2 className="politique-subtitle">6. Contact</h2>
      <p className="politique-paragraph">
        Pour toute question concernant cette politique de confidentialité, vous
        pouvez nous contacter à :{" "}
        <a
          href="mailto:potagerdestoilesnumeriques@gmail.com"
          className="politique-link"
        >
          potagerdestoilesnumeriques@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
