import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        padding: 20px 0;
    }
`;