import styled from "styled-components";

export const ProjectsPageStyled = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1em;

  background-color: #112026;

  color: #ffff;

  .section__filter {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1em;

    width: 100%;

    margin-bottom: 2em;

    @media (min-width: 1220px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin: 0 20em 0 0;
    }
  }

  .box__options {
    display: flex;
    align-items: center;
    gap: 0.8em;
    @media (min-width: 720px) {
      gap: 2em;
    }
  }

  .section__list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1em;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1em;

      width: 100%;
      max-width: 1200px;
      height: 100vh;

      overflow-x: auto;
    }
  }

  footer {
    align-self: center;
    @media (min-width: 720px) {
      font-size: 15px;
    }
  }
`;
