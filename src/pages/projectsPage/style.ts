import styled from "styled-components";

export const ProjectsPageStyled = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1em;

  background-color: #112026;

  color: #ffff;

  animation-duration: 1.5s;

  .section__filter {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1em;

    width: 100%;
    max-width: 1300px;

    margin-top: 3em;

    animation-duration: 2.5s;

    @media (min-width: 1220px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .box__options {
    @media (min-width: 720px) {
      gap: 2em;
    }
  }

  .section__list {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 3em;

      width: 100%;
      height: 100%;

      padding: 2em;
    }
  }

  footer {
    align-self: center;
    @media (min-width: 720px) {
      font-size: 15px;
      margin-top: 10%;
    }
  }
`;
