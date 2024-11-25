import React from "react";
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-buttton" onClick={onClose}>X</button>
                <video className="full-screen-video" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;