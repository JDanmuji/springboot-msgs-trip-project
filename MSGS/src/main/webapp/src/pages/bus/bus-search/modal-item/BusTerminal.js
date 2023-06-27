import React from 'react';
import styles from "../BusSchedule.module.css";

const BusTerminal = ({terminalName, onClick, showModal, children}) => {
    return (
        <div className={styles["bus-terminal-container"]}>
            <div className={styles["bus-terminal"]} onClick={onClick}>
                <img
                    src={process.env.PUBLIC_URL + "/images/icon_location.png"}
                    alt="icon_location"
                />
                {terminalName.terminalNm}
            </div>
            {showModal && children}
        </div>
    );
};

export default BusTerminal;