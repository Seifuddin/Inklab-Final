import React from "react";
import './Address.css';
import location from '../images/orange-colored-map-location-pin.jpg';

const Address = () => {

    return (
        <div className="container-address p-5 border rounded mt-5 bg-light">
            <h1 className="head-address display-5 fw-bold text-center p-3 text-dark"> Visit Us</h1>
            <div className="roww row bg-white rounded">
                <div className="col-12">
                    <div className="box-address container">
                        <img src={location} alt="location" className="img-location p-4" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="box-address bg-white rounded p-5 container">
                        <h4 className="h1-address fw-bold fw-bold border rounded p-2 text-dark bg-white">Our Physical Location</h4>
                        <h4 className="par-address fw-bold p-2 text-darkh3">We are located at:</h4>
                        <p className="par-address h5 text-dark">Globe View Plaza, Room F3, First Floor</p>
                        <p className="par-address h5 text-dark">Kweria Road, Khoja Roundabout</p>

                        <h4 className="h1-address fw-bold border rounded p-2 text-dark bg-white">Contact Us Today:</h4>
                        <h6 className="par-address fw-bold p-2 text-darkh3">Phone:</h6>
                        <p className="par-address h5 text-dark">0700070949</p>
                        <h6 className="service-1 text-center rounded border bg-light mt-2 h4 fw-bold text-dark p-2">Whatsapp:</h6>
                        <p className="par-address h5 text-dark">0700070949</p>
                        <h6 className="service-1 text-center rounded border bg-light mt-2 h4 fw-bold text-dark p-2">Email:</h6>
                        <p className="par-address h5 text-dark">inklabdigitalprinter@gmail.com</p>
                    </div>
            <p className="p-open h5 text-center text-dark"> we are open from Monday to Saturday, From 8: 00 am to 8: 00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Address;