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
<<<<<<< Updated upstream
                <Route path="/tripstory/create" element={ <Create /> } />
=======

                <Route path="/tripLoc" element={<TripLocDetail />} />
                <Route path="/tripstory" element={<TripStoryList />} />
                <Route path="/TripScheduleAddModal" element={<TripScheduleAddModal />} />
                <Route path="/flight" element={<Flight />} />

                <Route path="/tripSchedule" element={<TripSchedule />} />

                <Route path="/login" element={<LoginMain />} />
                <Route path="/mypage" element={<MyPageMain />} />
                <Route path="/logout" element={<LogoutModal />} />

                <Route path="/tripschedule1" element={<TripSchedule1 />} />
                <Route path="/tripschedule2" element={<TripSchedule2 />} />
                <Route path="/tripstory/create" element={<Create />} />


>>>>>>> Stashed changes
            </Routes>
        </BrowserRouter>
    );
};

export default App;
