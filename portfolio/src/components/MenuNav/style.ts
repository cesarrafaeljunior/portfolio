import styled from "styled-components";

const color = {
  colorWhite: "#fff",
  colorHover: "#f7d59a",
  colorBackGround: "#112026",
};

export const SectionMenuNavStyled = styled.section`
  width: 100%;
  height: 100%;

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

    .box__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;

      width: 100%;
      height: 100%;

      .lineNav {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 70%;
        height: 3.2px;

        background-color: ${color.colorWhite};

        transition: ease-in-out 0.3s;

        .lineNavAnimation {
          width: 100%;
          height: 2.5px;
        }
      }
      a {
        transition: ease-in-out 0.3s;
      }
      a:hover {
        color: ${color.colorHover};
      }
      a:hover ~ .lineNav > .lineNavAnimation {
        background-color: ${color.colorHover};
        animation: lineWidth 0.4s forwards;
      }
    }
  }

  @keyframes lineWidth {
    0% {
      width: 0%;
    }
    20% {
      width: 10%;
    }
    30% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }

  background-color: ${color.colorBackGround};
`;
