import React, { useState } from "react";
import styles from "./MyPageMain.module.css";
import { Link } from "react-router-dom";
import MyReview from "../../components/mypage/mypage-review/MyReview";
import MySchedule from "../../components/mypage/mypage-schedule/MySchedule";
import MyStory from "../../components/mypage/mypage-story/MyStory";

const MyPageMain = () => {
    const data = [
        {
            id: 1,
            city: "Jeju",
            fullCityName: "대한민국 제주도",
            email: "masilgasil@gmail.com",
            tourName: "Test1",
            tourStartDay: "2023.07.06",
            tourEndDay: "2023.07.10",
            lastUpdateDay: "2023.05.30",
            level: "L",
            selectedLocation: "19",
            img: process.env.PUBLIC_URL + "/images/jeju.jfif",
        },
        {
            id: 2,
            city: "Gangwon",
            fullCityName: "대한민국 강원도",
            email: "silsil115@gmail.com",
            tourName: "Test2",
            tourStartDay: "2023.07.15",
            tourEndDay: "2023.07.20",
            lastUpdateDay: "2023.02.30",
            level: "L",
            selectedLocation: "20",
            img: process.env.PUBLIC_URL + "/images/jeju.jfif",
        },
        {
            id: 3,
            city: "Gwangju",
            fullCityName: "대한민국 광주광역시",
            email: "eysilgasil@gmail.com",
            tourName: "Test3",
            tourStartDay: "2023.08.07",
            tourEndDay: "2023.08.12",
            lastUpdateDay: "2023.03.15",
            level: "L",
            selectedLocation: "21",
            img: process.env.PUBLIC_URL + "/images/jeju.jfif",
        },
        {
            id: 4,
            city: "Busan",
            fullCityName: "대한민국 부산광역시",
            email: "yosilgasil@gmail.com",
            tourName: "Test4",
            tourStartDay: "2023.09.22",
            tourEndDay: "2023.09.28",
            lastUpdateDay: "2023.04.20",
            level: "L",
            selectedLocation: "22",
            img: process.env.PUBLIC_URL + "/images/jeju.jfif",
        },
    ];

    const [navTitle, setNavTitle] = useState("나의 여행 일정");

    const [isTripDay, setIsTripDay] = useState(true);
    const [isTripReview, setIsTripReview] = useState(false);
    const [isTripStory, setIsTripStory] = useState(false);

    const tripDayHandler = (e) => {
        setIsTripDay(true);
        setIsTripReview(false);
        setIsTripStory(false);
        setNavTitle(e.target.innerText);
    };
    const tripReviewHandler = (e) => {
        setIsTripDay(false);
        setIsTripReview(true);
        setIsTripStory(false);
        setNavTitle(e.target.innerText);
    };
    const tripStoryHandler = (e) => {
        setIsTripDay(false);
        setIsTripReview(false);
        setIsTripStory(true);
        setNavTitle(e.target.innerText);
    };

    return (
        <div className={styles["mypage-wrap"]}>
            <div className={styles["profile-wrap"]}>
                <div className={styles["profile-image"]}></div>
                <button className={styles["update-profile-button"]}>
                    <a href="./ProfileUpdate.js">프로필 수정</a>
                </button>
            </div>
            <div className={styles["list-menu-nav"]}>
                <div className={isTripDay ? styles["selected-list-menu-nav"] : styles["not-selected-list-menu-nav"]} onClick={tripDayHandler}>
                    나의 여행 일정
                </div>
                <div className={isTripReview ? styles["selected-list-menu-nav"] : styles["not-selected-list-menu-nav"]} onClick={tripReviewHandler}>
                    나의 리뷰
                </div>
                <div className={isTripStory ? styles["selected-list-menu-nav"] : styles["not-selected-list-menu-nav"]} onClick={tripStoryHandler}>
                    나의 여행 이야기
                </div>
            </div>
            <div className={styles["list-main-content"]}>
                <div className={styles["list-title-text"]}>
                    <span className={styles["list-title-text-main"]}>{navTitle}</span>
                    <span className={styles["list-title-text-count"]}>{data.length}</span>
                </div>
                <div className={styles["list-sort-section"]}>
                    {navTitle === "나의 여행 일정" && data.map((item) => <MySchedule key={item.id} data={item} />)}
                    {navTitle === "나의 리뷰" && <MyReview />}
                    {navTitle === "나의 여행 이야기" && data.map((item) => <MyStory key={item.id} data={item} />)}
                </div>
            </div>
        </div>
    );
};

export default MyPageMain;
