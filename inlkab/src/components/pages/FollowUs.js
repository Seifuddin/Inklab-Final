import React from "react";
import './FollowUs.css';
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import x from '../images/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.jpg';
import tiktok from '../images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png';
import instagram from '../images/2048px-Instagram_icon.png';
import youtube from '../images/social-media-icon-illustration-youtube-youtube-icon-vector-illustration_561158-2132.jpg';

const Follow = () => {
    return (
        <div className="follow container pt-5">
            <div className="follow-sub container">
            
                        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj bg-secondary' src={facebook} alt='facebook' />
                        </a>

                        <a href='https://x.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj' src={x} alt='twitter' />
                        </a>

                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj' src={instagram} alt='instagram' />
                        </a>
                    
                    
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj ' src={youtube} alt='youtube' />
                        </a>

                        <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                            <img className='imejj' src={tiktok} alt='tiktok' />
                        </a>
</div>
</div>
    );
};

export default Follow;