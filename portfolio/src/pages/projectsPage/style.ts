import styled from "styled-components";

export const ProjectsPageStyled = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em;

  background-color: #112026;

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
`;
