import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import "./header.style.sass";

export const Header = ({ children }) => {
  return (
    <header>
      <EcoSparkWhite />

      <div>{children}</div>
    </header>
  );
};
