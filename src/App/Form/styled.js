import styled, { css } from "styled-components";
import { ReactComponent as ChangeButtonIcon } from './changeButton.svg';

export const StyledForm = styled.form`
    width: 70%;
    margin: 30px auto;
`;

export const StyledFieldset = styled.fieldset`
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
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
            justify-items: end;
        `}

        ${({ result }) => result && css`
            max-width: fit-content;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-auto-flow: row;
    }
`;

export const StyledButton = styled.button`
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.colorSeconadry};
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.colors.backgroundSecondary};

    ${({ changeButton }) => changeButton && css`
        padding: 0;
        border: none;
        height: 26px;
        border-radius: 50%;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin-bottom: 10px;
    }

        &:hover {
        box-shadow: inset 0-100px 0 0 ${({ theme }) => theme.colors.backgroundSecondary};
    }

        &:active {
        transform: scale(0.9);
    }
`;

export const ChangeIcon = styled(ChangeButtonIcon)`
    fill: ${({ theme }) => theme.colors.colorSeconadry};
`;