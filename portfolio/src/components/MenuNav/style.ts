import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#16272e",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const SectionMenuNavStyled = styled.section<any>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;
  padding: 2.5em 0 0 0;

  background-color: ${color.colorBackGround};

  border-bottom: solid 2px ${color.colorBorder};

  nav {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5em;

    padding: 1em;

    font-size: 1.2em;
  }
`;
