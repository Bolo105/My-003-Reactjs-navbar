import React from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'



export const NavbarTop = () => {
  return (
    <div className="container-fluid py-2 d-none d-lg-flex">
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <small className="me-3" style={{color: '#8d8f8f', fontSize: '15px'}}><i className="fa fa-map-marker-alt me-2"><FaMapMarkerAlt color='#8d8f8f'/></i>123 Street, New York, USA</small>
                    <small className="me-3" style={{color: '#8d8f8f', fontSize: '15px'}}><i className="fa fa-clock me-2"><FaClock color='#8d8f8f'/></i>Mon-Sat 09am-5pm, Sun Closed</small>
                </div>
                <nav className="breadcrumb mb-0">
                    <a className="breadcrumb-item small" style={{textDecoration: 'none', fontSize: '15px', color: '#8d8f8f'}} href="#/">Career</a>
                    <a className="breadcrumb-item small" style={{textDecoration: 'none', fontSize: '15px', color: '#8d8f8f'}} href="#/">Support</a>
                    <a className="breadcrumb-item small" style={{textDecoration: 'none', fontSize: '15px', color: '#8d8f8f'}} href="#/">Terms</a>
                    <a className="breadcrumb-item small" style={{textDecoration: 'none', fontSize: '15px', color: '#8d8f8f'}} href="#/">FAQs</a>
                </nav>
            </div>
        </div>
    </div>
  )
}
