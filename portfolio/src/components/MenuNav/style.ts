import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#17282f",
  colorBackGround_secundary: "#24353C",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

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

  nav {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;
  }
`;
