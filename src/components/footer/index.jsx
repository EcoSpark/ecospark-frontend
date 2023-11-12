import { useNavigate } from "react-router-dom";
import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import "./footer.style.sass";
import { Button } from "../button";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div id="image-container">
        <EcoSparkWhite />
        <span>Desperte a chama da Sustentabilidade</span>
      </div>

      <section id="section-social-media">
        <i className="bi bi-instagram"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-facebook"></i>
        <Button name="Login" color="light" onClick={() => navigate("/login")} />
      </section>
    </footer>
  );
};
