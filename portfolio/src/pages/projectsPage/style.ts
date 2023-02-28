import styled from "styled-components";

export const ProjectsPageStyled = styled.section`
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
    gap: 1em;

    width: 100%;

    margin-bottom: 2em;
  }

  .box__options {
    display: flex;
    align-items: center;
    gap: 0.8em;
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
      height: 100vh;

      overflow-x: auto;
    }
  }
`;
