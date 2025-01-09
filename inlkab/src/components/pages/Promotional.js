import React from "react";
import './Promotional.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colonel from '../images/General_Service_Unit.jpg';
import pens from '../images/82086d.jpg';
import cases from '../images/f95882d53857e26a7a066108f9bac3b3(0).jpg';
import bottles from '../images/Aluminum-Bottle-White.png';
import pads from '../images/Branded-Mouse-Pads.png';
import mugs from '../images/branded-mugs-in-kenya-2.jpg';
import tags from '../images/id-card-design-background-600nw-2124667253.jpg';
import bands from '../images/mulicolor-wrist-band-500x500.jpg';
import holders from '../images/plastic-keyrings.jpg';
import disks from '../images/promotional-flash-drives_2_1.jpg';
import ids from '../images/staff-cards.jpg';
import clocks from '../images/118003450_screenshot-20200827-134948-facebook_620x742.webp';

const Promotional = () => {

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10,
        },

        desktop2: {
            breakpoint: { max: 3000, min: 2000 },
            items: 9,
        },

        desktop: {
            breakpoint: { max: 2000, min: 1000 },
            items: 7,
        },

        tablet2: {
            breakpoint: { max: 1000, min: 750 },
            items: 5,
        },

        tablet: {
            breakpoint: { max: 750, min: 600 },
            items: 4,
        },

        tablet3: {
            breakpoint: { max: 600, min: 464 },
            items: 3,
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
  };

    return (
        <div className="container-promotional container-flex p-2">
            <h1 className="ourservices-header h2 fw-bold text-center p-2 pt-5">Promotional Items</h1>
            <p className="saying-promotional h5 text-center pb-5 text-dark fw-bold">"Boost your brand with custom promotional products that get you noticed"</p>
            <Carousel responsive={responsive}>
                <div className="Item-1">
                    <a href={pens} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional border" src={pens} alt='pens'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Pens</h1>
                </div>

                <div className="Item-1">
                    <a href={cases} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={cases} alt='cases'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Phone Cases</h1>
                </div>

                <div className="Item-1">
                    <a href={bottles} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional border" src={bottles} alt='bottles'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Bottles & Flasks</h1>
                </div>

                <div className="Item-1">
                    <a href={pads} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={pads} alt='pads'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Mouse Pads </h1>
                </div>

                <div className="Item-1">
                    <a href={mugs} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={mugs} alt='mugs'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Mugs </h1>
                </div>

                <div className="Item-1">
                    <a href={tags} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={tags} alt='tags'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Name tags</h1>
                </div>

                <div className="Item-1">
                    <a href={bands} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={bands} alt='bands'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Wrist Bands</h1>
                </div>

                <div className="Item-1">
                    <a href={holders} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={holders} alt='holders'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Key Holders</h1>
                </div>

                <div className="Item-1">
                    <a href={disks} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={disks} alt='disks'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> Hard Drives</h1>
                </div>

                <div className="Item-1">
                    <a href={ids} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={ids} alt='ids'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> ID cards</h1>
                </div>

                <div className="Item-1">
                    <a href={clocks} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotional" src={clocks} alt='clocks'/>
                    </a>
                    <h1 className="service-1 text-center h6 fw-bold mt-2 bg-light"> ID cards</h1>
                </div>

            </Carousel>;
        </div>
    );
};
export default Promotional;