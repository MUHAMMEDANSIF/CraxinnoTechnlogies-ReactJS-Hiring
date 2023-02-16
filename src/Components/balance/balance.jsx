import React from 'react';
import './balance.css'
import {toast} from "react-toastify"
import {useDispatch} from "react-redux"

const Balance = () => {

   const [amount,setamount] = React.useState(null);
   const [balance,setbalance] = React.useState([]);
   const dispatch = useDispatch();

   const submit = () => {
     if(true){
        setbalance([...balance,amount])
        dispatch({
            type: 'totalbalance',
            payload: amount,
          });
       setamount('');
       console.log(balance)
     }else{
       toast.error("please add some value")
     }
   }

    return (
        <div>
            <div className='add-balance'>
              <label>Balance</label>
              <input
               type="number"
                placeholder='Add balance amount'
                onChange={(e)=> setamount(Number(e.target.value))}
                value={amount}
                 />
              <button onClick={submit}>Submit</button>
            </div>
            <div className='balance-view'>
                {
                    balance[0] ? 
                    balance.map((value) => (
                        <div>
                        <span>Balance : {value}</span>
                       </div>
                    ))
                      :
                     <span>Please add amount</span>
                }
                </div>
        </div>
    );
}

export default Balance;
