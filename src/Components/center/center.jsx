import React from 'react';
import Chart from '../Chart/Chart';
import './center.css'
import {useSelector} from 'react-redux'

const Center = () => {

   const Totalamount = useSelector((state) => state.totalbalance)

    return (
        <div>
            <h1>Initial Balance : {Totalamount}</h1>
            <div className='monthly-payment'>
            <h4>Monthly Payment</h4>
             <input type="number" placeholder='Add Monthly Payment' />
            </div>

            <Chart />
        </div>
    );
}

export default Center;
