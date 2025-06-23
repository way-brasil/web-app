import { createGlobalStyle, keyframes } from "styled-components";

const slideOutLeft = keyframes`
  to {
    opacity: 0;
    transform: translateX(-120%) scale(0.95);
  }
`;

const slideOutRight = keyframes`
  to {
    opacity: 0;
    transform: translateX(120%) scale(0.95);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(120%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`


  :root {
    /* Cores da imagem */
    --color-white: #FFFFFF;
    --color-dark-gray-1: #333333;
    --color-yellow: #FFD52C;
    --color-black: #000000;
    --color-light-gray-1: #D9D9D9;
    --color-medium-gray: #939192;
    --color-very-dark-gray-1: #020202;
    --color-very-dark-gray-2: #1D1D1F;
    --color-dark-blue-gray: #333237;
    --color-dark-brown-gray: #1F1B1A;
    --color-light-gray-2: #CDCDCD;
    --color-very-dark-gray-3: #19181D;
    --color-success-green: #5E9C76;
    --color-light-green: #BAE0BD;
    --color-red: #F32525;
    /* Cores com opacidade ignorada, usando apenas o hex */
    --color-dark-gray-2: #333333;
    --color-light-gray-3: #D9D9D9;
    --color-bright-yellow: #FDED32;
    --color-blue: #0057ED;
    --color-orange: #ED9E00;
  }
  

 

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif; /* Nunito como padrão */
    background-color: var(--color-very-dark-gray-1);
    color: var(--color-light-gray-3);
    max-height: 100vh;
  }

  /* Defina outras fontes se necessário */
  h1, h2, h3, h4, h5, h6, button {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  h1{
    font-size: 26px;
    font-weight: bold;

  }
  h2{
    font-size: 24px;
    font-weight: bold;
  }

  /* Exemplo de como usar Madimi One */
  .madimi-one-text {
    font-family: 'Madimi One', sans-serif;
  }



  // ===================== EFEITOS =====================

  .slideOutLeft{
    animation: ${slideOutLeft} 0.7s forwards;
  }

  .slideOutRight{
    animation: ${slideOutRight} 0.7s forwards;
  }



  .slideInRight{
    animation: ${slideInRight} 0.7s forwards;
  }

  .slideInLeft{
    animation: ${slideInLeft} 0.7s forwards;
  }



  .fade-out {
    animation: ${fadeOut} 0.4s forwards;
  }
  .fade-in {
    animation: ${fadeIn} 0.4s forwards;
  }

`;

export default GlobalStyle;
