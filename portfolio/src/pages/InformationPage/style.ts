import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#17282f",
  colorBackGround_secundary: "#24353C",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const InformationsPageStyled = styled.section`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    217deg,
    ${color.colorBackGround_secundary},
    ${color.colorBackGround} 70.71%
  );
`;
