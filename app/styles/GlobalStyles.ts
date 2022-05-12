import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
  
  :root {
    --primary: #8567E6; 
    --primary-light: rgba(168, 131, 255, 0.5);

    --background: #121214;
    --background-light: #202024;
    --background-extra-light: #28272F;

    --shape: #E1E1E6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    min-width: 100vw;

    background-color: var(--background);
  }

  *, input, textarea, button {
    font-weight: 500;
    font-family: "Roboto", sans-serif;

    color: var(--shape);
  }

  button {
    cursor: pointer;
  }
`;