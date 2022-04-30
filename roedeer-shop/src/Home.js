import React from 'react';
import Search from "./Search engine";
import Carousel from "./Carousel";
import Footer from "./Footer";
//import {Route} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Search/>
            <Carousel />
            <Footer />
        </>
    )
}

export default Home;