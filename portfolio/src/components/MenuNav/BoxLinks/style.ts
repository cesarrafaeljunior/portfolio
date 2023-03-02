import styled from "styled-components";

const color = {
  colorHover: "#CFD8DE",
  colorBackGround: "#16272e",
  colorBorder: "#6c828b",
  colorFont: "#586973",
};
export const BoxLinksStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 5%;
  height: 100%;

  padding-bottom: 0.5em;

  border: solid 1px transparent;

  transition: ease 0.3s;

  cursor: pointer;

  font-size: 17px;

  .blur__box {
    width: 50%;
    transition: ease 0.3s;
  }

  .text__link {
    color: ${color.colorFont};
  }

  &:hover {
    border-bottom: solid 1px white;
    filter: brightness(1);
  }

  &:hover .blur__box {
    height: 35%;
    position: absolute;
    background-color: ${color.colorHover};
    filter: blur(2em);
  }

  &:hover .text__link {
    color: ${color.colorHover};
  }

  a {
    position: static;
    z-index: 2;

    width: 100%;
    text-align: center;
  }

  a:focus {
    color: ${color.colorHover};
  }
`;
