import React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import Jewelry from "./Jewelry";
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