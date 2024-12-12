import React from "react";
import './Contact-info.css';
import phonne from '../images/phone-512.png';

const Infocontact = () => {

    return (
        <div className="contactinfo container">
            <div className="infocintact container bg-light p-3 border border-danger">
                <h3 className="head-contact-info display-6 text-danger text-center fw-bold p-5">Contact Information</h3>
                <div className="row border bg-primary rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">Telephone Number:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">0111 608 331</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-warning rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">WhatsApp:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">0111 608 331</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-danger rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">Email:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">muriithinguru@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-secondary rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">YouTube:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">Edwin Nguru</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-primary rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">Instagram:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">Inklab Graphics</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-warning rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">TikTok:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">Muriithi Nguru</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-danger rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">Facebook:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">Inklab Digital Printers</p>
                        </div>
                    </div>
                </div>

                <div className="row border bg-secondary rounded">
                    <div className="col p-2">
                        <div className="box-contactinfo">
                        <p className="par-contact-info h4 text-white">Website:</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box-contactinfo p-2">
                        <p className="par-contact-info2 h4 text-white">www.inklabgraphics.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Infocontact;