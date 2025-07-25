import React from 'react'
import Cbn from "../../assets/cbn.png"
import Ndic from "../../assets/ndic.png"

const Marquee = () => {
  return (
    <div>
      <section className='mt-3'>
  <h4 className="text-center  text-success">LICENSED AND INSURED BY</h4>
  <marquee behavior="alternate">
    <span className="d-inline-flex align-items-center">
      <img
        src={Cbn}
        alt="CBN Logo"
        style={{ height: "40px", marginRight: "8px" }}
      />
      <strong>LICENSED BY THE CENTRAL BANK OF NIGERIA </strong>
    </span>

    <span className="mx-4 d-inline-flex align-items-center">
      <img
        src={Ndic}
        alt="NDIC Logo"
        style={{ height: "40px", marginRight: "8px" }}
      />
      <strong>INSURED BY THE NIGERIA DEPOSIT INSURANCE CORPORATION</strong>
    </span>

    <span className="d-inline-flex align-items-center">
      <img
        src={Cbn}
        alt="CBN Logo"
        style={{ height: "40px", marginRight: "8px" }}
      />
      <strong>LICENSED BY THE CENTRAL BANK OF NIGERIA </strong>
    </span>

    <span className="mx-4 d-inline-flex align-items-center">
      <img
        src={Ndic}
        alt="NDIC Logo"
        style={{ height: "40px", marginRight: "8px" }}
      />
      <strong>INSURED BY THE NIGERIA DEPOSIT INSURANCE CORPORATION</strong>
    </span>
  </marquee>
</section>
    </div>
  )
}

export default Marquee