import React from "react";
import './Hours.css';

const Hours = () => {

    return (
        <div className="container-hours container bg-light">
            <h1 className="head-hours display-6 text-danger text-center fw-bold p-5"> Business Hours </h1>
            <div className="hours container">
                <div className="row border bg-primary rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                        <p className="par-hours h4 text-white">Monday - Friday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                        <p className="par-hours h4 text-white"> 8: 00 am - 7: 30 pm</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-primary rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                        <p className="par-hours h4 text-white">Saturday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                        <p className="par-hours h4 text-white">  9: 00 am - 6: 15 pm </p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-primary rounded">
                    <div className="col p-2">
                        <div className="box-hours">
                            <p className="par-hours h4 text-white">Sunday:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-hours p-2">
                            <p className="par-hours h4 text-white">  Closed</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hours;