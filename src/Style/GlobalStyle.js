import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset Margins */
    *, *::before, *::after {
        margin: 0;
    };
`;

export default GlobalStyle;
