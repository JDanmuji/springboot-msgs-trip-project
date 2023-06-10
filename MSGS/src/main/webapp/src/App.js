import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import TripStoryList from "./pages/tripstory/tripstory-list/TripStoryList";


const App = () => {
    return (
        <BrowserRouter>
            <Header />s

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tripstory" element={<TripStoryList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
