import styled from "styled-components";

export const CardSkillsStyled = styled.div`
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
`;
