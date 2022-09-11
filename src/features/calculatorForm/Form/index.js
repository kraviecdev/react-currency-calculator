import { useEffect, useState } from "react";
import { Select, Input } from "../Field";
import Result from "../Result";
import Info from "../../../common/Info";
import Loading from "../../../common/Info/Loading";
import Failed from "../../../common/Info/Failed";
import {
    StyledAnnotatnion,
    StyledWrapper,
    StyledButton,
    StyledFieldset,
    StyledForm,
    ChangeIcon
} from "./styled";
import { useRatesData } from "./useRates";

const Form = () => {
    const {
        ratesData,
        ownedCurrency,
        setOwnedCurrency,
        targetCurrency,
        setTargetCurrency,
    } = useRatesData();

    const [amount, setAmount] = useState();
    const [result, setResult] = useState(0);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const trimmedAmount = parseFloat(amount);

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
        setResult(+amount * ratesData.targetRate);
    }, [ownedCurrency, targetCurrency, amount, ratesData.targetRate]);

    const currencySwitch = (event) => {
        event.preventDefault();
        setOwnedCurrency(targetCurrency);
        setTargetCurrency(ownedCurrency);
    };

    const showResult = () => {
        setIsSubmitClicked(true);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        showResult();
    };

    return (

        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                {ratesData.state === "loading" && (<Info textInfo={"Loadnig current exchange rates from European Central Bank."} loading={<Loading />} />)}
                {ratesData.state === "error" && (<Info textInfo={`Sorry, something went wrong. Check you Internet connection. If it's ok, the error in on our side.`} additionalInfo={`You may refresh the page or try again later.`} loading={<Failed />} />)}
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
                        <Result
                            amount={trimmedAmount.toFixed(2)}
                            ownedCurrency={ownedCurrency}
                            ownedRate={ratesData.ownedRate}
                            targetCurrency={targetCurrency}
                            targetRate={ratesData.targetRate}
                            result={result.toFixed(2)}
                            active={isSubmitClicked}
                        />
                        <StyledAnnotatnion date >
                            Exchange rates valid as of:<br />
                            <strong>
                                {ratesData.date}
                            </strong>
                        </StyledAnnotatnion>
                    </>
                )}
            </StyledFieldset>
        </StyledForm>

    );
};

export default Form;