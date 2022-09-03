import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({amount, ownedCurrency, result, targetCurrency, ownedRate, targetRate}) => {
    return (
        <>
            {!!result && (
                <StyledResultWrapper>
                    <StyledResult>
                        {amount}&nbsp;{ownedCurrency}&nbsp;={" "}
                        <strong>
                            {result}&nbsp;{targetCurrency}
                        </strong>
                    </StyledResult>
                    <StyledResult additionalInfo>
                        {ownedRate}&nbsp;{ownedCurrency}&nbsp;={" "}
                    </StyledResult>
                    <StyledResult additionalInfo>
                        {targetRate}&nbsp;{targetCurrency}
                    </StyledResult>
                </StyledResultWrapper>
            )}
        </>
    );
};

export default Result;