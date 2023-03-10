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
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 1em 1em;

  background: linear-gradient(
    217deg,
    ${color.colorBackGround_secundary},
    ${color.colorBackGround} 70.71%
  );

  transition: ease 0.3s;

  .box__aside {
    color: white;

    h2 {
      animation: subtitle 3s forwards;

      @keyframes subtitle {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        30% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .box__informations {
      flex-direction: row;
      align-items: flex-start;
      margin-top: 1.5em;
    }
  }
`;
