import React, { Component } from 'react';
import '../../styles/Loading.css';

class Loading extends Component {

    render() {
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
}

export default Loading;