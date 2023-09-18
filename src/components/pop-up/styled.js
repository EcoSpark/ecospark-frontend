import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  border-radius: 40px;
  overflow: hidden;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  height: 100%;
  background-color: #173008;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40%;
  flex: 0 0 50%;
  background-color: #fff;
  gap: 40px;
`;
