import { useEffect } from "react";
import {
    Select,
    Input
} from "../Field";
import {
    StyledAnnotatnion,
    StyledWrapper,
    StyledButton,
    StyledFieldset,
    StyledForm,
    ChangeIcon
} from "./styled";
import { useRatesData } from "./useRates";
import Result from "../Result";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAmount,
    handleAmountChange,
    selectOwnedCurrency,
    handleOwnedCurrency,
    selectTargetCurrency,
    handleTargetCurrency,
    handleSwichCurrencies,
    handleResult,
} from "../currenciesSlice";

const Form = () => {
    const { ratesData } = useRatesData();

    const amount = useSelector(selectAmount);
    const ownedCurrency = useSelector(selectOwnedCurrency);
    const targetCurrency = useSelector(selectTargetCurrency);
    const dispatch = useDispatch();

    const parsedAmount = parseFloat(amount);

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
    }, [ownedCurrency, targetCurrency]);

    const calculateResult = () => {
        const targetRate = ratesData.rates[targetCurrency]
        dispatch(handleResult({
            initialAmount: parsedAmount,
            calculatedResult: parsedAmount * targetRate,
            targetRate: targetRate,
        }));
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const currencySwitch = () => {
        dispatch(handleSwichCurrencies());
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                <StyledAnnotatnion>*Fields required</StyledAnnotatnion>
                <StyledWrapper>
                    <Select
                        fieldName={"From*: "}
                        name={"currency"}
                        value={ownedCurrency}
                        onChange={({ target }) => dispatch(handleOwnedCurrency(target.value))}
                        option={!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    />
                    <StyledWrapper changeButtonWrapper>
                        <StyledButton
                            onClick={currencySwitch}
                            changeButton
                        >
                            <ChangeIcon />
                        </StyledButton>
                    </StyledWrapper>
                    <Select
                        fieldName={"To*: "}
                        name={"currency"}
                        value={targetCurrency}
                        onChange={({ target }) => dispatch(handleTargetCurrency(target.value))}
                        option={!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    />
                    <Input
                        fieldName={`${ownedCurrency} Amount*: `}
                        value={parsedAmount}
                        onChange={({ target }) => dispatch(handleAmountChange(target.value))}
                    />
                </StyledWrapper>
                <StyledWrapper button>
                    <StyledButton>Calculate</StyledButton>
                </StyledWrapper>
                <Result />
                <StyledAnnotatnion date >
                    Exchange rates valid as of:<br />
                    <strong>
                        {ratesData.date}
                    </strong>
                </StyledAnnotatnion>
            </StyledFieldset>
        </StyledForm>
    );
};

export default Form;