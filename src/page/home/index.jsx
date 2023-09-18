import { useNavigate } from "react-router-dom";
import { EcologyIcon } from "../../assets/icons/ecology.icon";
import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import * as S from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <S.WrapperStyled>
      <div
        style={{
          backgroundColor: "black",
          height: "900px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <EcoSparkWhite />
          <S.ButtonStyled onClick={() => navigate("/login")}>
            LOGIN
          </S.ButtonStyled>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "185px 70px",
            color: "white",
            gap: 10,
          }}
        >
          <h1>Procurando fortalecer o ecossistema?</h1>
          <h3>
            Descubra como nossa solução é a ponte para cumprir esse compromisso.
          </h3>
          <div
            style={{
              marginTop: "7px",
            }}
          >
            <S.ButtonStyled onClick={() => navigate("/login")}>
              Tenho Interesse
            </S.ButtonStyled>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: 100,
          padding: "80px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "40px",
            color: "black",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <h1>
              Existem muitas oportunidades depois que o resíduo sai das suas
              mãos!
            </h1>
            <h3>
              A EcoSpark é uma ação estruturante, que utiliza o arranjo de
              pagamento e materiais recicláveis para estimular a economia
              circular, logística reversa, educação ambiental e financeira. Tudo
              isso com muita inclusão social e possibilidade de gerar uma renda
              extra.
            </h3>
          </div>

          <EcologyIcon />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
      >
        <div>
          <EcoSparkWhite />
          <h4>Desperte a chama da Sustentabilidade</h4>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 50,
          }}
        >
          <p onClick={() => navigate("/login")}>Login</p>
          <p>ESG</p>
          <p>ecospark@escospark.com.br</p>
        </div>
      </div>
    </S.WrapperStyled>
  );
};
