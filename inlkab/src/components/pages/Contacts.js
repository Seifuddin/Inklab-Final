import React from "react";
import './Contacts.css';
import Follow from "./FollowUs";
import Infocontact from "./Contact-info";
import Hours from "./Hours";
import ContactForm from "./Form-Contact";
import inklablogoh from '../images/1000040014.jpg';

const Contact = () => {

    return (
        <div className="container-contact bg-light">
            <div className="heada-all bg-primary">
                <a href={inklablogoh} target="_blank" rel="noopener noreferrer">
                    <img className="img-inklablogoh" src={inklablogoh} alt='inklab logo'/>
                </a>
                <h1 className="header-contact display-5 fw-bold text-center">Contact Us</h1>
                <h1 className="header-contact text-center h3 p-5 text-white">We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out using any of the methods below, and our team will be glad to assist you. </h1>
            </div>
            <Infocontact />
            <ContactForm />
            <Hours />
            <Follow />
        </div>
    );
};

export default Contact;