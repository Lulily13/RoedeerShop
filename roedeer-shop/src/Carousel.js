import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel className="main-carousel">
                <div>
                    <img src={require("./images/jewelry1.JPG")} alt={"moon resin necklace"} className="carousel-img" />
                </div>
                <div>
                    <img src={require("./images/jewelry2.JPG")} alt={"rhombus resin necklace"} className="carousel-img"/>
                </div>
                <div>
                    <img src={require("./images/jewelry3.JPG")} alt={"oval resin necklace"} className="carousel-img"/>
                </div>
            </Carousel>
        );
    }
}

export default ImageCarousel;
