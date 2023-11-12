import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import "./pop-up.style.sass";

const PopUp = ({ children }) => {
  return (
    <div id="wrapper">
      <div id="wrapper-logo">
        <EcoSparkWhite />
      </div>

      <div id="wrapper-content">
        <div id="content">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
