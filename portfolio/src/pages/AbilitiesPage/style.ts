import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#17282f",
  colorBackGround_secundary: "#24353C",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};

export const AbilitiesPageStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20em;

  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 2em 2em 1em 2em;

  border: solid 1px red;

  background: linear-gradient(
    217deg,
    ${color.colorBackGround_secundary},
    ${color.colorBackGround} 70.71%
  );
`;
