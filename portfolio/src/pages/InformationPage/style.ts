import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#17282f",
  colorBackGround_secundary: "#24353C",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const InformationsPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 95px);
  padding: 2em 2em 1em 2em;

  background: linear-gradient(
    217deg,
    ${color.colorBackGround_secundary},
    ${color.colorBackGround} 70.71%
  );

  .box__informations {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    gap: 10em;

    height: calc(100vh - 95px);
  }
`;
