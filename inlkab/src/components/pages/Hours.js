import React from "react";
import './Hours.css';

const Hours = () => {

    return (
        <div className="container-hours container mt-5 bg-light p-3 border border-danger rounded">
            <h1 className="head-hours display-6 text-danger text-center fw-bold p-5"> Our Business Hours </h1>
            <div className="hours ">
                <div className="row border bg-white rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                        <p className="par-hours h4">Monday - Friday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                        <p className="par-hours h4"> 8: 00 am - 7: 30 pm</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-white rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                        <p className="par-hours h4">Saturday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                        <p className="par-hours h4">  9: 00 am - 6: 15 pm </p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-white rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                            <p className="par-hours h4">Sunday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                            <p className="par-hours h4">  Closed</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hours;