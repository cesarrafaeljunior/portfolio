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
