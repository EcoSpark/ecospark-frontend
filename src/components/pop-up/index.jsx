import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import Input from "../input";
import * as S from "./styled";

export const PopUp = () => {
  return (
    <S.Wrapper>
      <S.WrapperLogo>
        <EcoSparkWhite />
      </S.WrapperLogo>

      <S.WrapperContent>
        <div>
          <p>Olá,</p>
          <p>Informe seu usuário e senha.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Input label={"Login"} placeholder={"Digite seu login"} />
          <Input label={"Senha"} placeholder={"Digite sua Senha"} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
          <p>Esqueceu a Senha?</p>
          <button>Entrar</button>
        </div>
      </S.WrapperContent>
    </S.Wrapper>
  );
};
