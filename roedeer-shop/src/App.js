import React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Information from "./Information";
import Footer from "./Footer";
import Jewelry from "./Jewelry";

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/jewelry"} element={<Jewelry />} />
            </Routes>
            <Information/>
            <Footer />
        </HashRouter>
    )
}

export default App;