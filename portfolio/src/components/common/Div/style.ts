import styled from "styled-components";
import { IDivComponent } from "../../../interfaces/components";

export const Div = styled.div<IDivComponent>`
  display: ${({ display }) => `${display}`};
  flex-wrap: ${({ wrap }) => `${wrap}`};
  flex-direction: ${({ flexDirection }) => `${flexDirection}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};

  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};

  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;
