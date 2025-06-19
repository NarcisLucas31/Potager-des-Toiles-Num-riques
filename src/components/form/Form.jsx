import React, { useState } from "react";
import "./Form.css";
import { Mail } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    need: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("Spam détecté.");
      return;
    }

    if (!formData.consent) {
      setStatus("Veuillez accepter la politique de confidentialité.");
      return;
    }

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      need: formData.need,
      message: formData.message || "Aucun message fourni.",
    };

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          need: "",
          message: "",
          consent: false,
          honeypot: "",
        });
      } else {
        setStatus(result.error || "Erreur lors de l’envoi.");
      }
    } catch (error) {
      setStatus("Erreur réseau.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="contact-header">
        <Mail size={28} strokeWidth={2} />
        <h2>Contactez-nous</h2>
      </div>

      <p className="contact-intro">
        Vous avez une idée ou un projet en tête&nbsp;?{" "}
        <strong>Nous sommes là pour vous aider à le concrétiser.</strong>
        <br />
        N'hésitez pas à nous laisser un message, nous répondons rapidement et
        avec attention.
      </p>

      <p className="required-note">* Champs obligatoires</p>

      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="Prénom *"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom *"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Adresse e-mail *"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <select
        name="need"
        value={formData.need}
        onChange={handleChange}
        required
      >
        <option value="">-- Quel est votre besoin ? * --</option>
        <option value="creation">Création de site</option>
        <option value="hebergement">Hébergement</option>
        <option value="les-deux">Les deux</option>
      </select>

      <textarea
        name="message"
        placeholder="Votre message (optionnel)"
        rows="5"
        value={formData.message}
        onChange={handleChange}
      />

      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="honeypot"
        autoComplete="off"
        tabIndex="-1"
      />

      <div className="consent-box">
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          J’accepte que mes données soient utilisées pour nous recontacter. *
        </label>
      </div>

      <button type="submit">Envoyer</button>

      {status && <p className="status-message">{status}</p>}

      <p className="trust-badge">📩 Réponse garantie sous 24h</p>
    </form>
  );
};

export default Form;
