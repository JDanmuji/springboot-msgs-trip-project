import React from 'react';

import LocContainerHeader from "./LocContainerHeader";
import styles from "./LocContainer.module.css";
import LocContainerImg from "./LocContainerImg";
import LocContainerEvent from "./LocContainerEvent";
import LocSubHeader from "./LocSubHeader";
import LocSubSection from "./LocSubSection";
import LocMap from "./LocMap";
import LocReview from "./LocReview";
import LocRelated from "./LocRelated";
const LocContainer = () => {
    return (
        <div className={styles["container-wrapper"]}>
            {/* ----- title -----*/}
            <LocContainerHeader />
            <LocContainerImg />
            <LocContainerEvent />

            {/* ------ Sub Content------ */}
            <LocSubHeader />
            <LocSubSection />

            {/* ----- Map ------*/}
            <LocMap />

            {/* ----- review ------*/}
            <LocReview />

            {/* ----- Related place ------*/}
            <LocRelated />
        </div>
    );
};

export default LocContainer;