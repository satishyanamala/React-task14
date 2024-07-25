import React from 'react';
import CryptoItem from '../CryptoItems/Cryptoitems';


function CryptoList({ cryptocurrencies }) {
  return (
    <ul className="crypto-list">
      {cryptocurrencies.map(crypto => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </ul>
  );
}

export default CryptoList;
