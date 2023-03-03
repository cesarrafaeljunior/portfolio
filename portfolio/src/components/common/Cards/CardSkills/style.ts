import styled from "styled-components";
import { ICardSkillsComponent } from "../../../../interfaces/components";

export const CardSkillsStyled = styled.div<ICardSkillsComponent>`
  position: ${({ position }) => `${position}`};
  top: ${({ top }) => `${top}`};
  bottom: ${({ bottom }) => `${bottom}`};
  right: ${({ right }) => `${right}`};
  left: ${({ left }) => `${left}`};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  border: solid 1px white;

  border-radius: 50%;
`;
