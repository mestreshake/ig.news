import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

:root{
  --white: #FFFFFF;
  --gray-300: #A8A8B3;
  --gray-800: #29292e;
  --gray-900: #121214;
  --gray-850: #1F2729;
  --cyan-500: #61DAFB;
  --yellow-500: #EBA417;
}

@media(max-width:1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width:720px){
  html{
    font-size: 87.5%;
  }
}

body{
  background: var(--gray-900);
  color: var(--white);
}

  body, input, textarea, select, button{
   font: 400 1rem "Roboto", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;
