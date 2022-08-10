import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        amount: '',
        ownedCurrency: "EUR",
        targetCurrency: "USD",
        result: {
            sourceAmount: '',
            targetResult: 0,
            ownedRate: 1,
            targetRate: null,
        },
    },
    reducers: {
        handleAmountChange: (state, action) => {
            state.amount = action.payload;
        },
        handleOwnedCurrency: (state, action) => {
            state.ownedCurrency = action.payload;
        },
        handleTargetCurrency: (state, action) => {
            state.targetCurrency = action.payload;
        },
        handleSwichCurrencies: state => {
            const actualOwnedCurrency = state.ownedCurrency;
            const actualTargetCurrency = state.targetCurrency;

            state.ownedCurrency = actualTargetCurrency;
            state.targetCurrency = actualOwnedCurrency;
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

export const selectAmount = state => selectCurrenciesState(state).amount;
export const selectOwnedCurrency = state => selectCurrenciesState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCurrenciesState(state).targetCurrency;
export const selectInitialResultState = state => selectCurrenciesState(state).result;

export default currenciesSlice.reducer;