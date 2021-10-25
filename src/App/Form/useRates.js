import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {

  const [ratesData, setRatesData] = useState({
    state: "loading",
  })

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest");

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
    setTimeout(getRates, 1000);
  }, []);

  return ratesData;
};
