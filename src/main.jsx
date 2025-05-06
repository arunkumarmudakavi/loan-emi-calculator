import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExchangeRates, Home } from "./components/index.js"; 
import { ThemeContextProvider } from "./context/ThemeContextProvider.jsx";
import { CurrencyContextProvider } from "./context/CurrencyContextProvider.jsx";
import { Error } from "./utils/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exchange-rates",
        element: <ExchangeRates />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <CurrencyContextProvider>
      <RouterProvider router={router}/>
      </CurrencyContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
