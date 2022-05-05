import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {

  const [ownedCurrency, setOwnedCurrency] = useState("EUR");
  const [ratesData, setRatesData] = useState({
    state: "success",
  })

  useEffect(() => {
    const getRates = async () => {
      try {

        const response = await axios.get(``);

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getRates, 100);
  }, [ownedCurrency]);

  return {
    ratesData,
    ownedCurrency,
    setOwnedCurrency,
  };
};
