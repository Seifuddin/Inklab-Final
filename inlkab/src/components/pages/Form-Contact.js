import React, { useState } from "react";
import axios from "axios";
import './Form-Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await axios.post("http://localhost:5000/contact", formData);
            if (response.status === 200) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            }
        } catch (error) {
            setStatus("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="container-contactusform container">
            <form className="form-contactus container bg-light mt-5 border border-3 border-warning rounded" onSubmit={handleSubmit}>
            <h3 className="head-contactform display-6 text-dark text-center fw-bold p-2 pt-5">Send Us a message</h3>
                <h2 className="headar-formcntct h2 text-center text-dark rounded border border-2 bg-white mt-5">Contact Us Today</h2>
                <label className="lbls h6 fw-bold text-dark p-2">Name:</label>
                <input
                    className="inpt bg-white border border-2 h6 p-3"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label className="lbls h6 fw-bold text-dark p-2">Email:</label>
                <input
                    className="inpt bg-white border border-2 h6 p-3"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className="lbls h6 fw-bold text-dark p-2">Phone:</label>
                <input
                    className="inpt bg-white border border-2 h6 p-3"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label className="lbls h6 fw-bold text-dark">Message:</label>
                <textarea
                    className="inpt bg-white border border-2 h6 p-3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button className="btn-contact m-3 h5 border border-2 rounded p-2" type="submit">Send Message</button>
            </form>
            <p>{status}</p>
        </div>
    );
};

export default ContactForm;