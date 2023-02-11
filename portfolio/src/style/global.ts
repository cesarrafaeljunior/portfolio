import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
        width: 100%;
        height: 100%;
        background-color: var(--backgroundBody);
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
    }
    button{
        border: none;
        cursor: pointer;
    }
`;
