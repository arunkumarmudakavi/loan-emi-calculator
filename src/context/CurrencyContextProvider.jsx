import { useState } from "react";
import { CurrencyContext } from "./Context";

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [displayTable, setDisplayTable] = useState(false);
  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, displayTable, setDisplayTable }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
