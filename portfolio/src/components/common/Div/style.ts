import styled from "styled-components";
import { IDivComponent } from "../../../interfaces/components";

export const Div = styled.div<IDivComponent>`
  display: ${({ display }) => `${display}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  gap: ${({ gap }) => `${gap}`};

  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;
