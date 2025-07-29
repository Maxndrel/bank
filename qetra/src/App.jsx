import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landinghome from './pages/Landingpage/landinghome';
import Landingabout from './pages/Landingpage/landingabout';
import Landinginvestment from './pages/Landingpage/ladinginvestment';
import Landingcontact from './pages/Landingpage/landingcontact';
import './index.css'

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

        <Route path="/Landingcontact" element={<Landingcontact />} />
      </Routes>
    </Router>
       
    </>
  )
}

export default App;
