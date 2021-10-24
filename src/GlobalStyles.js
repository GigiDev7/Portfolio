import { createGlobalStyle } from 'styled-components';
import image from './img/img.svg';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
       background-image: url(${image});
        background-position: center;
        background-size: cover;
        font-family: 'Lato', sans-serif;
        
    }
`;

export default GlobalStyle;
