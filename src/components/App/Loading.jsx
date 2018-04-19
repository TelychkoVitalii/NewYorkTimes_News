import React from 'react';
import '../../styles/Loading.css';

function Loading() {
    return (
        <div className="container">
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <p className="loading-text">LOADING</p>
        </div>
    );
}

export default Loading;