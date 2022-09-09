import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    padding: 10px;
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