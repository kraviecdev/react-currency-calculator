import { useSelector } from "react-redux";
import {
    selectInitialResultState,
    selectOwnedCurrency,
    selectTargetCurrency,
} from "../currenciesSlice";
import { StyledResult, StyledResultWrapper } from "./styled";

const Result = () => {
    const ownedCurrency = useSelector(selectOwnedCurrency);
    const targetCurrency = useSelector(selectTargetCurrency);
    const result = useSelector(selectInitialResultState);
    const ownedRate = 1;

    if (!result.calculatedResult){
        return null;
    } else (
        <StyledResultWrapper>
            <StyledResult>
                {result.initialAmount.toFixed(2)}&nbsp;{ownedCurrency}&nbsp;={" "}
                <strong>
                    {result.calculatedResult.toFixed(2)}&nbsp;{targetCurrency}
                </strong>
            </StyledResult>
            <StyledResult additionalInfo>
                {ownedRate.toFixed(2)}&nbsp;{ownedCurrency}&nbsp;={" "}
            </StyledResult>
            <StyledResult additionalInfo>
                {result.targetRate}&nbsp;{targetCurrency}
            </StyledResult>
        </StyledResultWrapper>
    );
};

export default Result;