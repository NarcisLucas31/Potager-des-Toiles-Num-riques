import AboutVision from "../about/AboutVision";
import EcoPratiques from "../ecopratiques/EcoPratiques";
import "./PageWrapperEco.css";

export default function PageWrapperEco() {
  return (
    <div className="page-wrapper-eco">
      <div className="eco-background">
        <EcoPratiques />
        <AboutVision />
      </div>
    </div>
  );
}
