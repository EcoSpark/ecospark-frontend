import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import { Button } from "../button";
import "./pop-up.style.sass";

const PopUp = ({ children }) => {
  return (
    <div id="wrapper">
      <div id="wrapper-logo">
        <EcoSparkWhite />
      </div>

      <div id="wrapper-content">
        <div id="content">
          {children}
          <div id="wrapper-footer">
            <p>Esqueceu a Senha?</p>
            <Button name="Entrar" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
