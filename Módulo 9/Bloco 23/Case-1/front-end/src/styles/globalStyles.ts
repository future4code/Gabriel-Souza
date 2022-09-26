import { createGlobalStyle, keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

export const GlobalStyles =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    animation: ${gradient} 15s ease infinite;
    background: linear-gradient(-1000deg, var( --background-gradient-1) 5%, var( --background-gradient-2) 50%, var( --background-gradient-3) 100%);
    background-size: 300% 300%;
  }

  button {
    cursor: pointer;
    font-size: clamp(.550rem, .800vw, .700rem);
  }

  input {
    transition: box-shadow 300ms ease-out;
    :focus {
      box-shadow: var(--input-focus-color) 0px 0px 5px 5px;
    }
    ::placeholder {
      padding-left: 5px;
    }
  }

  ul::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ul::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  :root{
    //* Fonts
    --font-lato: lato, sans-serif;
    --font-montserrat: montserrat, sans-serif;
    //* ============================================

    //* Gerais
    --errors-message-color: #ff0000;

      //* Colors Gradient
      --background-gradient-1: #0DAB77 ;
      --background-gradient-2: #2DA77A;
      --background-gradient-3: #8BDFC3;
      //* ===========================================

    //* Page Login
    --text-color: #1F1F1F;
    --input-focus-color: #7FFFD4;
    --button-background-color: #FFFF;
    --button-background-hover: #7FFFD4;
    //* ===========================================

    //* Page Admin
    //* Header
    --header-background-color: #FFFF;
    --header-span-color: #8BDFC3;
    --background-hover-div-buttons: #7FFFD4;
    //* Sub Header
    --sub-button-background-color:  #FFFF;
    --sub-button-background-hover:  #ff0000;
    //* ===========================================

    //* Page Products
    //* Li Card
    --pro-background-color: #F0F0F0;
    --pro-box-shadow-colors-1: rgba(0, 0, 0, 0.19);
    --pro-box-shadow-colors-2: rgba(0, 0, 0, 0.23);
    --pro-span-text-color: #0DAB77;
    //* ============================================

    //* Page Purchases
    //* Li Card
    --pur-background-color: #F0F0F0;
    --pur-box-shadow-colors-1: rgba(0, 0, 0, 0.19);
    --pur-box-shadow-colors-2: rgba(0, 0, 0, 0.23);
    --pur-span-text-color: #0DAB77;
    //* Button Layout 1
    --pur-l1-button-hover: #ff0000;
    --pur-l1-text-color-button: #FFF;
    //* Button Layout 2
    --pur-l2-button-hover-nth-1:  #4FD1C5;
    --pur-l2-button-hover-nth-2:  #ff0000;
    --pur-l2-text-color-button: #FFF;
    //* ===========================================

    //* Button CTA
    --text-button: #FFFFFF;
    --background-button: #0DAB77;
    --background-button-hover: #2DA77A;
  }
`;