import React from "react";
import "./ConditionsService.css";

const ConditionsService = () => {
  return (
    <div className="conditions-container">
      <h1 className="conditions-title">Conditions de Service</h1>
      <p className="conditions-paragraph">
        En accédant à notre site, vous acceptez de vous conformer aux présentes
        conditions générales d'utilisation. Veuillez les lire attentivement.
      </p>

      <h2 className="conditions-subtitle">1. Utilisation du site</h2>
      <p className="conditions-paragraph">
        Vous vous engagez à utiliser le site uniquement à des fins légales et à
        ne pas porter atteinte aux droits de tiers ou au bon fonctionnement du
        site.
      </p>

      <h2 className="conditions-subtitle">2. Propriété intellectuelle</h2>
      <p className="conditions-paragraph">
        Le contenu de ce site (textes, images, logos, etc.) est protégé par les
        lois sur la propriété intellectuelle. Toute reproduction sans
        autorisation est interdite.
      </p>

      <h2 className="conditions-subtitle">3. Responsabilités</h2>
      <p className="conditions-paragraph">
        Nous ne sommes pas responsables des dommages directs ou indirects
        pouvant découler de l'utilisation de notre site.
      </p>

      <h2 className="conditions-subtitle">4. Modifications</h2>
      <p className="conditions-paragraph">
        Nous nous réservons le droit de modifier ces conditions à tout moment.
        Toute modification entre en vigueur dès sa publication sur le site.
      </p>

      <h2 className="conditions-subtitle">5. Contact</h2>
      <p className="conditions-paragraph">
        Pour toute question concernant ces conditions, veuillez nous contacter à
        :{" "}
        <a
          href="mailto:potagerdestoilesnumeriques@gmail.com"
          className="conditions-link"
        >
          potagerdestoilesnumeriques@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ConditionsService;
