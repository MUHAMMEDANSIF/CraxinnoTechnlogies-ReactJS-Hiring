import React from 'react';
import Balance from '../balance/balance';
import './leftside.css';

const Leftside = () => {
  return (
    <div className='leftside'>
      <h1>Accounts</h1>
      <h4>Counts : </h4>
      <Balance />
    </div>
  );
};

export default Leftside;
