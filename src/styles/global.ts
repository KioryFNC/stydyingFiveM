import { createGlobalStyle } from "styled-components";
import background from "../assets/Background.png"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #282828;
    }
    
    ::-webkit-scrollbar-thumb {
      background: radial-gradient(50% 50% at 50% 50%, #8237EC 0%, #6B25CE 100%);
      border-radius: 10px; 
    }
  }
  
  
  @font-face {
    font-family: PuristaBold;
    src: url('/fonts/PuristaTRIAL-Bold.woff');
  }

  @font-face {
    font-family: PuristaSemiBold;
    src: url('/fonts/PuristaTRIAL-SemiBold.woff');
  }

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url(${background}) no-repeat center center;
    background-size: 100% 100%;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  li {
    list-style: none;
    font-family: 'Purista TRIAL', sans-serif;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg, button {
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

`