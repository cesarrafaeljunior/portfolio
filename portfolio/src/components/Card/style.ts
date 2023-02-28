import styled from "styled-components";

export const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 230px;
  height: 300px;

  padding: 1em;

  border: solid 2px #877b67;
  background-color: #44575f;

  &:hover {
    border: solid 2px #f7d59a;
    background-color: #6c828b;
  }
  &:hover img {
    filter: brightness(2);
  }

  img {
    width: 100%;
    height: 100%;
    padding: 1em;
    object-fit: cover;
    cursor: pointer;
  }

  .section__description {
    width: 100%;
    height: 90%;
    padding: 1em 0.5em;
    font-size: 12px;
    line-height: 2;
    max-height: 200px;
    text-overflow: ellipsis;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
