import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledSection = styled.section`
    margin-bottom: 30px;

    ${({ backgroundSection }) => backgroundSection && css`
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        padding-top: 30px;
        padding-bottom: 30px;
    `}

    ${({ isScrolled }) => isScrolled && css`
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.colorPrimary};
    `}
`;