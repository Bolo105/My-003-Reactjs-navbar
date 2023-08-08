import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import styled from 'styled-components'

const Btn = styled.a`
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: normal;
`;
const Sticky = styled.div`
    top: -100px;
    transition: .5s;
    @media(min-width: 992px){
        margin-top: -34px; 
    }
`;
const A = styled.a`
    margin-right: 35px;
    padding: 20px 0;
    color: #010101;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    &:hover,
    &.active {
        color: blue;
    }
    @media(max-width: 991.98px){
        margin-right: 0;
        padding: 10px 0;
    }
`;
const Nav = styled.nav`
   @media(min-width: 992px){
    height: 68px;
    }
`;
const NavNav = styled.div`
   @media(max-width: 991.98px){
        margin-top: 15px;
        border-top: 1px solid #EEEEEE;
    }
`;
const DrowMenu = styled.div`
  @media (min-width: 992px) {
    .nav-item .dropdown-menu {
      display: block;
      border: none;
      margin-top: 0;
      top: 150%;
      opacity: 0;
      visibility: hidden;
      transition: 0.5s;
    }

    .nav-item:hover .dropdown-menu {
      top: 100%;
      visibility: visible;
      transition: 0.5s;
      opacity: 1;
    }
  }
`;

export const NavbarNav = () => {
    useEffect(() => {
        const handleScroll = () => {
          const stickyMenu = document.querySelector('.sticky-top');
          if (window.scrollY > 300) {
            stickyMenu.classList.add('bg-white', 'shadow-sm');
            stickyMenu.style.top = '-1px';
          } else {
            stickyMenu.classList.remove('bg-white', 'shadow-sm');
            stickyMenu.style.top = '-100px';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <Sticky className="container-fluid sticky-top">
    <div className="container">
        <Nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
            <a href="index.html" className="navbar-brand d-lg-none">
                <h1 className="text-primary m-0">Medical<span className="text-dark">Lab</span></h1>
            </a>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <NavNav className="navbar-nav">
                    <A href="index.html" className="nav-item nav-link active">Home</A>
                    <A href="about.html" className="nav-item nav-link">About</A>
                    <A href="service.html" className="nav-item nav-link">Services</A>
                    <div className="nav-item dropdown">
                        <A href="#/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</A>
                        <DrowMenu className="dropdown-menu bg-light m-0">
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="appoinment.html" className="dropdown-item">Appoinment</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </DrowMenu>
                    </div>
                    <A href="contact.html" className="nav-item nav-link">Contact</A>
                </NavNav>
                <div className="ms-auto d-none d-lg-flex">
                    <Btn className="btn btn-sm-square btn-primary ms-2" href="/">
                        <i className="fab fa-facebook-f">
                            <FaFacebookF />
                        </i>
                    </Btn>
                    <Btn className="btn btn-sm-square btn-primary ms-2" href="/">
                        <i className="fab fa-twitter">
                            <FaTwitter />
                        </i>
                    </Btn>
                    <Btn className="btn btn-sm-square btn-primary ms-2" href="/">
                        <i className="fab fa-linkedin-in">
                            <FaLinkedinIn />
                        </i>
                    </Btn>
                    <Btn className="btn btn-sm-square btn-primary ms-2" href="/">
                        <i className="fab fa-youtube">
                            <FaYoutube />
                        </i>
                    </Btn>
                </div>
            </div>
        </Nav>
    </div>
</Sticky>
  )
}
