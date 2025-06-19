import Text from "../text/Text";
import Presentation from "../presentation/Presentation";
import Contacter from "../contacter/Contacter";
import "./PageWrapper.css";

export default function PageWrapper() {
  return (
    <div className="page-wrapper">
      <div className="background-overlay" />
      <div className="page-content">
        <Text />
        <Presentation />
        <Contacter />
      </div>
    </div>
  );
}
