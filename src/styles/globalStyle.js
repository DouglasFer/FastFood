import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Roboto', sans-serif;
    }
    :root {
        --color-primary: #27ae60;
        --light-green: #93d7af;
        --color-secondary: #eb5757;
        --light-gray: #e0e0e0;
        --gray: #828282;
        --gray500: #f5f5ff
    }

`;
