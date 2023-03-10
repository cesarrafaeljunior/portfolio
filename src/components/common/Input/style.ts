import styled from "styled-components";

const color = {
  colorBackGround: "#5e7077",
  colorBackGround_secundary: "#24353c",
  colorBorder: "#f7d59a",
};

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 1.5em;

  background-color: ${color.colorBackGround};
  border: solid 2px ${color.colorBorder};
  border-radius: 5px;

  font-size: 0.9em;

  color: #17282f;

  outline: none;

  transition: ease-in-out 0.3s;
  &:focus {
    filter: brightness(1.2);
  }

  &::placeholder {
    color: ${color.colorBackGround_secundary};
  }
`;
