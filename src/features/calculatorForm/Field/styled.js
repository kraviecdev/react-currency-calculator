import styled from "styled-components";

export const StyledLabel = styled.label`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
    }
`;

export const StyledLabelText = styled.span`
    font-weight: bold;
    padding: 10px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
    }
`;

export const StyledFormField = styled.input`
    text-align: center;
    border: 2px solid;
    padding: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.backgroundAddPrimary};
    color: ${({ theme }) => theme.colors.colorSeconadry};
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.colorSeconadry};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
    }

    &:invalid {
        background: ${({ theme }) => theme.colors.backgroundAddSecondary};
    }
    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.backgroundAddPrimary};
    }
`;