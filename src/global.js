// global.js
const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    transition: all 200ms;
  }
`;
