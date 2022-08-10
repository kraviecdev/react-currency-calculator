import { useSelector } from "react-redux";
import { selectOwnedCurrency, selectTargetCurrency } from "../currenciesSlice";
import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ result }) => {
    const ownedCurrency = useSelector(selectOwnedCurrency);
    const targetCurrency = useSelector(selectTargetCurrency);

    if (result.targetResult === 0) {
        return null;
    } else 
        return (
            <StyledResultWrapper>
                <StyledResult>
                    {result.sourceAmount.toFixed(2)}&nbsp;{ownedCurrency}&nbsp;={" "}
                    <strong>
                        {result.targetResult.toFixed(2)}&nbsp;{targetCurrency}
                    </strong>
                </StyledResult>
                <StyledResult additionalInfo>
                    {result.ownedRate}&nbsp;{ownedCurrency}&nbsp;={" "}
                </StyledResult>
                <StyledResult additionalInfo>
                    {result.targetRate}&nbsp;{targetCurrency}
                </StyledResult>
            </StyledResultWrapper>
        );
    };

    export default Result;