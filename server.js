const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.json('h1');
});
app.get('/convert',(req,res)=>{
    const fromCurrency = req.query.from_currency;
    const toCurrency = req.query.to_currency;
    const options = {
        method: "GET",
        url: "https://alpha-vantage.p.rapidapi.com/query",
        params: {
          from_currency: fromCurrency,
          function: "CURRENCY_EXCHANGE_RATE",
          to_currency: toCurrency,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then((response) => {
          res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
        })
        .catch((error) => {
          console.error(error);
        });
});
app.get('/news',(req,res)=>{
    const options = {
        method: "GET",
        url: "https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin",
        params: { max_articles: "10", last_n_hours: "48", top_n_keywords: "10" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "crypto-news11.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          res.json(response.data.articles);
        })
        .catch(function (error) {
          console.error(error);
        });
});

app.listen(8000, ()=>{
    console.log('Server Running On PORT'+PORT);
})