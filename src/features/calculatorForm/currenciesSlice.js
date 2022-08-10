import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        amount: '',
        ownedCurrency: "EUR",
        targetCurrency: "USD",
        result: {
            sourceAmount: '',
            targetresult: 0,
            ownedRate: 0,
            targetRate: 0,
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
            
        },
    },
});

export const {
    handleAmountChange,
    handleOwnedCurrency,
    handleTargetCurrency,
    handleSwichCurrencies,
} = currenciesSlice.actions

const selectCurrenciesState = state => state.currencies;

export const selectAmount = state => selectCurrenciesState(state).amount;
export const selectOwnedCurrency = state => selectCurrenciesState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCurrenciesState(state).targetCurrency;

export default currenciesSlice.reducer;