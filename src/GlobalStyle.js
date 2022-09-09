import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        body {
            min-height: 100vh;
            color: ${({ theme }) => theme.colors.colorPrimary};
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
            font-size: 20px;

            @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
                font-size: 16px;
            }
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }
`;