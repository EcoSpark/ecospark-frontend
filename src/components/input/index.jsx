import * as S from "./styled";

function Input(props) {
  return (
    <S.Wrapper>
      <label htmlFor="inputField">{props.label}</label>
      <input type="text" id="inputField" placeholder={props.placeholder} />
    </S.Wrapper>
  );
}

export default Input;
