import React, { useRef } from "react";
import './Ourservices.css';
import printing from '../images/1000040016.jpg';
import konika from '../images/konica-minolta-production-printer.jpg';
import lformat from '../images/c9c5520ecb9ad68e1054d68d75b9a2d7bdec3dfb.jpg';
import clothe from '../images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg';
import signages from '../images/directional-signages.jpg';
import graphics from '../images/do-graphic-design-and-assignament.jpg';
import web from '../images/How_to_Learn_Web_Designing.jpg';
import video from '../images/maxresdefault(1).jpg';
import d from '../images/3d-logo-png-free-png-images-download-36731.png';

const Ourservices = () => {
    
    return (
        <div className="container-services">
            <h1 className="ourservices-header display-4 fw-bold text-center p-5">Our services</h1>
            <p className="saying-services p-5 pt-0 h3 text-center">Whether you're a business proffessional, an artist, or a student, our range of services ensures we have the right solution for every project.</p>
            <div className="sub-ourservices m-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="box-service">
                            <a href={konika} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={konika} alt='konika' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital printing is a modern printing method that offers high-quality and cost-effective solutions for both small and large-scale projects. Ideal for vibrant graphics and intricate details, this service is perfect for business cards, flyers, brochures, banners, and more.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="box-service">
                            <a href={lformat} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={lformat} alt='large format' />
                            </a>
                            <h1 className="par-service h4">Large Format Printing</h1>
                            <p className="h-service">Make a big impact with our large format printing services! Perfect for banners, posters, signs, and other oversized materials, this printing method delivers sharp, high-resolution visuals on a variety of materials.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={clothe} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={clothe} alt='clothe' />
                            </a>
                            <h1 className="par-service h4">Cloth Branding</h1>
                            <p className="h-service">Turn ordinary apparel into powerful marketing tools with our professional cloth branding services. Whether you need branded t-shirts, caps, uniforms, or other garments, we use high-quality techniques to create durable and visually stunning designs.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={signages} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={signages} alt='signages' />
                            </a>
                            <h1 className="par-service h4">Signages</h1>
                            <p className="h-service">Enhance your visibility with custom signage solutions tailored to your brand. From indoor displays to outdoor signs, we create high-quality, durable signages that leave a lasting impression.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={graphics} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={graphics} alt='graphics' />
                            </a>
                            <h1 className="par-service h4">Graphic Design</h1>
                            <p className="h-service">Bring your ideas to life with our expert graphic design services. From logos and branding to marketing materials like brochures, posters, and social media graphics, we create visually stunning designs that captivate and communicate your message effectively.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={web} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={web} alt='web' />
                            </a>
                            <h1 className="par-service h4">Web Design</h1>
                            <p className="h-service">At [Your Company Name], we offer custom design solutions tailored to your specific needs. Whether you're looking to create a new logo, revamp your brand identity, or develop marketing materials that stand out, our talented design team is here to bring your ideas to life.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={video} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={video} alt='video' />
                            </a>
                            <h1 className="par-service h4">Video Advertising</h1>
                            <p className="h-service">Capture attention and drive engagement with our dynamic video advertising services. From concept development to production and editing, we create compelling videos that showcase your brand, products, or services. </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                        <div className="box-service">
                            <a href={d} target="_blank" rel="noopener noreferrer">
                                <img className='imej-printing' src={d} alt='3d' />
                            </a>
                            <h1 className="par-service h4">3D/ 2D Design</h1>
                            <p className="h-service">Unlock the power of creativity with our 2D and 3D design services. Whether you need detailed illustrations, product mockups, architectural models, or 3D animations, our skilled designers bring your ideas to life with precision and artistic flair. </p>
                        </div>
                    </div>

            </div>
        </div>
        </div>
    )

};

export default Ourservices;