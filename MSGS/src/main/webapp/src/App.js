import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import Create from "./pages/tripstory/tripstory-create/Create";


const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tripstory/create" element={ <Create /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
