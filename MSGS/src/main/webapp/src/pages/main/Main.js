import React from "react";

import styles from "./Main.module.css";

import StickyBanner from "../../components/common/StickyBanner";
import Events from "./main-top/Events";
import IconMenu from "./main-top/IconMenu";
import MainMenu from "./main-top/MainMenu";
import Best6 from "./main-recommend/Best6";
import BestReviews from "./main-recommend/BestReviews";
import ChatModal from "../../components/chatbot/ChatModal";

const Main = () => {
    return (
        <div className={styles["width-wrapper"]}>
            <StickyBanner />
            <ChatModal />

            <Events />
            <IconMenu />
            <MainMenu />

            <Best6 />
            <BestReviews />
        </div>
    );
};

export default Main;
