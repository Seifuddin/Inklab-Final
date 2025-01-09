import React from "react";
import './Contacts.css';
import Infocontact from "./Contact-info";
import ContactForm from "./Form-Contact";

const Contact = () => {

    return (
        <div className="container-contact bg-light">
                        <div className="box-homepage1">
            <div className="homepage"></div>
            <div className="box-homepage container">
            <h1 className="homepage-titl display-4 fw-bold p-2 text-center">Contact Us</h1>
                <p className="second-titl h3 fw-bold text-white text-center">We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out using any of the methods below, and our team will be glad to assist you.</p>
            </div>
            </div>
            
            <Infocontact />
            <ContactForm />
        </div>
    );
};

export default Contact;