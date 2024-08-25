import React, { useState } from 'react'
import './cal.css'
const Calculator = () => {
  const initialState = {
    Tcost: "",
    rate: "",
    fee: "",
    payment: "",
    loan: "",
  }
  const [transaction,setTransaction] = useState(initialState);
  const [tenure,setTenure] = useState("");
  const {Tcost,rate,fee,payment,loan} = transaction;

  const handleChange = (e) => {

    setTransaction({
      ...transaction,
      [e.target.name]:e.target.value
    })
  }


  return (
    <div className="calculator">
      <div className='total_cost'>
        <span>Total cost</span>
        <input type="text" name='Tcost' onChange={handleChange}/>
      </div>
      <div className='rate'>
        <span>Interest Rate</span>
        <input type="number" name='rate' onChange={handleChange}/>
      </div>
      <div className='fee'>
        <span>Processing Fee</span>
        <input type="number" name='fee' onChange={handleChange}/>
      </div>
      <div className='down_payment'>
        <span>Down Payment</span>
        <h3>total Down payment = {}</h3> 
        <input type="range" min="0" max={""} value={""} name='payment' onChange={handleChange}/>
        <span>{}</span>
      </div>
      <div className='loan'>
        <span>Loan Per-Month</span>
        <h3>Total loan (overall) = {}</h3>
        <h3>Total loan (per_Month) = {}</h3>
        <input type="range" min="0" max={""} value={""} name='loan' onChange={handleChange}/>
        <span>{}</span>
      </div>
      <div className='tenure'>
        <span onClick={() => setTenure(12)}>12 month</span>
        <span onClick={() => setTenure(24)}>24 month</span>
        <span onClick={() => setTenure(36)}>36 month</span>
        <span onClick={() => setTenure(48)}>48 month</span>
        <span onClick={() => setTenure(60)}>60 month</span>
      </div>
    </div>
  )
}


export default Calculator

