import React from 'react'
import { BsTelephoneInbound, BsEnvelope } from 'react-icons/bs'

export const NavbarMed = () => {
  return (
    <div className="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
        <div className="container pb-2">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                    <i className="bi bi-telephone-inbound fs-2"><BsTelephoneInbound /></i>
                    <div className="ms-3">
                        <h5 className="text-white mb-0">Call Now</h5>
                        <span>+012 345 6789</span>
                    </div>
                </div>
                <a href="index.html" className="h1 text-white mb-0" style={{textDecoration: 'none'}}>Medical<span className="text-dark">Lab</span></a>
                <div className="d-flex">
                    <i className="bi bi-envelope fs-2"><BsEnvelope /></i>
                    <div className="ms-3">
                        <h5 className="text-white mb-0">Mail Now</h5>
                        <span>info@example.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
