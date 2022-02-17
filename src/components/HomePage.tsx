import About from './About';
import Gallery from './Gallery';
import Offer from './Offer';
import React from 'react';
import Description from './Description';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="square-container">
                <About />
            </div>
            <div className="square-container">
                <Gallery />
            </div>
            <div className="square-container">
                <Description />
            </div>
            <div className="square-container">
                <Offer />
            </div>
        </div>
    )
}

export default HomePage;