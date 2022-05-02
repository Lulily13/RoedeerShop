import React from 'react';
import Search from "./Search engine";
import Carousel from "./Carousel";
import About from "./About";

//import {Route} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Search/>
            <Carousel />
            <About/>
        </>
    )
}

export default Home;