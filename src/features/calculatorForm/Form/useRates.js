import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6"
export const useRatesData = () => {

  const [ownedCurrency, setOwnedCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("PLN");
  const [ratesData, setRatesData] = useState({
    state: "success",
  })

  useEffect(() => {
    const getRates = async () => {
      
      try {
        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${ownedCurrency}`);

        const { conversion_rates, time_last_update_unix } = await response.data;

        setRatesData({
          state: "success",
          rates: conversion_rates,
          targetRate: conversion_rates[targetCurrency],
          ownedRate: conversion_rates[ownedCurrency],
          date: time_last_update_unix,
          });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    getRates();
  }, [ownedCurrency, targetCurrency]);

  return {
    ratesData,
    ownedCurrency,
    targetCurrency,
    setOwnedCurrency,
    setTargetCurrency,
  };
};
