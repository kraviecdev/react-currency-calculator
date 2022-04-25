import { createGlobalStyle } from "styled-components";
import background from "./currency-background.png"

export const GlobalStyle = createGlobalStyle`
        *, ::after, ::before {
            box-sizing: inherit;
        }

        #root {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        body {
            color: ${({ theme }) => theme.colors.fontColor};
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: url("${background}");
            background-repeat: no-repeat;
            background-size: cover;
            box-sizing: border-box; 
}
`;