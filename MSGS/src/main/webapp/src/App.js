import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import TripStoryList from "./pages/tripstory/tripstory-list/TripStoryList";
import TripScheduleAddModal from "./components/tripschedule/modal/TripScheduleAddModal";
import Flight from "./pages/flight/Flight";


const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tripstory" element={<TripStoryList />} />
                <Route path="/TripScheduleAddModal" element={<TripScheduleAddModal />} />
                <Route path="/flight" element={<Flight />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
