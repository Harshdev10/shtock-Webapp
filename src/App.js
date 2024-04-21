import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

import data from "./data";

import Dashboard from "./pages/Dashboard/Dashboard";
import StockView from "./pages/StockView/StockView";

function App() {
  const [exchanges, setExchanges] = useState([]);
  const [stocks, setStocks] = useState([]);

  const getData = () => {
    const exchanges = data.exchanges;
    const stocks = data.stocks;

    return {
      exchanges,
      stocks,
    };
  };

  useEffect(() => {
    const { exchanges, stocks } = getData();

    setExchanges(exchanges);
    setStocks(stocks);
  }, []);

  return (
    <div className="App">
<Router>
        <Routes>
          <Route
            path="/"
            element={<Dashboard exchanges={exchanges} stocks={stocks} setStocks={setStocks} />}
          />
          <Route
            path="/stocks/:ticker/*"
            element={<StockView stocks={stocks} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
