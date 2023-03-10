import styled from "styled-components";
import { ICardSkillStyledComponent } from "../../../../interfaces/components";

export const CardSkillsStyled = styled.div<ICardSkillStyledComponent>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  border-radius: 100%;

  background-color: #2c434b;

  cursor: pointer;

  img {
    width: 40px;
    height: 30px;
  }

  &:hover {
    background-color: #445e6a;
  }

  .border__inside {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 90%;
    border: solid 1px white;
    border-radius: 100%;
  }

  &::before {
    content: "";
    display: ${({ display }) => `${display}`};
    width: 20px;
    height: 1px;
    background-color: white;
    position: absolute;
    top: ${({ top }) => `${top}`};
    right: ${({ right }) => `${right}`};
    left: ${({ left }) => `${left}`};
    bottom: ${({ bottom }) => `${bottom}`};
    rotate: ${({ rotate }) => `${rotate}`};
  }

  &:hover .description {
    display: flex;
    color: white;
    right: -10em;
    animation: modalDescription 0.8s forwards;
  }

  @keyframes modalDescription {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
