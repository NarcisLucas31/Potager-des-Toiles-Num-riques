import "./Contacter.css";
import useInView from "../../hooks/useInView";
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
            <button className="btn btn-primary">Démarrer</button>
            <button className="btn btn--secondary">Voir</button>
          </div>
        </div>
        <div className="contact__image" aria-hidden="true" />
      </div>
    </section>
  );
}
