import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Muli', sans-serif;
    padding: 0px 0px 0px 0px;

    @media screen and (max-width: 800px){
        padding: 0px 0px 0px 0px;
    }


}
a {
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}


`;