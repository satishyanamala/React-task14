import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoList from './Components/Cryptolist/Cryptolist';
import Loader from './Components/Loader/Loader';
import BackgroundImage from './Components/Backgroundimage/image';
import './App.css'; 

const cryptocurrenciesApiUrl = 'https://apis.ccbp.in/crypto-currency-converter';

function App() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(cryptocurrenciesApiUrl)
      .then(response => {
        setCryptocurrencies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cryptocurrencies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="app-title">Cryptocurrency Tracker</h1>
      <BackgroundImage />
      {loading ? (
        <Loader />
      ) : (
        <CryptoList cryptocurrencies={cryptocurrencies} />
      )}
    </div>
  );
}

export default App;
