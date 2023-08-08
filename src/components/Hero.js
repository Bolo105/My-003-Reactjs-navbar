import React from 'react'
import caru1 from './images/caru1.jpeg'
import caru2 from './images/caru2.jpeg'
import styled from 'styled-components'

const HeadCar = styled.div`
   height: 120vh;
   min-height: 300px;
@media (min-width: 992px) {
        margin-top: -34px;
    }
`;
const CarCap = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: rgba(3, 27, 78, .3);
    z-index: 1;
`;
const CarItem = styled.div`
@media (max-width: 767.98px) {
      position: relative;
      min-height: 450px;
    }
`;
const Head1 = styled.h1`
    font-weight: bold;
`;
const Imag = styled.img`
    height: 850px;
   @media (max-width: 767.98px) {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Btn = styled.a`
   border-radius: 0 !important;
`;
const Cont = styled.button`
    width: 15%;
`;
const Icon = styled.span`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
    background-color: #0000FF;
    border: 15px solid #0000FF;
`;

export const Hero = () => {
  return (
    <HeadCar className="container-fluid header-carousel px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <CarItem className="carousel-item active">
                    <Imag className="w-100" src={caru1} alt="" />
                    <CarCap className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 text-start">
                                    <Head1 className="display-1 text-white animated slideInRight mb-3">Award Winning Laboratory Center</Head1>
                                    <p className="mb-5 animated slideInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.</p>
                                    <Btn href="/" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</Btn>
                                </div>
                            </div>
                        </div>
                    </CarCap>
                </CarItem>
                <CarItem className="carousel-item">
                    <Imag className="w-100" src={caru2} alt="" />
                    <CarCap className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-7 text-end">
                                    <Head1 className="display-1 text-white animated slideInLeft mb-3">Expert Doctors & Lab Assistants</Head1>
                                    <p className="mb-5 animated slideInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.</p>
                                    <Btn href="/" className="btn btn-primary py-3 px-5 animated slideInLeft">Explore More</Btn>
                                </div>
                            </div>
                        </div>
                    </CarCap>
                </CarItem>
            </div>
            <Cont className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <Icon className="carousel-control-prev-icon" aria-hidden="true"></Icon>
                <span className="visually-hidden">Previous</span>
            </Cont>
            <Cont className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <Icon className="carousel-control-next-icon" aria-hidden="true"></Icon>
                <span className="visually-hidden">Next</span>
            </Cont>
        </div>
    </HeadCar>
  )
}
