import { useNavigate } from "react-router-dom";
import ecologyWallpaper from "../../assets/background/ecology.png";
import { EcologyIcon } from "../../assets/icons/ecology.icon";
import { MachineImage } from "../../assets/icons/machine.icon";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import "./home.style.sass";
import { Footer } from "../../components/footer";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="section-one">
        <Header />

        <div id="section-one-title">
          <h1>Procurando fortalecer o ecossistema?</h1>
          <h6>
            Descubra como nossa solução é a ponte para cumprir esse compromisso.
          </h6>

          <Button name="Fazer Login" onClick={() => navigate("/login")} />
        </div>

        <img
          id="background-image"
          src={ecologyWallpaper}
          alt="Ecology Wallpaper"
        />
      </section>

      <section id="section-two">
        <div id="section-two-title">
          <h2>
            Existem muitas oportunidades depois que o resíduo sai das suas mãos!
          </h2>
          <h6>
            Somos uma ação estruturante, que utiliza o arranjo de pagamento e
            materiais recicláveis para estimular a economia circular. Tudo isso
            com muita inclusão social e possibilidade de gerar uma renda extra.
          </h6>
        </div>

        <div className="ecology-image">
          <EcologyIcon />
        </div>
      </section>

      <section id="section-tree">
        <div className="machine-image">
          <MachineImage />
        </div>

        <div id="section-tree-title">
          <h2>
            Existem muitas oportunidades depois que o resíduo sai das suas mãos!
          </h2>
          <h6>
            Somos uma ação estruturante, que utiliza o arranjo de pagamento e
            materiais recicláveis para estimular a economia circular. Tudo isso
            com muita inclusão social e possibilidade de gerar uma renda extra.
          </h6>
        </div>
      </section>

      <Footer />
    </>
  );
};
