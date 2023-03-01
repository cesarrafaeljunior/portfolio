import styled from "styled-components";
import { IButtonComponent } from "../../../interfaces/components";

export const ButtonStyled = styled.button<IButtonComponent>`
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};

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

  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${({ hover }) => `${hover}`};
  }

  &:focus {
    background-color: ${({ focus }) => `${focus}`};
  }
`;
