import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    padding: 10px;

    ${({ isScrolled }) => isScrolled && css`
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
        box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.colorPrimary};
    `}
`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 1300px;
    padding: 20px;
    margin: 0 auto;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        max-width: 100%;
    }
`;