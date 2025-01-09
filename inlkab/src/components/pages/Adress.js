import React from "react";
import './Address.css';
import location from '../images/orange-colored-map-location-pin.jpg';

const Address = () => {

    return (
        <div className="container-address border rounded mt-5 bg-light">
            <h1 className="head-digitalprint rounded p-2 text-center h5lay-6 fw-bold pt-5"> Visit Us</h1>
            <div className="roww row bg-light">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="box-address container">
                        <img src={location} alt="location" className="img-location p-4" />
                    </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="box-address bg-light rounded container p-2">
                        <h4 className="h1-address fw-bold fw-bold border rounded p-2 bg-white h5">Our Physical Location</h4>
                        <h4 className="par-address p-2 text-dark h5">We are located at:</h4>
                        <p className="par-address h6 text-dark">Globe View Plaza, Room F3, First Floor</p>
                        <p className="par-address h6 text-dark">Kweria Road, Khoja Roundabout</p>

                        <h4 className="h1-address fw-bold border rounded p-2 bg-white h5">Contact Us Today:</h4>
                        <h6 className="service-1 rounded border bg-light mt-2 h6 fw-bold text-dark p-2">Phone:</h6>
                        <p className="par-address h6 text-dark p-2">0700070949</p>
                        <h6 className="service-1 rounded border bg-light mt-2 h6 fw-bold text-dark p-2">Whatsapp:</h6>
                        <p className="par-address h6 text-dark p-2">0700070949</p>
                        <h6 className="service-1 rounded border bg-light mt-2 h6 fw-bold text-dark p-2">Email:</h6>
                        <p className="par-address h6 text-dark p-2">inklabdigitalprinter@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;