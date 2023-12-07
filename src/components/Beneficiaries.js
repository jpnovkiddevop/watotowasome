import React, {useContext} from 'react'
import { WasomeContext } from './App'

function Beneficiaries() {

  const {data} = useContext(WasomeContext)

  return (
    <>
       <center>
         <h2 className='mt-3'>Our beneficiaries</h2>
         <center><svg xmlns="http://www.w3.org/2000/svg" width="16"  height="16" fillRule="currentColor" className="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg></center>
         <p className='mt-2 mb-2'>One child can change the future of a country. How powerful would we be  if we decided to educate a village</p>
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
