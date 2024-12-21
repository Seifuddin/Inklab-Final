import React from "react";
import './Address.css';
import location from '../images/orange-colored-map-location-pin.jpg';

const Address = () => {

    return (
        <div className="container-address p-5 border rounded mt-5 bg-white">
            <h1 className="head-address display-5 fw-bold text-center p-3"> Visit Us</h1>
            <div className="row bg-primary rounded">
                <div className="col-12">
                    <div className="box-address container">
                        <img src={location} alt="location" className="img-location p-4" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="box-address bg-primary rounded p-5 container">
                        <h4 className="h1-address fw-bold fw-bold border border-warning rounded p-2 text-primary bg-white">Our Physical Location</h4>
                        <h4 className="par-address fw-bold p-2 text-warning h3">We are located at:</h4>
                        <p className="par-address h5 text-white">Globe View Plaza, Room F3, First Floor</p>
                        <p className="par-address h5 text-white">Kweria Road, Khoja Roundabout</p>

                        <h4 className="h1-address fw-bold border border-warning rounded p-2 text-primary bg-white">Contact Us Today:</h4>
                        <h6 className="par-address fw-bold p-2 text-warning h3">Phone:</h6>
                        <p className="par-address h5 text-white">0700070949</p>
                        <h6 className="par-address fw-bold p-2 text-warning h3">Whatsapp:</h6>
                        <p className="par-address h5 text-white">0700070949</p>
                        <h6 className="par-address fw-bold p-2 text-warning h3">Email:</h6>
                        <p className="par-address h5 text-white">inklabdigitalprinter@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="p-open h5 text-center"> we are open from Monday to Saturday, From 8: 00 am to 8: 00 pm</p>
        </div>
    );
};

export default Address;