import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landinghome from './pages/Landingpage/landinghome';
import Landingabout from './pages/Landingpage/landingabout';
import Landinginvestment from './pages/Landingpage/ladinginvestment';
import Landingcontact from './pages/Landingpage/landingcontact';
import Login from './pages/Landingpage/login';
import Register from './pages/Landingpage/register';
import './index.css'
import Dashboard from './pages/main page/dashboard';
import Wallet from './pages/main page/wallet';
import Transaction from './pages/main page/transactions';

function App() {

  return (
    <>
       <Router>
      <Routes>
      {/* Landing pages */}
        {/* Home page */}
        <Route path="/" element={<Landinghome />} />

        {/* About Us page */}
        <Route path="/Landingabout" element={<Landingabout />} />

        {/* investment page */}
        <Route path="/Landinginvestment" element={<Landinginvestment />} />
            {/* contact us page */}
        <Route path="/Landingcontact" element={<Landingcontact />} />

        {/* login page */}
        <Route path="/Login" element={<Login/>} />

        {/* register */}
        <Route path="/Register" element={<Register/>} />


        {/* main page */}
        {/* home page */}
        <Route path="/Dashboard" element={<Dashboard />} />

        {/* wallet page */}
        <Route path="/Wallet" element={<Wallet />} />

        {/* transactions */}
        <Route path="/Transactions" element={<Transaction />} />


      </Routes>
    </Router>
       
    </>
  )
}

export default App;
