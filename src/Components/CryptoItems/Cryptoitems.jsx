import React from 'react';
import './Cryptoitem.css';

function CryptoItem({ crypto }) {
  const { currency_name, usd_value, euro_value, currency_logo } = crypto;

  return (
    <li className="crypto-item">
      <img src={currency_logo} alt={currency_name} className="crypto-logo" />
      <div className="crypto-info">
        <h2 className="crypto-name">{currency_name}</h2>
        <p className="crypto-value">USD: {usd_value}</p>
        <p className="crypto-value">EUR: {euro_value}</p>
      </div>
    </li>
  );
}

export default CryptoItem;
