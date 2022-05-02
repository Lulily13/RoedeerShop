import React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Information from "./Information";
import Footer from "./Footer";

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
            <Information/>
            <Footer />
        </HashRouter>
    )
}

export default App;