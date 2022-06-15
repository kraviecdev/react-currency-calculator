import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Select, Input } from "../Field";
import { StyledAnnotatnion, StyledWrapper, StyledButton, StyledFieldset, StyledForm, ChangeIcon } from "./styled";

import Result from "../Result";
import { useRatesData } from "./useRates";
import { selectAmount, selectOwnedCurrency, selectTargetCurrency } from "../calculatorSlice";

const Form = () => {
    const ownedCurrency = useSelector(selectOwnedCurrency);
    const targetCurrency = useSelector(selectTargetCurrency);
    const amount = useSelector(selectAmount);

    // const dispatch = useDispatch();

    const {
        ratesData,
        // ownedCurrency,
        // targetCurrency,
        setOwnedCurrency,
        setTargetCurrency,
    } = useRatesData();

    const [result, setResult] = useState();

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
    }, [ownedCurrency, targetCurrency]);

    const calculateResult = () => {
        const ownedRate = ratesData.rates[ownedCurrency]
        const targetRate = ratesData.rates[targetCurrency];
        setResult(
            {
                sourceAmount: +amount,
                targetResult: +amount * targetRate,
                ownedRate,
                targetRate
            }
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const currencySwitch = () => {
        setOwnedCurrency(targetCurrency);
        setTargetCurrency(ownedCurrency);
        setResult();
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
                        onChange={({ target }) => setOwnedCurrency(target.value)}
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
                        onChange={({ target }) => setTargetCurrency(target.value)}
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
                        value={amount}
                        onChange={({ target }) => (target.value)}
                    />
                </StyledWrapper>
                <StyledWrapper button>
                    <StyledButton>Calculate</StyledButton>
                </StyledWrapper>
                <StyledWrapper result>
                    <Result
                        result={result}
                        targetCurrency={targetCurrency}
                        ownedCurrency={ownedCurrency}
                    />
                </StyledWrapper>
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