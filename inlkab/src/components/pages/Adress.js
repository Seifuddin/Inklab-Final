import React from "react";
import './Address.css';
import location from '../images/orange-colored-map-location-pin.jpg';

const Address = () => {

    return (
        <div className="container-address p-5 border rounded m-5 bg-light">
            <h1 className="head-address display-5 fw-bold text-center p-3"> Visit Us</h1>
            <div className="row ">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-4">
                    <div className="box-address">
                        <img src={location} alt="location" className="img-location" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-8">
                    <div className="box-address2 bg-primary rounded p-5">
                        <h4 className="h1-address fw-bold fw-bold border border-warning rounded p-2 text-warning">Our Physical Location</h4>
                        <h4 className="par-address fw-bold p-2 text-danger h3">We are located at:</h4>
                        <p className="par-address h5 text-white">Globe View Plaza, Room F3, First Floor</p>
                        <p className="par-address h5 text-white">Kweria Road, Khoja Roundabout</p>

                        <h4 className="h1-address fw-bold border border-warning rounded p-2 text-warning">Contact Us Today:</h4>
                        <h6 className="par-address fw-bold p-2 text-danger h3">Phone:</h6>
                        <p className="par-address h5 text-white">0700070949</p>
                        <h6 className="par-address fw-bold p-2 text-danger h3">Whatsapp:</h6>
                        <p className="par-address h5 text-white">0700070949</p>
                        <h6 className="par-address fw-bold p-2 text-danger h3">Email:</h6>
                        <p className="par-address h5 text-white">inklabdigitalprinter@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="p-open h5 text-center"> we are open from Monday to Saturday, From 8: 00 am to 8: 00 pm</p>
        </div>
    );
};

export default Address;