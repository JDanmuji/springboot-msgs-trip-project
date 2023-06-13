import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
