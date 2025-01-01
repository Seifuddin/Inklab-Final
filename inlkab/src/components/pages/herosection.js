import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './herosection.css';
import pens from '../images/82086d.jpg';
import cases from '../images/The-Most-Beautiful-Brand-Books-and-Brand-Guidelines-Examples-6-Brand-Book-Templates-1.webp';
import bottles from '../images/blog-logo-3.jpg';
import pads from '../images/ed5d6dc92d927a1887880b28574b0634.jpg';
import mugs from '../images/11x6-real-estate-eddm-postcard-direct-mail-1024x761.jpg';
import tags from '../images/reflecgive-vests-600x653.gif';
import bands from '../images/iphone_apps.jpg';
import holders from '../images/How-to-Edit-Videos.jpg';
import disks from '../images/Custom-Hoodies-Design-Your-Own-Personalized-Photo-Text-Hoodie-Custom-Sweatshirt-4-Side-Print_680c35f2-d10d-4e90-bb49-21787b0e5fed.69924c438862a213d10d770905b72853.jpeg';
import ids from '../images/Lightbox-Signage-exotic-Banners.jpg';
import clocks from '../images/82086d.jpg';

const Section = () => {

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
        <div className="container-promotionall rounded-3 border p-3">
            <h1 className="header-promotional display-6 text-center fw-bold text-dark">Our Work</h1>
            <Carousel responsive={responsive}>
                <div className="Item-1">
                    <a href={pens} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall border" src={pens} alt='pens'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={cases} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={cases} alt='cases'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={bottles} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall border" src={bottles} alt='bottles'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={pads} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={pads} alt='pads'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={mugs} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={mugs} alt='mugs'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={tags} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={tags} alt='tags'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={bands} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={bands} alt='bands'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={holders} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={holders} alt='holders'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={disks} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={disks} alt='disks'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={ids} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={ids} alt='ids'/>
                    </a>
                </div>

                <div className="Item-1">
                    <a href={clocks} target="_blank" rel="noopener noreferrer">
                        <img className="img-promotionall" src={clocks} alt='clocks'/>
                    </a>
                </div>

            </Carousel>;
        </div>
    );
};
export default Section;