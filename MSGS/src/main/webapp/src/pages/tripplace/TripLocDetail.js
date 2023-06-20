import React from "react";

import styles from "./LocContainer.module.css";

import LocTop from "./LocTop";
import LocContainerEvent from "./LocContainerEvent";
import LocSubSection from "./LocSubSection";
import LocMap from "./LocMap";
import LocReview from "./LocReview";
import LocRelated from "./LocRelated";

const TripLocDetail = () => {
    return (
        <div className={styles["container-wrapper"]}>
            <LocTop />
            <LocContainerEvent />

            <LocSubSection />
            <LocMap />

            <LocReview />
            <LocRelated />
        </div>
    );
};

export default TripLocDetail;
