import React, { useState } from "react";
import './Calculator.css';
import inklablogoh from '../images/1000040014.jpg';

const Calculator = () => {
    const [paperType, setPaperType] = useState("");
    const [sides, setSides] = useState("");
    const [copies, setCopies] = useState(0);
    const [price, setPrice] = useState(null);

    const prices = {
        "bond 80": { oneSided: 10, doubleSided: 20 },
        "bond 100": { oneSided: 20, doubleSided: 40 },
        "115 GSM": { oneSided: 30, doubleSided: 60 },
        "130 GSM": { oneSided: 40, doubleSided: 80 },
        "150 GSM": { oneSided: 50, doubleSided: 100 },
        "170 GSM": { oneSided: 60, doubleSided: 120 },
        "200 GSM": { oneSided: 70, doubleSided: 140 },
        "250 GSM": { oneSided: 80, doubleSided: 160 },
        "300 GSM": { oneSided: 100, doubleSided: 200 },
    };

    const calculatePrice = () => {
        if (!paperType || !sides || copies <= 0) {
            alert("Please fill out all fields with valid values.")
            return;
        }

        const sideKey = sides === "One Sided" ? "oneSided" : "doubleSided";
        const unitPrice = prices[paperType]?.[sideKey] || 0;
        setPrice(unitPrice * copies);
    };

    return (
        <div className="container-calc p-5 bg-light">
            <a href={inklablogoh} target="_blank" rel="noopener noreferrer">
                <img className="img-inklablogoh" src={inklablogoh} alt='inklab logo'/>
            </a>
            <h1 className="header-briefhistry display-6 fw-bold text-center">Inklab Graphics Ltd...</h1>
            <h2 className="header-calc display-5 p-5 text-center ">Fill in the details and get your Quotation Now</h2>

            <div className="container-calc bg-light p-5 rounded-2 border border-3">
                <form className="form-calc container">
                    <div className="container-form1 p-4 mt-3">
                        <label htmlFor="paperType" className="lbl-1 h4">Paper Type:</label>
                        <select
                            className="select-select h5 p-1"
                            id="paperType"
                            value={paperType}
                            onChange={(e) => setPaperType(e.target.value)}
                        >
                            <option value="">Select Paper Type</option>
                            {Object.keys(prices).map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="container-form1 p-4 mt-3">
                        <label htmlFor="sides" className="lbl-1 h4">Sides:</label>
                        <select
                            className="select-select h5 p-1"
                            id="sides"
                            value={sides}
                            onChange={(e) => setSides(e.target.value)}
                        >
                            <option value="">Select Sides</option>
                            <option value="One Sided">One Sided</option>
                            <option value="Double Sided">Double Sided</option>
                        </select>
                    </div>
                    
                    <div className="container-form1 p-4 mt-3">
                        <label htmlFor="copies" className="lbl-1 h4">No. of copies:</label>
                        <input
                            className="select-select h5 p-2"
                            id="copies"
                            type="number"
                            min="1"
                            value={copies}
                            onChange={(e) => setCopies(Number(e.target.value))}
                        />
                    </div>

                    <div className="container-form1 p-4 mt-3">
                        <button className="btn-calc p-1 h5 rounded-3 bg-primary text-white border-primary mt-4" type="button" onClick={calculatePrice}>Calculate price</button>
                    </div>
                </form>

                {price !== null && (
                    <div>
                        <h3 className="toto-price h4 text-primary text-center pt-3">Total Price: Kshs {price}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;