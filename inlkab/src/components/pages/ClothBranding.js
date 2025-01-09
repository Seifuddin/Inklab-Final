import React from "react";
import './ClothBranding.css';
import tshirt from '../images/Ladie-Tshirts-1.jpg';
import hoodie from '../images/Custom-Hoodies-Design-Your-Own-Personalized-Photo-Text-Hoodie-Custom-Sweatshirt-4-Side-Print_680c35f2-d10d-4e90-bb49-21787b0e5fed.69924c438862a213d10d770905b72853.jpeg';
import jersey from '../images/mens-adidas-red-louisville-cardinals-custom-replica-football-jersey_ss5_p-200464418 u-px5pwhvgwwydk0s8saub v-jqxoeoaukgi2n37vmsxn.jpg';
import caps from '../images/merchandise-branded-caps-centurion-print-1.jpg';
import reflectors from '../images/reflecgive-vests-600x653.gif';
import uniforms from '../images/247-2470498_transparent-blue-dress-png-school-dress-images-png.png';
import flag from '../images/31rAV18e8cL._QL92_SH45_SS200_.jpg';
import overalls from '../images/He78ca553cba643cb8e5c9681d3a323eaW.jpg_300x300.jpg';
import bags from '../images/non-woven-branded-bags.png';
import towels from '../images/promotional-towels.png';
import shirts from '../images/dropdown-printfactory-site-corporate-shirt.jpg';
import { useNavigate } from "react-router-dom";

const Cloth = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-Cloth border rounded bg-white">
            <div className="cont-Cloth p-2 pb-5">
                <h1 className="head-digitalprint rounded p-2 text-center h5lay-6 fw-bold">Cloth Branding</h1>
                <h1 className="signage-header2 h6 rounded pb-3 text-center text-dark">Turn ordinary apparel into powerful marketing tools with our professional cloth branding services. Whether you need branded t-shirts, caps, uniforms, or other garments, we use high-quality techniques to create durable and visually stunning designs.</h1>

                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-6 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={tshirt} target="_blank" rel="noopener noreferrer">
                                <img src={tshirt} alt="tshirts" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">T-Shirts</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={hoodie} target="_blank" rel="noopener noreferrer">
                                <img src={hoodie} alt="hoodies" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Hoodies</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={jersey} target="_blank" rel="noopener noreferrer">
                                <img src={jersey} alt="jerseys" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Jerseys</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={caps} target="_blank" rel="noopener noreferrer">
                                <img src={caps} alt="caps" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Caps</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={reflectors} target="_blank" rel="noopener noreferrer">
                                <img src={reflectors} alt="reflectors" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Reflectors</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={flag} target="_blank" rel="noopener noreferrer">
                                <img src={flag} alt="flags" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Flags</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={uniforms} target="_blank" rel="noopener noreferrer">
                                <img src={uniforms} alt="uniforms" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Uniforms</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={overalls} target="_blank" rel="noopener noreferrer">
                                <img src={overalls} alt="overalls" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Overalls</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={bags} target="_blank" rel="noopener noreferrer">
                                <img src={bags} alt="bags" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Bags</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={towels} target="_blank" rel="noopener noreferrer">
                                <img src={towels} alt="towels" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Towels</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-12 ">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={shirts} target="_blank" rel="noopener noreferrer">
                                <img src={shirts} alt="shirts" className="img-clothebrnding" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1">Corporate Shirts</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Cloth;