import React from "react";
import './Values.css';

const Values = () => {

    return (
        <div className="container-values container p-5">
            <h1 className="head-values display-6 fw-bold p-3">Our Core Values</h1>
            <div className="row">
                <div className="col">
                    <div className="box-values">
                        <h3 className="value text-center h-4">Creativity</h3>
                        <p className="par-value text-center h-6">Creativity</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <h3 className="value text-center h-4">Collaboration</h3>
                        <p className="par-value text-center h-6">Creativity</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <h3 className="value text-center h-4">Integrity</h3>
                        <p className="par-value text-center h-6">Creativity</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <h3 className="value text-center h-4">Excellence</h3>
                        <p className="par-value text-center h-6">Creativity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;