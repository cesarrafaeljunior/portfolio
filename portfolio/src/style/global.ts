import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
        width: 100vw;
        height: 100vh;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        &::-webkit-scrollbar {
        width: 5px;
        height: 3px; /* A altura só é vista quando a rolagem é horizontal */
      }
        &::-webkit-scrollbar-thumb {
        background-color: #f7d59a;
      }
    }
    ul,ol{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
    button{
        border: none;
        cursor: pointer;
    }
`;
