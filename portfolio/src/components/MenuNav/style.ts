import styled from "styled-components";

const color = {
  colorWhite: "#fff",
  colorHover: "#f7d59a",
  colorBackGround: "#112026",
};

export const SectionMenuNavStyled = styled.section<any>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  min-height: 100vh;

  background-color: ${color.colorBackGround};

  transition: ease-in 1s;

  animation: ${({ animationEntrance }) =>
      animationEntrance == "entrance" ? "entrance" : "exit"}
    0.6s;

  nav {
    position: relative;

    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2em;

    padding: 1em;

    color: ${color.colorWhite};

    font-size: 1.2em;

    figure {
      .btn__closeArrow {
        position: absolute;
        top: 1em;
        right: 0.5em;

        width: 35px;
        height: 35px;

        filter: opacity(60%) brightness(1.2);
        transform: rotate(-180deg);

        cursor: pointer;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  @media (min-width: 720px) {
    width: 22%;
    border-right: 1px white solid;
  }

  @keyframes entrance {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes exit {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
