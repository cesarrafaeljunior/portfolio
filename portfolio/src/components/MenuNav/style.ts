import styled from "styled-components";

const backGround = "#112026";
const color = "#fff";

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

    color: ${color};

    font-size: 1.2em;

    .lineNav {
      width: 70%;
      height: 2.5px;

      margin-top: -2.8em;

      background-color: ${color};
    }
    figure {
      .btn__closeArrow {
        position: absolute;
        top: 1em;
        right: 0.5em;

        width: 35px;
        height: 35px;

        filter: opacity(60%) brightness(1.2);
        transform: rotate(-180deg);
      }
    }
  }

  background-color: ${backGround};
`;
