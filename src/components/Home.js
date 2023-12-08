import React, {useContext} from 'react'
import { WasomeContext } from './App'

function Home() {
  const {contributors} = useContext(WasomeContext)
  return (

    <main className='mt-4 mb-4 rounded shadow ww-home'>

       <header className='home-header ww-item ww-header shadow'>
           <h1 className='home-title header'>Watoto wasome initiative</h1>
           <h3 className='home-slogan'>A helping hand to a hoping heart</h3>
           <p>
              For many needy and bright students, getting a good grade doesn’t cut it. 
              Due to financial constraints,most of them are left without an alternative and end up out of school.
           </p>
           <p>
              The Watoto wasome initiative aims to bridge this gap 
              by offering scholarships and a mentoring program in Maara constituency. 
              We believe that every child has the right to access a proper education. 
              In our motto discipline and good grades , we trust that no future will be wasted.
           </p>
       </header>

       <main className='home-title ww-item ww-main shadow'>
          <h3 className='header'>who we are</h3>
          <p>Non govermental organization formed with basis of fostering education to less fortunate in our society</p>
       </main>

       <div className='ww-item div-item'>
          <h3>top contributors today</h3>
          {contributors.map((contributor) => {
            return (
              <div key={contributor.id} className='container-contributor'>
                <div className='item-contributor'>
                  <img src={contributor.img} alt={contributor.name} className='icon-contributor' />
                 <small>{contributor.name}</small>
                 <p>Total contributions: {contributor.amount}</p>                  
                </div>
              </div>
            )
          }) }
       </div>

       <section className="ww-item">
           <h3 className='header'>Our numbers that speak</h3> 
           <p>
             We have numbers that push us to give in our best and make sure that we break our own records. 
             We are happy to be growing and helping more day by day.
           </p>
       </section>

       <section className='ww-item'>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">The community</h5>
                  <p class="card-text shadow"><h5 className='h5-bb '>
            300 
              +
              Members Worldwide
            </h5></p>
                  <a href="/" className="btn btn-primary btn-c">register as member</a>
                </div>
              </div>
            </div>
    
            <div class="col-sm-12 mt-2 shadow">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">The Beneficiaries</h5>
                  <p class="card-text shadow"><h5 className='h5-bb'>
              25
              +
              Children Helped
            </h5></p>
                  <a href="/" className="btn btn-primary btn-c btn-sm">Sponsor</a>
             </div>
             </div>
             </div>
             <div class="col-sm-12 mt-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">The Bucket</h5>
                  <p class="card-text shadow"><h5 className='h5-bb'>
              150
              K+
              Funds Raised
            </h5></p>
                  <a href="/" className="btn btn-primary btn-c bnt-sm">view onboard partners</a>
                </div>
              </div>
            </div>
          </div>
       </section>

       <section className='ww-item'>
         <h5>
            Make an impact
            Your contributions matter
          </h5>
        <div className='btn-container'>
          <button className='btn btn-outline-primary mt-3 btn-sm'>Donate</button>
        </div>       
       </section>

    </main>
  )
}

export default Home

