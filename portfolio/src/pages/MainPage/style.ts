import styled from "styled-components";

export const MainPageStyled = styled.main`
  position: relative;

  width: 100%;
  min-height: 100vh;
  background-color: #112026;

  .box__menu {
    position: absolute;
    top: 1em;
    right: 1em;
    z-index: 3;
    .menu_hamb {
      width: 40px;
      height: 40px;
      color: #f7d59a;
    }
  }

  .menu__hide {
    display: none;
  }

  @media (min-width: 768px) {
    .box__menu {
      display: none;
    }
    .menu__hide {
      display: flex;
    }
  }
`;
