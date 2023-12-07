import React, {createContext} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home"
import About from './About';
import Founders from './Founders';
import Beneficiaries from './Beneficiaries';
import Partners from './Partners';
import Admin from './Admin';
import Footer from './Footer';
import {data} from './data'
import {contributors} from "./contributors"

export const WasomeContext = createContext()

function App() {
  return (
    <WasomeContext.Provider value={{data}, {contributors}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
    </WasomeContext.Provider>
  );
}

export default App;


/*import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Admin from "./Admin";

function App() {

  return (
    <>
     <Navbar  />
     <section className="container mycontainer">
       <Home />
       <Admin />
     </section>
    </>
  )
  ;
}

export default App;
*/
