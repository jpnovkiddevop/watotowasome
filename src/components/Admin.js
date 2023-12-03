import React, {useState} from "react"

function Admin() {
  const [name, setName] = useState([])
  const [adminnumber, setAdminnumber] = useState([])
  const [beneficiary, setBeneficiary] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && adminnumber){
        const person = {name, adminnumber}
        setBeneficiary((prevBeneficiary) => {
        return [...beneficiary, person]
        })
        setName('')
        setAdminnumber('')
    }
  }

  return (
    <section>
      <form className='form' onSubmit={handleSubmit}>

            <center><h1>Add Beneficiary</h1></center>

            <div className="form-control">
               <label htmlFor="name">name</label>
               <input type="text" id='name' value={name} onChange={e => setName(e.target.value)} autoComplete="on"/>
            </div>

            <div className="form-control">
               <label htmlFor="adminnumber">admission number</label>
               <input type="text" id="adminnumber" value={adminnumber} onChange={e => setAdminnumber(e.target.value)} autoComplete="on"/>
            </div>

            <button type='submit'>submit</button>

      </form>

      <div>
           {beneficiary.map((benef) => {
            return (
              <div key={benef.adminnumber}>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
   you have added {benef.name} to beneficiary database!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
                 
              </div>
            )
           })}
      </div>

    </section>
  )
}

export default Admin
