import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Section = () => {
    const storeData = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>
            Update Data
        </h1>
        <h2>Balance = {storeData.bal}</h2>
        <br />
        <section style={{ display:'flex', gap: '15px', justifyContent:'center' }}>
            <button style={{ cursor:"pointer", border:'none' }} onClick={() => dispatch({type: 'INCREMENT', payload: 10})}>INCREMENT BALANCE</button>
            <button style={{ cursor:"pointer", border:'none' }} onClick={() => dispatch({type: 'DECREMENT', payload: 10})}>DECREMENT BALANCE</button>
        </section>
    </div>
  )
}

export default Section