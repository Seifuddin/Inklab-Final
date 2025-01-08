import React from "react";
import './Homepage.css';
import { useNavigate } from "react-router-dom";
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import x from '../images/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.jpg';
import tiktok from '../images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png';
import instagram from '../images/2048px-Instagram_icon.png';
import youtube from '../images/social-media-icon-illustration-youtube-youtube-icon-vector-illustration_561158-2132.jpg';

const Homepage = () => {
        const navigate = useNavigate();
    
        const handleButtonClick = () => {
            navigate("/calculator");
        };
    
    return (
        <div className="container-homepage container-flex">
            <div className="homepage container-flex">
               
            </div>
            <div className="box-homepage container">
                    <h1 className="homepage-titl display-4 fw-bold p-2">Transform Your Vision into Stunning Designs</h1>
                    <p className="second-titl h5 fw-bold p-2 text-white">Proffessional Graphic Design and High-Quality Printing Services Tailored to Your Needs</p>
                    <div className="expe mt-3 bg-dark p-3 row container">
                        <div className="bx-expe col rounded p-2">
                            <h1 className="hedd fw-bold display-6 text-center">3+</h1>
                            <h1 className="hedd2 text-white h6 text-center">years of experience</h1>
                        </div>

                        <div className="bx-expe col rounded p-2">
                            <h1 className="hedd fw-bold display-6 text-center">100+</h1>
                            <h1 className="hedd2 text-white h6 text-center">5 star ratings</h1>
                        </div>

                        <div className="bx-expe col rounded p-2">
                            <h1 className="hedd fw-bold display-6 text-center">500+</h1>
                            <h1 className="hedd2 text-white h6 text-center">happy clients</h1>
                        </div>

                        <div className="bx-expe col rounded p-2">
                            <h1 className="hedd fw-bold display-6 text-center">100%</h1>
                            <h1 className="hedd2 text-white h6 text-center">quality work</h1>
                        </div>

                        <div className="box-media container mt-5">
                        <h1 className="hedd2 text-white h6">Like and Follow us on our social media sites</h1>


                        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj border' src={facebook} alt='facebook' />
                        </a>

                        <a href='https://x.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj border' src={x} alt='twitter' />
                        </a>

                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj border' src={instagram} alt='instagram' />
                        </a>
                    
                    
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj border' src={youtube} alt='youtube' />
                        </a>

                        <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj border' src={tiktok} alt='tiktok' />
                        </a>
                
                    </div>
                    </div>
                    <button className="btn-quotation1 h6 text-center m-2 border rounded p-2 rounded fw-bold" onClick={handleButtonClick}> Quoatation </button>
                </div>


        </div>

    );
};

export default Homepage;