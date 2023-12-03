import React, {useContext} from 'react'
import { WasomeContext } from './App'

function Beneficiaries() {

  const {data} = useContext(WasomeContext)

  return (
    <>
       <center>
         <h2 className='mt-3'>Our beneficiaries</h2>
      </center>

    <div className='beneficiaries'>
   
      {data.map((benef) => {
        return (
        <div className='beneficiary-container' id={benef.admissionNumber}>
        <img src={benef.img} alt="beneficiary" className='my-images'/>
        <h3>{benef.name}</h3>
        <h4>{benef.school} high school</h4>
      </div>
      )})}
        </div>
      </>
        
  )
}

export default Beneficiaries
