import React from "react";
import './Products.css';
import printingservices from '../images/3076087.png';
import brandingservices from '../images/top-brand-for-specific-product-isolated-icon-vector-31705033.jpg';
import graficdesign from '../images/graphics.jpg';
import ictservices from '../images/2287947.png';

const Products = () => {
    const Printing = ["Digital Printing", "Offset Printing", "Screen Printing", "3D Printing", "UV Printing", "Large Format Printing", "Letterpress Printing", "Canvas Printing"];
    const Branding = ["Corporate Branding", "Product Branding", "Service Branding", "Event Branding", "Experiential Branding", "Sustainable Branding", "Co-Branding", "Luxury Branding"];
    const Graphics = ["Posters", "Banners", "Business cards", "Certificates", "Logos", "Bronchures", "Margazines", "Wedding Cards"];
    const Ict = ["Cyber Setup", "Networking Systems", "Development and Maintenance", "Web design", "Web Development", "Mobile App Development", "ICT Consultation"];

    return (
        <div className="container-products">
            <h1 className="header-product text-center display-5 fw-bold">Products and services</h1>
            <h3 className="h3 text-center p-5 text-primary">We offer a vast array of proffessional services in: Branding, Large Scale, Offset Printing, Digital Printing and graphic design at competitive prices. Ask us about any item you're interested in, and we'll make sure to satisfy your needs.</h3>
            <div className="row m-5">
                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="box-products container border rounded">
                        <a href={printingservices} target="_blank" rel="noopener noreferrer">
                            <img className="img-printin" src={printingservices} alt='printing'/>
                        </a>
                        <h3 className="service-1 text-center rounded">Printing</h3>
                        <hr />
                        <ul className="item-list h4">
                            {Printing.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="box-products container border rounded">
                        <a href={brandingservices} target="_blank" rel="noopener noreferrer">
                            <img className="img-printin" src={brandingservices} alt='branding'/>
                        </a>
                        <h3 className="service-1 text-center rounded">Branding</h3>
                        <hr />
                        <ul className="item-list h4">
                            {Branding.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>     

            <div className="row m-5">   
                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="box-products container border rounded">
                        <a href={graficdesign} target="_blank" rel="noopener noreferrer">
                            <img className="img-printin" src={graficdesign} alt='graphicdesign'/>
                        </a>
                        <h3 className="service-1 text-center rounded">Graphic Design</h3>
                        <hr />
                        <ul className="item-list h4">
                            {Graphics.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="box-products container border rounded">
                        <a href={ictservices} target="_blank" rel="noopener noreferrer">
                            <img className="img-printin" src={ictservices} alt='ictservices'/>
                        </a>
                        <h3 className="service-1 text-center rounded">ICT Services</h3>
                        <hr />
                        <ul className="item-list h4">
                            {Ict.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;