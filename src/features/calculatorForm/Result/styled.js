import styled from "styled-components";
import { css } from "styled-components";

export const StyledResultWrapper = styled.div`
    width: 100%;
    grid-gap: 3px;
    max-height: 0;
    overflow: hidden;

    @keyframes box-drop {
        from {
            max-height: 0;
        }
        to {
            max-height: 300px;
        }
    }

    ${({ active }) => active && css`
        animation: 2s box-drop forwards;
    `}
`;

export const StyledResult = styled.p`
    margin: 2px;
    font-size: 20px;

    ${({ additionalInfo }) => additionalInfo && css`
        font-size: 12px;
    `}
`;