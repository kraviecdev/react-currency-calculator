import styled from "styled-components";

export const StyledLabel = styled.label`
    margin-bottom: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
    }
`;

export const StyledLabelText = styled.span`
    font-weight: bold;
    padding: 10px;
    max-width: 350px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;

export const StyledFormField = styled.input`
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    border: none;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 20px 20px 60px ${({ theme }) => theme.color.gray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        border: 1px solid ${({theme}) => theme.color.black};
    }

    &:required {
        border: 1px solid ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.white};
    }
    &:required:hover {
        border: 1px solid ${({ theme }) => theme.color.black};
    }
    &:invalid{
        background: ${({theme}) => theme.color.pink}
    }
`;