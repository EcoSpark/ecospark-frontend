import * as S from "./styled";
import PopUp from "../../components/pop-up/index";
import Input from "../../components/input";

export const LoginPage = () => {
  return (
    <S.WrapperStyled>
      <PopUp>
        <div>
          <p>Olá,</p>
          <p>Informe seu usuário e senha.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Input placeholder={"Digite seu login"} />
          <Input placeholder={"Digite sua Senha"} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Esqueceu a Senha?</p>
          <button>Entrar</button>
        </div>
      </PopUp>
    </S.WrapperStyled>
  );
};
