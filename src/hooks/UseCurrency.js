import { useEffect, useState } from "react";

function useCurrency(currency) {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const [Data, SetData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        SetData(res[currency]);
      });
  }, [currency]);
  return Data;
}
export default useCurrency;
