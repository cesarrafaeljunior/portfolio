import styled from "styled-components";

const color = {
  colorBackGround: "#5e7077",
  colorBackGround_secundary: "#9BA7AC",
  colorBorder: "#f7d59a",
};

export const ContactModalStyled = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  border: solid 1px red;

  background-color: rgba(0, 0, 0, 60%);

  div {
    background-color: #2d3c42;
    .box__menu_contact {
      position: absolute;
      top: 0.4em;
      right: 0.3em;
      z-index: 50000;

      .menu_hamb {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: ease 0.3s;

        border: ${color.colorBorder};
        border-radius: 50%;
        background-color: ${color.colorBorder};
        color: black;
        padding: 0.1em;
        :hover {
          transform: scale(1.1);
          filter: brightness(1.1);
        }
      }
    }
  }

  input {
    color: ${color.colorBorder};
    &::placeholder {
      color: ${color.colorBackGround_secundary};
    }
  }

  .text__area_contact {
    min-height: 200px;
    width: 100%;

    padding: 1.5em;

    color: ${color.colorBorder};
    border: solid 2px #f7d59a;
    border-radius: 8px;
    background-color: #5e7077;

    font-size: 0.9em;

    outline: none;

    transition: ease-in-out 0.3s;

    &:focus {
      filter: brightness(1.2);
    }

    &::placeholder {
      color: ${color.colorBackGround_secundary};
    }
  }
`;
