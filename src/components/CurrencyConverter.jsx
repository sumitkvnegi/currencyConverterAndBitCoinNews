import axios from "axios";
import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [exchangedData, setexchangedData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'USD',
    exchangeRate: 0
  });

  const convert = () => {

    const options = {
      method: "GET",
      url: "http://localhost:8000/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setResult(response.data * amount);
        setexchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  name="currency-option-1"
                  value={chosenPrimaryCurrency}
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={result} disabled={true} />
              </td>
              <td>
                <select
                  name="currency-option-2"
                  value={chosenSecondaryCurrency}
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={convert}>Convert</button>
      </div>
      <ExchangeRate 
      exchangedData={exchangedData} 
      />
    </div>
  );
};

export default CurrencyConverter;
