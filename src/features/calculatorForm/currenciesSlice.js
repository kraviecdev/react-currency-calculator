import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        ownedCurrency: "EUR",
        targetCurrency: "USD",
        result: {
            initialAmount: '',
            caltulatedResult: 0,
            targetRate: null,
        },
    },
    reducers: {
        handleAmountChange: (state, action) => {
            state.result.initialAmount = action.payload;
        },
        handleOwnedCurrency: (state, action) => {
            state.ownedCurrency = action.payload;
        },
        handleTargetCurrency: (state, action) => {
            state.targetCurrency = action.payload;
        },
        handleSwichCurrencies: state => {
            const initialOwnedCurrency = state.ownedCurrency
            state.ownedCurrency = state.targetCurrency;
            state.targetCurrency = initialOwnedCurrency;
        },
        handleResult: (state, action) => {
            state.result = action.payload;
        },
    },
});

export const {
    handleAmountChange,
    handleOwnedCurrency,
    handleTargetCurrency,
    handleSwichCurrencies,
    handleResult,
} = currenciesSlice.actions

const selectCurrenciesState = state => state.currencies;
const selectResultState = state => selectCurrenciesState(state).result;

export const selectAmount = state => selectResultState(state).initialAmount;
export const selectInitialResultState = state => selectCurrenciesState(state).result;
export const selectOwnedCurrency = state => selectCurrenciesState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCurrenciesState(state).targetCurrency;

export default currenciesSlice.reducer;