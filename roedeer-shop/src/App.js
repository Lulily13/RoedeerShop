import React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";

import Header from "./Header";

import Home from "./Home";

import Jewelry from "./Jewelry";

import Necklaces from "./Necklaces";
import Rings from "./Rings";
import Earrings from "./Earrings";
import Others from "./Others";

import New from "./New"
import HowToBuy from "./HowToBuy";
import Contact from "./Contact";

import Information from "./Information";
import Footer from "./Footer";


const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/jewelry"} element={<Jewelry />} />
                <Route path={"/necklaces"} element={<Necklaces />} />
                <Route path={"/rings"} element={<Rings />} />
                <Route path={"/earrings"} element={<Earrings />} />
                <Route path={"/others"} element={<Others />} />
                <Route path={"/new"} element={<New />} />
                <Route path={"/how-to-buy"} element={<HowToBuy />} />
                <Route path={"/contact"} element={<Contact />} />
            </Routes>
            <Information/>
            <Footer />
        </HashRouter>
    )
}

export default App;