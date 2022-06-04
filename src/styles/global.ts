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

    --clr-blue-1: hsl(189, 30%, 23%);
    --clr-blue-2: hsl(187, 55%, 39%);
    --clr-blue-3: hsl(184, 36%, 63%);

    --color-1: hsl(216, 30%, 31%);
    --color-2: hsl(217, 60%, 80%);
    --color-3: hsl(24, 69%, 67%);
    --color-4: hsl(45, 94%, 61%);

    --l-color-1: #B0F7E4;
    --l-color-2: #55D9D1;
    --l-color-3: #2CB6DC;
    --l-color-4: #1B84AB;
    --l-color-5: #648686;
    --l-color-6: #54645C;
  }

  body{
    font-family: 'Noto sans', sans-serif;
    background-color: var(--l-color-3);
  }
`;