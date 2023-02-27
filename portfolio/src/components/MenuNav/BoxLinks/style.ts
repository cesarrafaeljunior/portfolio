import styled from "styled-components";

const color = {
  colorWhite: "#fff",
  colorHover: "#f7d59a",
  colorBackGround: "#112026",
};

export const BoxLinksStyled = styled.div`
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
`;
