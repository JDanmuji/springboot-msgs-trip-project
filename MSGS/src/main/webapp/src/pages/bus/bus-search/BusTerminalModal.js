import React from 'react';
import styles from "./BusTerminalModal.module.css";
import items from "../bus-data/BusTerminalData";

const BusTerminalModal = (props) => {
    return (
        <div className={styles["modal-wrapper"]}>
            <div className={styles["modal-head-wrap"]}>
                <h1 className={styles["modal-title"]}>도시 선택</h1>
                {
                    props.showFromBusModal &&
                    <span onClick={props.selectFromBusModal}>
                          <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
                    </span>
                }
                {
                    props.showToBusSelect &&
                    <span onClick={props.selectToBusModal}>
                          <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
                    </span>
                }
            </div>
            {/* 검색창 */}
            <div className={styles["bus-select-box"]}>
                <input type="text" placeholder="도시, 공항명 검색" />
            </div>


            <div className={styles["terminal-list"]}>
                {/* terminal data export */}
                {items.map((data, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div
                                className={styles["terminal-select-items"]}
                                key={data.id}
                            >
                                <div className={styles["terminal-select-box"]}>
                                    <div className={styles["terminal-select-box-location"]}>
                                        {data.location}
                                    </div>
                                    {items[index + 1] && (
                                        <>
                                            <div className={styles["terminal-select-box-bar"]}>│</div>
                                            <div className={styles["terminal-select-box-location"]}>
                                                {items[index+1].location}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default BusTerminalModal;