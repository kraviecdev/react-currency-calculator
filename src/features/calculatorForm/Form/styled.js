import styled, { css } from "styled-components";
import { ReactComponent as ChangeButtonIcon } from './changeButton.svg';

export const StyledForm = styled.form`
    max-width: 1300px;
    margin: 30px auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        width: 90%;
    }
`;

export const StyledFieldset = styled.fieldset`
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    padding: 24px;
    border: none;
`;

export const StyledAnnotatnion = styled.p`
    margin: 0;
    text-align: right;
    padding: 5px;
    color: ${({ theme }) => theme.colors.annotation};

    ${({ date }) => date && css`
        color: ${({ theme }) => theme.colors.colorPrimary};
    `}
`;

export const StyledWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    margin: 10px 0;

        ${({ changeButtonWrapper }) => changeButtonWrapper && css`
            justify-items: center;
            align-items: flex-end;
        `}

        ${({ button }) => button && css`
            display: flex;
            justify-content: flex-end;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-auto-flow: row;
    }
`;

export const StyledButton = styled.button`
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.colorPrimary};
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.colors.backgroundAddPrimary};

    &:hover {
        color: ${({ theme }) => theme.colors.colorSeconadry};
        box-shadow: inset 0-100px 0 0 ${({ theme }) => theme.colors.backgroundAddPrimary};
    }

        &:active {
        transform: scale(0.9);
    }

    ${({ changeButton }) => changeButton && css`
        padding: 0;
        border: none;
        height: 26px;
        border-radius: 50%;

        &:hover{
            box-shadow: none;
        };
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin-bottom: 10px;
    }
`;

export const ChangeIcon = styled(ChangeButtonIcon)`
    fill: ${({ theme }) => theme.colors.colorPrimary};

    &:hover {
        fill: ${({ theme }) => theme.colors.backgroundAddPrimary};
    }
`;