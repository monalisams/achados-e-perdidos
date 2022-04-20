import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --red: #C60504;
    --blue-dark: #1D2D67 ;
    --blue: #1B3595 ;
    --green: #12A454;

    --text-title: #363F5F; 
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1080px){
        font-size: 93.75% ;
    }
    @media (max-width: 720px){
        font-size: 87.5% ;
    }
}

body{
    background: var(--background) ;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
    
}

.content-size{
    max-width: 1120px;
    margin: 0 ;
    padding: 1rem 1rem ;
    margin-left: auto ;
    margin-right: auto ;
}
.error{
    color: red ;
}

    
`;
