import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import TripStoryList from "./pages/tripstory/tripstory-list/TripStoryList";
import TripScheduleAddModal from "./components/tripschedule/modal/TripScheduleAddModal";
import Flight from "./pages/flight/Flight";
import Main from "./pages/main/Main";
import TripSchedule from "./pages/tripschedule/TripSchedule";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginMain from "./pages/login/LoginMain";
import MyPageMain from "./pages/mypage/MyPageMain";
import LogoutModal from "./components/logout/LogoutModal";
import Signup1 from "./pages/signup/Signup1";
import SignupAgreement from "./pages/signup/SignupAgreement";
import SignupFindID from "./pages/signup/SignupFindID";
import AuthenticationNumber from "./pages/signup/AuthenticationNumber";
import TripSchedule1 from "./pages/tripschedule/tripschedule-details/tipschedule1/TripSchedule1";
import TripSchedule2 from "./pages/tripschedule/tripschedule2/TripSchedule2";
import TripStoryCreate from "./pages/tripstory/tripstory-create/TripStoryCreate";
import TripLocDetail from "./pages/tripplace/TripLocDetail";

import LoginSocial from "./components/login/LoginSocial";
import ReviewImgModal from "./components/tripplace/ReviewImgModal";

import ProfileUpdate from "./pages/mypage/ProfileUpdate";

import NickName from "./pages/signup/NickName";
import NonMemberResSearch from "./pages/signup/NonMemberResSearch";

import RegisterPhone from "./pages/signup/RegisterPhone";

import TripStoryDetail from "./pages/tripstory/tripstory-detail/TripStoryDetail";
import FlightWithData from "./pages/flight/flight-list/FlightWithData";
import { QueryClient, QueryClientProvider } from "react-query";
import TempUserCRUD from "./pages/temp-user/TempUserCRUD";



const queryClient = new QueryClient()


const App = () => {
    return (
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/tripLoc' element={<TripLocDetail />} />
						<Route path='/tripstory' element={<TripStoryList />} />
						<Route path='/TripScheduleAddModal' element={<TripScheduleAddModal />} />
						<Route path='/flight' element={<Flight />} />
						<Route path='/FlightWithData' element={<FlightWithData />} />
						<Route path='/tripSchedule' element={<TripSchedule />} />
						<Route path='/login' element={<LoginMain />} />
						<Route path='/naver' element={<LoginSocial />} />
						<Route path='/mypage' element={<MyPageMain />} />
						<Route path='/logout' element={<LogoutModal />} />
						<Route path='/signup1' element={<Signup1 />} />
						<Route path='/SignupAgreement' element={<SignupAgreement />} />

						<Route path='/SignupFindID' element={<SignupFindID />} />
						<Route path='/AuthenticationNumber' element={<AuthenticationNumber />} />
						<Route path='/tripschedule1' element={<TripSchedule1 />} />
						<Route path='/tripschedule2' element={<TripSchedule2 />} />
						<Route path='/tripstory/create' element={<TripStoryCreate />} />

						<Route path='/nickname' element={<NickName />} />
						<Route path='/noneMemberResSearch' element={<NonMemberResSearch />} />

						<Route path='/ReviewImgModal' element={<ReviewImgModal />} />

						<Route path='/mypage/profileUpdate' element={<ProfileUpdate />} />
						<Route path='/signup/registerPhone' element={<RegisterPhone />} />
						<Route path='/tripstory/detail' element={<TripStoryDetail />} />
					</Routes>

					<Footer />
				</BrowserRouter>
			</QueryClientProvider>
		)
};

export default App;