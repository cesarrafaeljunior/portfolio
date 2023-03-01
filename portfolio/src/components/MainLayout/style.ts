import styled from "styled-components";

export const MainLayoutStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #112026;

  .btn__openArrow {
    position: absolute;
    top: 1em;
    left: 0.5em;

    width: 35px;
    height: 35px;

    filter: opacity(60%) brightness(1.2);

    transform: scaleY(-1);

    cursor: pointer;

    &:hover {
      filter: brightness(1.5);
    }
  }
`;
