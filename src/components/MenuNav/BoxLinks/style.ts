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
  justify-content: center;

  width: 40%;

  padding-bottom: 0.5em;

  border: solid 1px transparent;

  transition: ease 0.3s;

  cursor: pointer;

  font-size: 17px;

  &:hover {
    border-bottom: solid 1px white;
    filter: brightness(1);
  }

  .blur__box {
    transition: ease 0.3s;
  }

  &:hover .blur__box {
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: ${color.colorHover};
    filter: blur(1.8em);
  }

  .text__link {
    color: ${color.colorFont};
  }

  &:hover .text__link {
    color: ${color.colorHover};
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${color.colorHover};
    transition: 0.3s linear;
  }

  &:hover::after {
    background-color: ${color.colorHover};
    width: 100%;
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

  @media (min-width: 768px) {
    width: 10%;
  }
`;
