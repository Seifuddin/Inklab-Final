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
        <div className="container-service">
            <a href={inklablogoh} target="_blank" rel="noopener noreferrer">
                <img className="img-inklablogoh" src={inklablogoh} alt='inklab logo'/>
            </a>
            <h1 className="header-servise display-6 fw-bold text-center p-2">Inklab Graphics Ltd...</h1>
            <h1 className="header2-briefhistry h3 text-center text-primary">Srives to deliver a high quality proffessional services through applying expertise, specialist knowledge and universally accepted wisdom to the challenges facing our customers</h1>

            <div className="cont-digitalprinting m-5">
                <h1 className="head-digitalprint rounded p-2 text-center text-white bg-primary display-6 fw-bold">Digital Printing</h1>
            <h1 className="header-subservice h3 text-center text-primary">Srives to deliver a high quality proffessional services through applying expertise, specialist knowledge and universally accepted wisdom to the challenges facing our customers</h1>

                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Margazines</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={bscards} target="_blank" rel="noopener noreferrer">
                                <img src={bscards} alt="bscards" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Business Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={bronchures} target="_blank" rel="noopener noreferrer">
                                <img src={bronchures} alt="bronchures" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Bronchures</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={fliers} target="_blank" rel="noopener noreferrer">
                                <img src={fliers} alt="fliers" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Fliers</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={calendars} target="_blank" rel="noopener noreferrer">
                                <img src={calendars} alt="calendars" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Calendars</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={eulogy} target="_blank" rel="noopener noreferrer">
                                <img src={eulogy} alt="eulogy" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Eulogies</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={diaries} target="_blank" rel="noopener noreferrer">
                                <img src={diaries} alt="diaries" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Diaries</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={books} target="_blank" rel="noopener noreferrer">
                                <img src={books} alt="books" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Books</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={wedding} target="_blank" rel="noopener noreferrer">
                                <img src={wedding} alt="wedding" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Wedding Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={notebuk} target="_blank" rel="noopener noreferrer">
                                <img src={notebuk} alt="notebuk" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Notebooks</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={poster} target="_blank" rel="noopener noreferrer">
                                <img src={poster} alt="posters" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Posters</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={letterhead} target="_blank" rel="noopener noreferrer">
                                <img src={letterhead} alt="letterheads" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Letterhead</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={stickers} target="_blank" rel="noopener noreferrer">
                                <img src={stickers} alt="stickers" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Stickers</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={stafid} target="_blank" rel="noopener noreferrer">
                                <img src={stafid} alt="staff id" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Staff IDs</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={photomounting} target="_blank" rel="noopener noreferrer">
                                <img src={photomounting} alt="photomounting" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Photo Mounting</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={lables} target="_blank" rel="noopener noreferrer">
                                <img src={lables} alt="productlabels" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Product Labels</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={presentation} target="_blank" rel="noopener noreferrer">
                                <img src={presentation} alt="presentaionfolders" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Presentation Folder</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={envelops} target="_blank" rel="noopener noreferrer">
                                <img src={envelops} alt="envelopes" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Envelopes</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={receipt} target="_blank" rel="noopener noreferrer">
                                <img src={receipt} alt="receiptbooks" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Receipt Books</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={certs} target="_blank" rel="noopener noreferrer">
                                <img src={certs} alt="certificates" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Certificates</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={cellotapes} target="_blank" rel="noopener noreferrer">
                                <img src={cellotapes} alt="cellotapes" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Custom Cellotapes</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={gifts} target="_blank" rel="noopener noreferrer">
                                <img src={gifts} alt="giftbags" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Gift Bags</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={tentcards} target="_blank" rel="noopener noreferrer">
                                <img src={tentcards} alt="tentcards" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Tent Cards</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4  col-6">
                        <div className="box-digitalprinting border border-3 rounded container p-2">
                            <a href={packaging} target="_blank" rel="noopener noreferrer">
                                <img src={packaging} alt="packaging" className="img-digitalprnt" />
                            </a>
                            <h3 className="h3-clients1 h5 text-center fw-bold m-2  p-1 text-primary">Packaging</h3>
                            <h3 className="h3-clients h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
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