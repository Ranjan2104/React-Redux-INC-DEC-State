import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {actionCreator} from '../State/actionIndex' 


const Section = () => {
    const storeData = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    
  return (
    <div>
        <h1>
            Update Data
        </h1>
        <h2>Balance = {storeData.bal}</h2>
        <br />
        <section style={{ display:'flex', gap: '15px', justifyContent:'center' }}>
            <button style={{ cursor:"pointer", border:'none' }} onClick={() => dispatch(actionCreator.incBalance(10))}>INCREMENT BALANCE</button>
            <button style={{ cursor:"pointer", border:'none' }} onClick={() => dispatch(actionCreator.desBalance(10))}>DECREMENT BALANCE</button>
            <button style={{ cursor:"pointer", border:'none' }} onClick={() => dispatch(actionCreator.resetBalance(0))}>Reset BALANCE</button>
        </section>
    </div>
  )
}

export default Section