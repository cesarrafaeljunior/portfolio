import styled from "styled-components";

const color = {
  borderColor: "#ffffff",
  hoverBorder: "#F7D59A",
};

export const CardIconsStyled = styled.a`
  img {
    width: 40px;
    height: 40px;

    background-color: white;
    border-radius: 100%;
    border: solid 1px ${color.borderColor};

    transition: ease-in 0.2s;
  }

  &:hover img {
    background-color: ${color.hoverBorder};
    border: solid 1px ${color.hoverBorder};
    transform: scale(1.1);
  }
`;
