import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
      color: ${({ theme }) => theme.colors.fontRegular};
      
   }
  
  h1, h2, h3, h4, h5, h6 {
   
    color: ${({ theme }) => theme.colors.fontDark};
  }
`

export default GlobalStyle
