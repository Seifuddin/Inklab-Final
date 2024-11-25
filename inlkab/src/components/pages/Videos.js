import React, { useState } from "react";
import './Videos.css';
import VideoModal from './VideoModal';
import vida from '../videos/254794063907_status_343ff90ace11429f8aae5e4526890bbb.mp4';

const Video = () => {
    const  [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container-videos">
            <div className="row">
                <div className="col">
                    <div className="video-holder">
                        <video className="video" onClick={openModal} autoPlay loop muted controls={false}>
                            <source src={vida} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <VideoModal isOpen={isModalOpen} onClose={closeModal} videoSrc={vida} />
                    </div>
                </div>
````
                <div className="col">
                    <div className="video-holder">
                        <video className="video" onClick={openModal} autoPlay loop muted controls={false}>
                            <source src={vida} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <VideoModal isOpen={isModalOpen} onClose={closeModal} videoSrc={vida} />
                    </div>
                </div>

                <div className="col">
                    <div className="video-holder">
                        <video className="video" onClick={openModal} autoPlay loop muted controls={false}>
                            <source src={vida} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <VideoModal isOpen={isModalOpen} onClose={closeModal} videoSrc={vida} />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Video;