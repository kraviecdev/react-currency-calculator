import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectOwnedCurrency, selectTargetCurrency } from "../currenciesSlice";

export const useRatesData = () => {

  const ownedCurrency = useSelector(selectOwnedCurrency);
  const targetCurrency = useSelector(selectTargetCurrency);
  const [ratesData, setRatesData] = useState({
    state: "success",
  })

  useEffect(() => {
    const getRates = async () => {
      
      try {
        const response = await axios.get(`https://api.exchangerate.host/latest?base=${ownedCurrency}&${new Date().getTime()}`);

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    getRates();
  }, [ownedCurrency]);

  return {
    ratesData,
    ownedCurrency,
    targetCurrency,
  };
};
