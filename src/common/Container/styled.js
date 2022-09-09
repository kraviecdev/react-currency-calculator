import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-rows: .3fr 1.3fr .5fr;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-template-rows: .2fr 1.6fr .5fr;
        grid-gap: 10px;
    }
`;