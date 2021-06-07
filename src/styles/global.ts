import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #31313A;
        --primary: #6C6AF2;
        --primary-dark: #4F4DD4;

        --light-gray: #F4F4F4;
        --white: #fff;
        --green: #33CC95;
        --red: #DF2424;

        --text-title: #B7B7B7;
        --text-color: #101010;
        --text-body: #999999;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, b {
        font-weight: 600;
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        color: white;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color:rgba(0, 0, 0, 0.5);
        position: fixed;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;

        height: 100%;

        background-color: var(--light-gray);
        display: flex;
        align-items: center;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;
        border: none;

        transition: filter 0.2s ease;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
