import { useState } from "react";
import { useEffect } from "react";
import { Select, Input } from "../Field";
import { StyledAnnotatnion, StyledWrapper, StyledButton, StyledFieldset, StyledForm, ChangeIcon } from "./styled";

import Result from "../Result";
import { useRatesData } from "./useRates";
import Info from "../../../common/Info";
import Loading from "../../../common/Info/Loading";
import Failed from "../../../common/Info/Failed";

const Form = () => {
    const {
        ratesData,
        ownedCurrency,
        targetCurrency,
        setOwnedCurrency,
        setTargetCurrency,
    } = useRatesData();

    const [amount, setAmount] = useState("");
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
        setAmount("");
    };

    const currencySwitch = () => {
        setOwnedCurrency(targetCurrency);
        setTargetCurrency(ownedCurrency);
        setResult();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                {ratesData.state === "loading" && (<Info textInfo={"Loadnig current exchange rates from European Central Bank."} loading={<Loading />} />)}
                {ratesData.state === "error" && (<Info textInfo={`Sorry, something went wrong. Check you Internet connection. If it's ok, the error in on our side.`} additionalInfo={`You may refresh the page or try again later.`} error failed={<Failed />} />)}
                {ratesData.state === "success" && (
                    <>
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
                                onChange={({ target }) => setAmount(target.value)}
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
                    </>)}
            </StyledFieldset>
        </StyledForm>
    );
};

export default Form;