import React, { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";

export const ExchangeRates = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL_ENDPOINT = `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATES_API_KEY}/latest/USD`;

  useEffect(() => {
    useGet(URL_ENDPOINT)
      .then((res) => {
        setData(res?.data?.conversion_rates);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch exchange rates");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading exchange rates...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No exchange rates available</div>;
  }

  return (
    <ul>
      {Object.entries(data).map(([currency, price]) => (
        <li key={currency}>
          <strong>{currency}:</strong> {price}
        </li>
      ))}
    </ul>
  );
};
