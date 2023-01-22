import { createGlobalStyle } from "styled-components"
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFFAE6;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #000;
    margin: 0;
  }
  img {
    max-width: 100%;
}
`

export default GlobalStyles
