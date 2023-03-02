import styled from "styled-components";

export const SocialMediaStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  width: 100%;
  height: 100%;
  margin: 2em 0;

  h2 {
    color: #ffffff;
  }

  h3 {
    width: max-content;

    color: #ffffff;

    cursor: pointer;

    filter: brightness(0.8);

    &:hover {
      filter: brightness(1.2);
      border-bottom: solid 1px #f7d59a;
    }
  }

  .box__cardIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;

    margin-top: 1.5em;
  }

  .box__contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    width: 100%;
    height: 100%;

    margin-top: 1em;
  }
`;
