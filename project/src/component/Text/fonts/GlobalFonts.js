import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/open-sans-v26-latin/open-sans-v26-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./fonts/open-sans-v26-latin/open-sans-v26-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/open-sans-v26-latin/open-sans-v26-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/poppins-v15-latin/poppins-v15-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./fonts/poppins-v15-latin/poppins-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/poppins-v15-latin/poppins-v15-latin-500.svg#Poppins') format('svg'); /* Legacy iOS */
}
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/poppins-v15-latin/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./fonts/poppins-v15-latin/poppins-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/poppins-v15-latin/poppins-v15-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
}
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/poppins-v15-latin/poppins-v15-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('./fonts/poppins-v15-latin/poppins-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./fonts/poppins-v15-latin/poppins-v15-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
}

`;