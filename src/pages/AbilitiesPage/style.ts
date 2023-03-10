import styled from "styled-components";
import Back from "../../assets/img/bg/alexios_1.png";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#1d2d35",
  colorBackGround_secundary: "#070D10",
  colorBorder: "#6c828b",
  colorFont: "#586973",
  colorFontSecundary: "#F7D59A",
  colorDefault: "#ffffff",
};

export const AbilitiesPageStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

  .ability__points {
    position: absolute;
    top: 1em;
    right: 3em;

    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    img {
      width: 8em;
      height: 8em;
    }
    .text__points {
      color: ${color.colorDefault};
      font-size: 1.2em;
    }
    .quantity__points {
      color: ${color.colorFontSecundary};
      font-size: 2em;
    }
  }
`;
