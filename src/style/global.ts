import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        &::-webkit-scrollbar {
        width: 5px;
        height: 3px;
      }
        &::-webkit-scrollbar-thumb {
        background-color: #f7d59a;
      }
    }
    ul,ol,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        color: white;
    }
    button{
        border: none;
        cursor: pointer;
    }
`;
