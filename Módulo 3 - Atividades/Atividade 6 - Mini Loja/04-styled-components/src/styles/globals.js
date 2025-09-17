import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.2s, color 0.2s;
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
    border-radius: 8px;
  }
`;
