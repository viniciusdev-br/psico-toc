import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFF;
        --textColor: #7D9B9B;
        --yellowCard: #FFF9DC;
        --yellowStatistic: #FFF3B8;
        --blue: #1B74E4;
        --lightBlue: #D1FFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, p {
        font-family: 'Poppins', sans-serif;
        background-color: #1B74E4;
    }
`