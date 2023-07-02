import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import styles from "./MyPageMain.module.css";
import CitiesData from "../tripschedule/tripschedule-details/tipschedule1/CitiesData";

import MyReview from "./mypage-review/MyReview";
import MySchedule from "./mypage-schedule/MySchedule";
import MyStory from "./mypage-story/MyStory";
import Loading from "../../components/common/Loading";
import { fetchMyTripScheduleList } from "./mypage-data/myTripScheduleData";
import { fetchMyProfile } from "./mypage-data/myProfileData";
import { axiosMyStoryData } from "./mypage-data/myStoryData";
import axios from "axios";
import { fetchMyReview } from "./mypage-data/MyReviewData";

const MyPageMain = () => {
  //   const data = [
  //     {
  //       id: 1,
  //       city: "JEJU",
  //       fullCityName: "제주도",
  //       email: "masilgasil@gmail.com",
  //       tourName: "Test1",
  //       tourStartDay: "2023.07.06",
  //       tourEndDay: "2023.07.10",
  //       lastUpdateDay: "2023.05.30",
  //       level: "L",
  //       selectedLocation: "19",
  //       img: process.env.PUBLIC_URL + "/images/jeju.jfif",
  //     },
  //     {
  //       id: 2,
  //       city: "GANGWON",
  //       fullCityName: "강원도",
  //       email: "silsil115@gmail.com",
  //       tourName: "Test2",
  //       tourStartDay: "2023.07.15",
  //       tourEndDay: "2023.07.20",
  //       lastUpdateDay: "2023.02.30",
  //       level: "L",
  //       selectedLocation: "20",
  //       img: "https://images.pexels.com/photos/17363610/pexels-photo-17363610.jpeg",
  //     },
  // {
  //     id: 3,
  //     city: "Gwangju",
  //     fullCityName: "대한민국 광주광역시",
  //     email: "eysilgasil@gmail.com",
  //     tourName: "Test3",
  //     tourStartDay: "2023.08.07",
  //     tourEndDay: "2023.08.12",
  //     lastUpdateDay: "2023.03.15",
  //     level: "L",
  //     selectedLocation: "21",
  //     img: process.env.PUBLIC_URL + "/images/jeju.jfif",
  // },
  // {
  //     id: 4,
  //     city: "Busan",
  //     fullCityName: "대한민국 부산광역시",
  //     email: "yosilgasil@gmail.com",
  //     tourName: "Test4",
  //     tourStartDay: "2023.09.22",
  //     tourEndDay: "2023.09.28",
  //     lastUpdateDay: "2023.04.20",
  //     level: "L",
  //     selectedLocation: "22",
  //     img: process.env.PUBLIC_URL + "/images/jeju.jfif",
  // },
  //   ];

  const [navTitle, setNavTitle] = useState("나의 여행 일정");

  const [isTripDay, setIsTripDay] = useState(true);
  const [isTripReview, setIsTripReview] = useState(false);
  const [isTripStory, setIsTripStory] = useState(false);

  // API 데이터 담을 state
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState('');
  const [myReview, setMyReview] = useState([]);
  const [myStoryData, setMyStoryData] = useState([]);

  const tripDayHandler = (e) => {
    setIsTripDay(true);
    setIsTripReview(false);
    setIsTripStory(false);
    setNavTitle("나의 여행 일정");
  };
  const tripReviewHandler = (e) => {
    setIsTripDay(false);
    setIsTripReview(true);
    setIsTripStory(false);
    setNavTitle("나의 리뷰");
  };
  const tripStoryHandler = (e) => {
    setIsTripDay(false);
    setIsTripReview(false);
    setIsTripStory(true);
    setNavTitle("나의 여행 이야기");
  };

  // 여행지 이미지 가져오기
//   let selectedCities = CitiesData.filter(
//     (item) => item.areaTitle === "가평&#183;양평"
//   );
  // 가평, 양평 데이터 뒷단에서 가져온 데이터로 교체
  //console.log(selectedCities[0].imageUrl);

  // 로그인 쿠키 반환
  const tokenValue = Cookies.get("token");
  console.log("======================Hello MyPage Token", tokenValue);

  useEffect(() => {
    // back-end에서 API 호출
    const fetchProfile = async () => {
        const profileData = await fetchMyProfile(tokenValue);
        setProfile(profileData.imgPath);
    };
    const fetchData = async () => {
      const fetchedData = await fetchMyTripScheduleList(tokenValue);
      setData(fetchedData);
    };
    const fetchReviewData = async () => {
        const myReviewData = await fetchMyReview(tokenValue);
        setMyReview(myReviewData);
      };  
    const axiosStoryData = async () => {
        const myStoryData = await axiosMyStoryData(tokenValue);
        setMyStoryData(myStoryData);
    };

    fetchProfile();
    fetchData();
    fetchReviewData();
    axiosStoryData();
  }, [tokenValue]);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div className={styles["mypage-wrap"]}>
          <div className={styles["profile-wrap"]}>
            <div className={styles["profile-image"]}>
                <img src={profile} alt="userProfile" />
            </div>
            <Link to="/mypage/ProfileUpdate">
              <button className={styles["update-profile-button"]}>
                프로필 수정
              </button>
            </Link>
          </div>
          <nav className={styles["list-menu-nav"]}>
            <div
              className={
                isTripDay
                  ? styles["selected-list-menu-nav"]
                  : styles["not-selected-list-menu-nav"]
              }
              onClick={tripDayHandler}
            >
              나의 여행 일정 <span>{data.length}</span>
            </div>
            <div
              className={
                isTripReview
                  ? styles["selected-list-menu-nav"]
                  : styles["not-selected-list-menu-nav"]
              }
              onClick={tripReviewHandler}
            >
              나의 리뷰 <span>{myReview.length}</span>
            </div>
            <div
              className={
                isTripStory
                  ? styles["selected-list-menu-nav"]
                  : styles["not-selected-list-menu-nav"]
              }
              onClick={tripStoryHandler}
            >
              나의 여행 이야기<span>{myStoryData.length}</span>
            </div>
          </nav>
          <div className={styles["list-main-content"]}>
            <section className={styles["list-sort-section"]}>
              {navTitle === "나의 여행 일정" &&
                data.map((item, index) => (
                  <MySchedule key={index} data={item} />
                ))}
              {navTitle === "나의 리뷰" && <MyReview data={myReview} />}
              {navTitle === "나의 여행 이야기" && <MyStory data={myStoryData} />}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPageMain;
