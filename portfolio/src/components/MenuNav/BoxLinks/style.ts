import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#16272e",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};
export const BoxLinksStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  width: 10%;
  height: 40px;

  .text {
    color: ${color.colorFont};
  }

  &:hover .blur {
    width: 100%;
    height: 100%;
    background-color: ${color.colorHover};
    filter: blur(1.5em) brightness(10);
  }

  &:hover .text {
    color: ${color.colorHover};
  }
`;
