import React from "react";
import './Slider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colonel from '../images/General_Service_Unit.jpg';

const Slider = () => {

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        touch: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 600, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
  };

    return (
        <div className="container-slider p-5">
            <h1 className="header-slider display-4 text-center fw-bold">Client Testimonials</h1>
            <p className="saying-testimonials text-center h3 p-3">Our greatest achievement is the feedback we receive from satisfied clients who appreciate our dedication and craftmanship. Here ere just a few things they have said about working with us</p>
            <Carousel responsive={responsive}>
                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"Working with Inklab has been a game-changer for our business. Their team is responsive, and they always go to the extra mile to ensure we get axactly what we need. The quality of their prints is unmatched!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>

                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"I had a tight deadline, and INklab deliverd my order right on time without compromising quality. Their customer service team was supportive every step of the way!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>

                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"Our organization needed high-quality bronchures and banners, and Inklab exceeded our expectations. Their eco-friendly printing options were an added bonus!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>

                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"From the design stage to the final delivery, Inklab nade the process easy and stress free. They offered great advice on materials and finishes, and our prints  turned out beautifully!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>

                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"We've used Inklab for several projects, and they've never let us down. Their attention to detail, fast turnaround, and competitive pricing keep us coming back!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>

                <div className="Slider-1">
                    <a href={colonel} target="_blank" rel="noopener noreferrer">
                        <img className="img-client-testimonials" src={colonel} alt='client-1'/>
                    </a>
                    <p className="par-testimonials p-3 h5 text-white">"Amazing quality and super helpful staff! They guided us in choosing the perfect paper and finish for our promotional materials, and the end result was perfect!"</p>
                    <h1 className="headar-testimonials h4 text-center"> Edwin Nguru</h1>
                    <h1 className="headar-testimonials2 h6 text-center"> Software Engineer at Lapsa</h1>
                </div>
            </Carousel>;
        </div>
    );
};
export default Slider;