import Input from "../../components/input";
import PopUp from "../../components/pop-up/index";
import "./login.style.sass";

export const LoginPage = () => {
  return (
    <main id="wrapper-login-page">
      <PopUp>
        <div>
          <p>Olá,</p>
          <p>Informe seu usuário e senha.</p>
        </div>

        <div id="wrapper-login-inputs">
          <Input placeholder={"Digite seu login"} />
          <Input placeholder={"Digite sua Senha"} />
        </div>
      </PopUp>
    </main>
  );
};
