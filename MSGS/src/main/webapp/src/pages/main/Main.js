import React, { useEffect, useReducer, useState } from "react";

import styles from "./Main.module.css";
import Events from "./Events";
import StickyBanner from "./StickyBanner";

const Main = () => {
    return (
        <div className={styles["width-wrapper"]}>
            <StickyBanner />
            <Events />
        </div>
    );
};

export default Main;
