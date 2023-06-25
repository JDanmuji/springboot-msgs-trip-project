import React from 'react';

import styles from "../SelectPersonInfo.module.css"

const SeatOption = ({label, isSelected, onSelectionChange}) => {
    return (
        <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={onSelectionChange}
        >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
                {label}
            </div>
            {isSelected && (
                <img
                    className={styles["width-wrapper-inner-right-inner-img"]}
                    src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                    alt="icon_check"
                />
            )}
        </div>
    );
};

export default SeatOption;
