import React from "react";
import './FollowUs.css';
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import x from '../images/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.jpg';
import tiktok from '../images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png';
import instagram from '../images/2048px-Instagram_icon.png';
import youtube from '../images/social-media-icon-illustration-youtube-youtube-icon-vector-illustration_561158-2132.jpg';

const Follow = () => {
    return (
        <div className="follow container-flex pb-5 bg-light border">
            <div className="follow-sub container">
            
            <h1 className="follow-header fw-bold display-5 text-center p-5">Follow Us</h1>
            <p className="saying-follow h3 text-center pb-5">"Connect with us on social media and stay connected with us to keep up with our latest updates"</p>

                <div className="row m-3">


                <div className="col">
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                    <img className='imejji bg-secondary' src={facebook} alt='facebook' />
                </a>
                </div>

                <div className="col">
                <a href='https://x.com/' target='_blank' rel='noopener noreferrer' >
                    <img className='imejji' src={x} alt='twitter' />
                </a>
                </div>

                <div className="col">
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' >
                    <img className='imejji bg-secondary' src={instagram} alt='instagram' />
                </a>
                </div>

                <div className="col">
                <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' >
                    <img className='imejji' src={youtube} alt='youtube' />
                </a>
                </div>

                <div className="col">
                <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                    <img className='imejji' src={tiktok} alt='tiktok' />
                </a>
                </div>

</div>
</div>
</div>
    );
};

export default Follow;