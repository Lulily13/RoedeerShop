import React from 'react';
import Search from "./Search engine";
import Carousel from "./Carousel";
import About from "./About";
import Information from "./Informations";
import Footer from "./Footer";
//import {Route} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Search/>
            <Carousel />
            <About/>
            <Information/>
            <Footer />
        </>
    )
}

export default Home;