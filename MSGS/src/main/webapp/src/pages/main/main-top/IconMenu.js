import React from "react";
import IconItem from "./IconItem";

import styles from "./MainTop.module.css";

const IconMenu = () => {
    const iconMenuData = [
        { to: "/flight", icon: "airplane_ticket", menuText: "비행기 삯" },
        { to: "/bus", icon: "bus", menuText: "버스 삯" },
        { to: "/restaurantList", icon: "rice", menuText: "맛집" },
        { to: "/staylist", icon: "bukchon_hanok", menuText: "숙박" },
    ];

    return (
        <div className={styles["icon-menu"]}>
            {iconMenuData.map((data) => (
                <IconItem
                    key={data.menuText}
                    to={data.to}
                    icon={data.icon}
                    menuText={data.menuText}
                />
            ))}
        </div>
    );
};

export default IconMenu;
