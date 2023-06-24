import React from "react";

import styles from "./MainTop.module.css";
import MainMenuItem from "./MainMenuItem";

const MainMenu = () => {
    const mainMenuData = [
        {
            title: "여행 일정",
            desc1: "나만의 여행 일정을 생성하고",
            desc2: "친구들과 공유해보세요!",
            img: "trip_schedule_icon.png",
            to: "/tripschedule1",
        },
        {
            title: "여행 이야기",
            desc1: "나의 여행 이야기를 공유하고",
            desc2: "사람들과 소통해보세요!",
            img: "trip_story_icon.png",
            to: "/tripstory",
        },
    ];

    return (
        <section className={styles["section-main-menu"]}>
            {mainMenuData.map((data) => (
                <MainMenuItem
                    key={data.title}
                    title={data.title}
                    desc1={data.desc1}
                    desc2={data.desc2}
                    img={data.img}
                    to={data.to}
                />
            ))}
        </section>
    );
};

export default MainMenu;
