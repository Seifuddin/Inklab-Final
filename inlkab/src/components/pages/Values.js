import React from "react";
import './Values.css';
import creativity from '../images/creativity-outline-icon-thin-line-concept-element-from-productivity-icons-collection-creative-creativity-icon-for-mobile-apps-and-web-usage-WHG2RM.jpg';
import collaboration from '../images/6403609.png';
import integrity from '../images/dudutech-values-integrity.png';
import excellence from '../images/excellence-line-icon-quality-symbol-starburst-sign-appreciation-concept-valuable-quality-outstanding-feature-award-winning-first-class-vector-2G8NKJC.jpg';
import innovation from '../images/innovation-vector-outline-icon-design-illustration-educational-technology-symbol-on-white.jpg';

const Values = () => {

    return (
        <div className="container-values p-5 border rounded bg-white">
            <div className="brif-sub rounded bg-light border">
                <h1 className="head-histry display-6 text-center fw-bold text-danger p-2 mt-5">A brief history on Inklab</h1>
                <p className="par-histry h4 p-4">INKLAB GRAPHICS LTD traces its roots back to 2012 when the current directors ventured into printing business. In the year 2021, a new dream of collaboration and expanding the business got off the ground and was registered unde the business name INKLAB GRAPHICS. An assortment of modern machinery was imported to meet the demands of the current world. Along with this, the business grew from a simple paper printong shop to an expensive branding firm; adding to its core: cup branding, t-shirt printing, embroidery and paper bag printing alon with the traditional paper printing( receipt books, business cards, posters, fliers & tickets). In 2024, the business became a fully fledged company under the name: INKLAB GRAPHICS LTD. Further, the company has added more office space. In future, the company seeks to join 3D printing.</p>
            </div>
            <h1 className="head-values display-6 text-center fw-bold p-3 mt-5">Our Core Values</h1>
            <h1 className="header2-values h3 text-center p-3 pb-5 text-primary">At the heart of our success lies a steadfast commitment to the values that define who we are  and guide everything we do</h1>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={creativity} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={creativity} alt='creativity'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Creativity</h3>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={collaboration} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={collaboration} alt='collaboration'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Collaboration</h3>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={integrity} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={integrity} alt='integrity'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Integrity</h3>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={excellence} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={excellence} alt='excellence'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Excellence</h3>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={innovation} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={innovation} alt='innovation'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Innovation</h3>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="box-values container">
                        <a href={innovation} target="_blank" rel="noopener noreferrer">
                            <img className="img-value border" src={innovation} alt='innovation'/>
                        </a>
                        <h3 className="value text-center h-4 p-2 text-danger m-3 bg-light rounded">Innovation</h3>
                    </div>
                </div>
            </div>

                    </div>
    );
};

export default Values;