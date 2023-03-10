import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#17282f",
  colorBackGround_secundary: "#24353C",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  background: linear-gradient(
      217deg,
      ${color.colorBackGround},
      ${color.colorBackGround_secundary} 70.71%
    ),
    linear-gradient(
      127deg,
      ${color.colorBackGround},
      ${color.colorBackGround_secundary} 70.71%
    ),
    linear-gradient(
      336deg,
      ${color.colorBackGround_secundary},
      ${color.colorBackGround} 70.71%
    );

  border-bottom: solid 2px ${color.colorBorder};

  animation: openMenu 1s forwards;

  nav {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
  }

  @keyframes openMenu {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    position: relative;

    height: 80px;

    nav {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;
