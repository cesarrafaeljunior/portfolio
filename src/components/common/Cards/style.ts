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

  overflow: hidden;
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
    flex-direction: column;
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

  .box__options {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1em;
    text-align: center;

    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 60%;
    padding: 1em;

    z-index: 2;

    opacity: 0;

    background-color: #0e191b;

    border-radius: 10px 10px 0 0;

    transition: ease 1s;

    font-size: 0.8em;

    overflow: hidden;
  }

  &:hover .box__options {
    animation: openOptions 0.3s forwards;

    @keyframes openOptions {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 60%;
        background-color: #314447;
      }
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-size: 1.2em;

    a {
      width: 100%;
      height: 100%;
    }

    .icon {
      width: 50px;
      height: 50px;

      padding: 0.4em;

      border: solid 1px white;
      border-radius: 35%;

      transition: ease 0.5s;
    }

    &:hover .icon {
      transform: scale(1.1);
      background-color: #0e191b;
    }
  }

  .box__github {
    position: relative;

    ::after {
      text-align: center;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      bottom: -4.5em;
      right: 0;
    }

    &:hover::after {
      content: "Repositório";
      animation: textInformation 1s forwards;
    }
  }

  .box__display {
    position: relative;

    ::after {
      text-align: center;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      bottom: -4.5em;
      right: 0;
      font-size: 1em;
    }

    &:hover::after {
      content: "${({ text }) => text}";
      animation: textInformation 1s forwards;
    }
  }

  .box__details {
    position: relative;

    ::after {
      text-align: center;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      bottom: -4.5em;
      right: 0;
    }

    &:hover::after {
      content: "Detalhes";
      animation: textInformation 1s forwards;
    }
  }

  @keyframes textInformation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
