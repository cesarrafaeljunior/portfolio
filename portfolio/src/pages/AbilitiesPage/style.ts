import styled from "styled-components";
import Back from "../../assets/img/bg/alexios_1.png";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#1d2d35",
  colorBackGround_secundary: "#070D10",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const AbilitiesPageStyled = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 2em 2em 1em 2em;

  &::after {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    position: fixed;
    z-index: 0;
    background: url("assets/odssey_bg.jpg") no-repeat center fixed;
    background-size: 80%;
    background-blend-mode: overlay;
  }

  background: linear-gradient(
    217deg,
    ${color.colorBackGround_secundary},
    ${color.colorBackGround} 70.71%
  );
  background-color: #1d2d35;
`;
