import React from "react";
import './Services.css';
import magazines from '../images/magazine_PNG100074.png';
import bscards from '../images/322-3224036_matte-business-cards-hd-png-download.png';
import bronchures from '../images/Brochure-Banner-PNG-Download-Image.png';
import fliers from '../images/81-816613_clip-art-design-flyers-online-free-flyers-png.png';
import calendars from '../images/Calendar-PNG.png';
import eulogy from '../images/funeral-programs-printing-in-nairobi-funeral-programs-printing-services-prices-in-kenya.jpg';
import diaries from '../images/whatsapp-image-2023-10-26-at-3-44-14-pm.jpeg';
import books from '../images/pngtree-stacked-of-a-lot-of-book-illustration-png-image_6479736.png';
import wedding from '../images/pngtree-crimson-creative-indian-wedding-invitation-png-image_5701571.jpg';
import notebuk from '../images/pngtree-notebooks-school-png-png-image_11470955.png';
import poster from '../images/RHRN-poster.png';
import letterhead from '../images/letterhead-printing-service-500x500.png';
import stickers from '../images/cat-wear-sunglass-kawaii-cute-sticker-ai-generated-png.png';
import stafid from '../images/STAFF-ID-600x560.png';
import photomounting from '../images/mounted-photo-print-shop-kenya.jpg';
import lables from '../images/best-bold-font-3.jpg';
import presentation from '../images/presentation-folder_04371926202312.jpg';
import envelops from '../images/Custom-Printed-Bulk-Printed-Envelopes-1.jpg';
import receipt from '../images/large-receipt-pad.jpg';
import certs from '../images/elegant-gradient-certificate-appreciation_23-2148967513.jpg';
import cellotapes from '../images/printed-bopp-tapes-500x500.jpg';
import gifts from '../images/overprint-bags.jpg';
import tentcards from '../images/4__wide_x_6__Tall_tent_card.jpg';
import packaging from '../images/Product Boxes.jpg';
import LargeFormat from "./Largeformat";
import Cloth from "./ClothBranding";
import Signage from "./Signages";
import Design from "./Design";
import inklablogoh from '../images/1000040014.jpg';
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-service bg-white">
            <div className="box-homepage1">
            <div className="homepage"></div>
            <div className="box-homepage container">
                <img className="img-inklablogoh mt-5" src={inklablogoh} alt='inklab logo'/>
            <h1 className="homepage-titl display-4 fw-bold p-2 text-center">Our Services</h1>
                <p className="second-titl h3 fw-bold text-white text-center">Inklab Graphics Ltd srives to deliver a high quality proffessional services through applying expertise, specialist knowledge and universally accepted wisdom to the challenges facing our customers</p>
            </div>
            </div>

            <div className="cont-digitalprinting bg-white p-2">
                <h1 className="head-digitalprint rounded p-2 text-center text-dark  display-6 fw-bold">Digital Printing</h1>
            <h1 className="header-subservice h4 text-center text-dark pb-5">Digital printing is a modern printing method that offers high-quality and cost-effective solutions for both small and large-scale projects. Ideal for vibrant graphics and intricate details, this service is perfect for business cards, flyers, brochures, banners, and more.</h1>

                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={magazines} target="_blank" rel="noopener noreferrer">
                                    <img src={magazines} alt="magazines" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark ">Margazines</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={bronchures} target="_blank" rel="noopener noreferrer">
                                    <img src={bronchures} alt="bronchures" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Bronchures</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={fliers} target="_blank" rel="noopener noreferrer">
                                    <img src={fliers} alt="fliers" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Fliers</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={calendars} target="_blank" rel="noopener noreferrer">
                                    <img src={calendars} alt="calendars" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Calendars</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={eulogy} target="_blank" rel="noopener noreferrer">
                                    <img src={eulogy} alt="eulogy" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Eulogies</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={diaries} target="_blank" rel="noopener noreferrer">
                                    <img src={diaries} alt="diaries" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Diaries</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={books} target="_blank" rel="noopener noreferrer">
                                    <img src={books} alt="books" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Books</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={notebuk} target="_blank" rel="noopener noreferrer">
                                    <img src={notebuk} alt="notebuk" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Notebooks</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={poster} target="_blank" rel="noopener noreferrer">
                                    <img src={poster} alt="posters" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Posters</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={letterhead} target="_blank" rel="noopener noreferrer">
                                    <img src={letterhead} alt="letterheads" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Letterhead</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={stickers} target="_blank" rel="noopener noreferrer">
                                    <img src={stickers} alt="stickers" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Stickers</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={stafid} target="_blank" rel="noopener noreferrer">
                                    <img src={stafid} alt="staff id" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Staff IDs</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={envelops} target="_blank" rel="noopener noreferrer">
                                    <img src={envelops} alt="envelopes" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Envelopes</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={receipt} target="_blank" rel="noopener noreferrer">
                                    <img src={receipt} alt="receiptbooks" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Receipt Books</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={certs} target="_blank" rel="noopener noreferrer">
                                    <img src={certs} alt="certificates" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Certificates</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={gifts} target="_blank" rel="noopener noreferrer">
                                    <img src={gifts} alt="giftbags" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Gift Bags</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                        <a href={tentcards} target="_blank" rel="noopener noreferrer">
                                    <img src={tentcards} alt="tentcards" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Tent Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4  col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={packaging} target="_blank" rel="noopener noreferrer">
                                    <img src={packaging} alt="packaging" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Packaging</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={bscards} target="_blank" rel="noopener noreferrer">
                                    <img src={bscards} alt="bscards" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Business Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={lables} target="_blank" rel="noopener noreferrer">
                                    <img src={lables} alt="productlabels" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Product Labels</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={wedding} target="_blank" rel="noopener noreferrer">
                                    <img src={wedding} alt="wedding" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Wedding Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={photomounting} target="_blank" rel="noopener noreferrer">
                                    <img src={photomounting} alt="photomounting" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Photo Mounting</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={presentation} target="_blank" rel="noopener noreferrer">
                                    <img src={presentation} alt="presentaionfolders" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Presentation Folder</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                                <a href={cellotapes} target="_blank" rel="noopener noreferrer">
                                    <img src={cellotapes} alt="cellotapes" className="img-digitalprnt" />
                                </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark"> Custom Cellotapes</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>
                </div>
            </div>
            <LargeFormat />
            <Cloth />
            <Signage />
            <Design />
        </div>
    );
};


export default Services;