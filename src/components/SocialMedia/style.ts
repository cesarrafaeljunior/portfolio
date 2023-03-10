import styled from "styled-components";
import "animate.css";

export const SocialMediaStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  width: 100%;
  height: 100%;
  margin: 2em 0;
  padding: 0 1em;

  animation-duration: 1.3s;

  h2 {
    font-size: 2em;
    color: #ffffff;
  }

  h3 {
    width: max-content;

    color: #ffffff;

    cursor: pointer;

    filter: brightness(0.8);

    border: solid 1px transparent;

    &:hover {
      filter: brightness(1.2);
      border-bottom: solid 1px #f7d59a;
    }
  }

  .box__cardIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }

  .box__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    width: 100%;
    max-width: 500px;
    height: 100%;

    margin-top: 1em;
  }

  @media (min-width: 768px) {
    .box__contact {
      max-width: none;
      width: 100%;
      flex-direction: row;
    }
  }
`;
