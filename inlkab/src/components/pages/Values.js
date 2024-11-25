import React from "react";
import './Values.css';
import creativity from '../images/creativity-outline-icon-thin-line-concept-element-from-productivity-icons-collection-creative-creativity-icon-for-mobile-apps-and-web-usage-WHG2RM.jpg';
import collaboration from '../images/6403609.png';
import integrity from '../images/dudutech-values-integrity.png';
import excellence from '../images/excellence-line-icon-quality-symbol-starburst-sign-appreciation-concept-valuable-quality-outstanding-feature-award-winning-first-class-vector-2G8NKJC.jpg';
import innovation from '../images/innovation-vector-outline-icon-design-illustration-educational-technology-symbol-on-white.jpg';

const Values = () => {

    return (
        <div className="container-values container p-5">
            <h1 className="head-values display-6 text-center fw-bold p-3">Our Core Values</h1>
            <h1 className="header2-values h3 text-center p-3 pb-5 text-primary">At the heart of our success lies a steadfast commitment to the values that define who we are  and guide everything we do</h1>
            <div className="row">
                <div className="col">
                    <div className="box-values">
                        <a href={creativity} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={creativity} alt='creativity'/>
                        </a>
                        <h3 className="value text-center h-4">Creativity</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <a href={collaboration} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={collaboration} alt='collaboration'/>
                        </a>
                        <h3 className="value text-center h-4">Collaboration</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <a href={integrity} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={integrity} alt='integrity'/>
                        </a>
                        <h3 className="value text-center h-4">Integrity</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <a href={excellence} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={excellence} alt='excellence'/>
                        </a>
                        <h3 className="value text-center h-4">Excellence</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="box-values">
                        <a href={innovation} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={innovation} alt='innovation'/>
                        </a>
                        <h3 className="value text-center h-4">Innovation</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="box-values2">
                        <h3 className="value text-center h-4">Creativity</h3>
                        <h1 className="header2-values h3 text-center p-3 pb-5 text-primary">At the heart of our success lies a steadfast commitment to the values that define who we are  and guide everything we do</h1>
                    </div>
                </div>

                
                    <div className="col-6">
                    <div className="row">
                    <div className="col-12">
                        <div className="box-values2">
                            <h3 className="value text-center h-4">Collaboration</h3>
                            <h1 className="header2-values h3 text-center p-3 pb-5 text-primary">At the heart of our success lies a steadfast commitment to the values that define who we are  and guide everything we do</h1>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <div className="box-values2">
                            <h3 className="value text-center h-4">Collaboration</h3>
                            <h1 className="header2-values h3 text-center p-3 pb-5 text-primary">At the heart of our success lies a steadfast commitment to the values that define who we are  and guide everything we do</h1>
                        </div>
                    </div>
                    </div>

                    </div>
                    </div>
        </div>
    );
};

export default Values;