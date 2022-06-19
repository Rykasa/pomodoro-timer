import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --primay-color-1: hsl(353, 48%, 38%);
    --primary-color-2: hsl(353, 48%, 48%);
    --primary-color-3: hsl(353, 79%, 21%);
    --primaty-color-4: hsl(353, 78%, 16%);

    --color-1: hsl(216, 30%, 31%);
    --color-2: hsl(217, 60%, 80%);
    --color-3: hsl(24, 69%, 67%);
    --color-4: hsl(45, 94%, 61%);
  }

  body{
    font-family: 'Noto sans', sans-serif;
    /* background-color: var(--primary-color-2); */
    background-color: aliceblue;
    min-height: 100vh;
  }
`;