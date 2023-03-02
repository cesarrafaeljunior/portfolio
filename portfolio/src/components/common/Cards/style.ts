import styled from "styled-components";
import { ICardComponent } from "../../../interfaces/components";

export const CardStyled = styled.li<ICardComponent>`
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};
  flex-direction: ${({ flexDirection }) => `${flexDirection}`};

  width: ${({ width }) => `${width}`};
  max-width: ${({ maxWidth }) => `${maxWidth}`};
  height: ${({ height }) => `${height}`};

  align-self: ${({ alignSelf }) => `${alignSelf}`};
  text-align: ${({ textAlign }) => `${textAlign}`};

  position: ${({ position }) => `${position}`};
  top: ${({ top }) => `${top}`};
  right: ${({ right }) => `${right}`};
  left: ${({ left }) => `${left}`};

  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};

  background-color: ${({ backgroundcolor }) => `${backgroundcolor}`};
  border: solid 2px ${({ bordercolor }) => `${bordercolor}`};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};

  color: ${({ color }) => `${color}`};

  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: ${({ fontWeigth }) => `${fontWeigth}`};

  cursor: ${({ cursor }) => `${cursor}`};

  transition: ease 0.5s;

  &:hover {
    border: solid 2px ${({ hover }) => `${hover}`};
  }

  &:focus {
    border: solid 2px ${({ focus }) => `${focus}`};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }

  .banner_card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    position: absolute;
    top: 30px;
    left: 0;

    width: 60%;
    height: 40px;
    padding: 1em;

    z-index: 1;

    background-color: #0e191b;

    border-radius: 0 10px 10px 0;

    transition: ease 0.3s;
  }

  &:hover .banner_card {
    background-color: #314447;
  }

  &:hover img {
    filter: brightness(0.7);
  }

  a {
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 2;
  }
`;
