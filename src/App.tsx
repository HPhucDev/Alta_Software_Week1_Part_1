import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { depositMoney,withdrawMoney,bankrupt, bankStateCurrent } from './components/state-redux-toolkit/bankState';
function App() {
  const dispatch =useDispatch();
  const state = useSelector(bankStateCurrent)
  return (
    <div className="App">
        <h1>{state}</h1>
        <button onClick={()=>dispatch(depositMoney(1000))}>Deposit</button>
        <button onClick={()=>dispatch(withdrawMoney(1000))}>Withdraw</button>
        <button onClick={()=>dispatch(bankrupt())}>Bankrupt</button>
    </div>
  );
}
export default App;


