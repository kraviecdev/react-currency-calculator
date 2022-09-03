import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        amount: '',
        ownedCurrency: "EUR",
        targetCurrency: "USD",
        result: {
            value: 0,
            targetRate: null,
        },
    },
    reducers: {
        handleAmountChange: (state, action) => {
            state.amount = action.payload;
        },
        handleOwnedCurrency: ({ ownedCurrency }, action) => {
            ownedCurrency = action.payload;
        },
        handleTargetCurrency: ({ targetCurrency }, action) => {
            targetCurrency = action.payload;
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
    handleTargetRate,
} = currenciesSlice.actions

const selectCurrenciesState = state => state.currencies;

export const selectAmount = state => selectCurrenciesState(state).amount;
export const selectInitialResultState = state => selectCurrenciesState(state).result;
export const selectOwnedCurrency = state => selectCurrenciesState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCurrenciesState(state).targetCurrency;
export const selectTargetRate = state => selectCurrenciesState(state).targetRate;

export default currenciesSlice.reducer;