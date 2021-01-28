import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    /* font-family: 'Muli', sans-serif; */
    @font-face {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/mulish-v3-vietnamese_latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('./fonts/mulish-v3-vietnamese_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('./fonts/mulish-v3-vietnamese_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('./fonts/mulish-v3-vietnamese_latin-regular.woff') format('woff'), /* Modern Browsers */
            url('./fonts/mulish-v3-vietnamese_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('./fonts/mulish-v3-vietnamese_latin-regular.svg#Mulish') format('svg'); /* Legacy iOS */
    }
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