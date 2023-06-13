import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import LoginMain from "./pages/login/LoginMain";
import MyPageMain from "./pages/mypage/MyPageMain";
import LogoutModal from "./components/logout/LogoutModal";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginMain />} />
                <Route path="/mypage" element={<MyPageMain />} />
                <Route path="/logout" element={<LogoutModal />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
