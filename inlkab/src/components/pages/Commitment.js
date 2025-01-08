import React, { useState } from "react";
import './Commitment.css';
import eco from '../images/Eco_Friendly_h600.jpg';
import toner from '../images/01-300x300.png';

const Commitment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container-commitment border bg-light mt-5 rounded p-5">
            <h1 className="header-commitment text-center display-4 fw-bold p-3 text-dark"> Commitment to Sustainability </h1>
            <p className="par-histry text-center h3 p-3 text-dark"> Environmentally Responsible Printing Practices. </p>
            < div className="row">
                <div className="col m-2">
                    <div className="box-commitment p-5 container rounded">
                        <img src={eco} alt="inhoussechecks" className="imeg-commitment" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={eco} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="service-1 text-center rounded border bg-light mt-2 h4 fw-bold text-dark p-2"> Eco-friendly printing materials</h1>
                    <p className="par-commitment text-center h4"> We prioritize the use of recycled paper and sustainable materials to minimize environmental impact. </p>
                    <p className="par-commitment text-center h4">  Our paper products are sourced from certified, respponsible suppliers, ensuring high quality without depleting natural resourses. </p>
                    </div>
                </div>
            </div>

            < div className="row">
                <div className="col m-2">
                    <div className="box-commitment p-5 container rounded">
                        <img src={toner} alt="inhoussechecks" className="imeg-commitment" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={toner} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="service-1 text-center rounded border bg-light mt-2 h4 fw-bold text-dark p-2"> Water-Based and Low-VOC Inks</h1>
                    <p className="par-commitment text-center h4"> We use water-based inks and low-VOC(Volatile Organic Compound) products that reduce harmful emmissions and environmental impact. </p>
                    <p className="par-commitment text-center h4">  These eco-friendly inks allow us to priduce vibrant, durable prints while keeping our carbon footprint low. </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Commitment;