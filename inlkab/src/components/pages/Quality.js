import React, { useState } from "react";
import './Quality.css';
import konika from '../images/konica-minolta-production-printer.jpg';
import approval from '../images/approved-stamp-17423629.jpg';
import highquality from '../images/high-quality-label-raster-version-260nw-109254341.jpg';
import maintenance from '../images/pngtree-maintenance-search-icon-vector-illustration-for-web-png-image_1927623.jpg';

const Quality = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container-quality">
            <h1 className="header-quality text-center display-4 fw-bold p-3 "> Quality Assurance </h1>
            <p className="heada-quality text-center h4 p-3 text-primary"> At Inklab Graphics, quality is at the core of everything we do. Our team performs a two-step quality inspection on each project, checking for color accuracy, clarity, and allignment. Equipped with Modern Konika Miolta Printers, we deliver precision and sharp detail on every print. We also use FSC-certified paper and faderesistant inks, offering clients eco-friendly long-lasting results. With industry-leading certifications and a customer-first approach, we ensure every project meets our rigorous standards. </p>
            < div className="row m-5">
                <div className="col">
                    <div className="box-quality container">
                        <img src={approval} alt="inhoussechecks" className="imeg-quality" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={approval} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="head-quality text-center h3 m-4"> In-House Checks and Proofing process</h1>
                    <p className="par-quality text-center h5"> Each print job undergo a two-step quality inspection before it is deliverd. Our team checks for accurate colors, clarity, and alignment to meet customer expectations.   Before we go to final print, we provide digital proofs to customers, ensuring that all text, images, and colors meet their approval. </p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-quality container">
                        <img src={konika} alt="inhoussechecks" className="imeg-quality" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={konika} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="head-quality text-center h3 m-4"> Advanced Technology Printing </h1>
                    <p className="par-quality text-center h5"> We use latest Konika Minolta Digital Printers, known for their precise color matching and versatility on a wide range of materials, ensuring each project looks as exactly as envisioned. We also use automated systems for speed and precision. Our automated workflow system reduce manual intervention, allowing us to complete large orders quickly and consistently while minimizing human error. </p>
                    </div>
                </div>
            </div>

            < div className="row m-5">
                <div className="col">
                    <div className="box-quality container">
                        <img src={highquality} alt="inhoussechecks" className="imeg-quality" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={highquality} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="head-quality text-center h3 m-4"> Top Quality Materials </h1>
                    <p className="par-quality text-centerv h5"> We use a wide selection of high-gradee paper types to suite different printing needs, from glossy and matte to textured and recycled options.   Our company invests in eco-friendly, fade-resistant inks that deliver deep, rich colors Using UV-resistant and water based inks ensures that your prints retain their brightness and clarity, even with prolonged exposure to sunlight or handling. </p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-quality container">
                        <img src={maintenance} alt="inhoussechecks" className="imeg-quality" onClick={handleImageClick}/>
                        {isModalOpen && (
                            <div className="modal" onClick={closeModal}>
                                <img src={maintenance} alt="inhoussechecks full view" className="modal-image" onClick={handleImageClick}/>
                            </div>
                        )}

                    <h1 className="head-quality text-center h3 m-4"> Continous Improvement and and Regular maintenance </h1>
                    <p className="par-quality text-center h5"> Our machinery undergoes routine inspections and servicing to ensure optimal performance and minimize downtime. By maintaining our equipment, we ensure that every print meets our high standards for quality, accuracy, and consistency. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;