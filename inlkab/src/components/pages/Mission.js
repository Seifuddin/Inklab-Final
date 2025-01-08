import React from "react";
import './Mission.css';
import pic from '../images/+254 111608331 20231216_170428.jpg';
import { useNavigate } from "react-router-dom";

const Mission = () => {
    const navigate = useNavigate();

    const handleButtonClick3 = () => {
        navigate("/About");
    };

    return (
        <div className="container-mission container-flex bg-white p-1">
            <h2 className="ttle-aboutus text-center display-5 fw-bold text-dark">About Us</h2>
            <p className="saying-mission text-center h3 pb-5 pt-3 fw-bold">We're more than just a printing company. We're your creative partner, dedicated to helping individuals and businesses alike bring their ideas to life with vibrant, high-quality prints.</p>
            <div className="row rounded bg-light border">
                <div className="col-xxl-6 col-xl-6 col-lg-5 col-12">
                    <div className="pic-about m-0">
                        <img className='pic' src={pic} alt='email' />
                    </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-12">
                    <div className="rowws row bg-light">
                        <div className="box-mission container">
                            <p className="par-mission1 h3 fw-bold m-2">Our Motto</p>
                            <p className="par-mission m-2">We commited to excellence in print and branding</p>
                            <p className="par-mission1 h4 fw-bold m-2">Our Mission</p>
                            <p className="par-mission m-2">Our mission is to deliver outstanding printing services that exceed customer expectations, using the latest technology and top-quality materials.</p>
                            <p className="par-mission1 h3 fw-bold m-2">Our Vision</p>
                            <p className="par-mission m-2">Our Vision is to offer local and International organizations the finest of products and services in the market through INKLAB GRAPHICS LIMITED. </p>
                            <button className="btn-abt h6 text-center fw-bold m-2 p-1 text-white rounded" onClick={handleButtonClick3}> About </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;