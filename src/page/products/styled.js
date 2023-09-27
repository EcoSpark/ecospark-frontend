import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #173008;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ListProductsStyled = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 20px;
  padding: 20px;
  background-color: #e6e8e6;
  overflow: hidden;
`;

export const ImageStyled = styled.img`
  width: 95px;
  height: 150px;
  border-radius: 5px;
`;

export const ListProductsContentStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Footer = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
