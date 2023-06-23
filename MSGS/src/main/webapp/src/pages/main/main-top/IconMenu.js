import React from "react";
import IconItem from "./IconItem";

import styles from "./MainTop.module.css";

const IconMenu = () => {
    const iconMenuData = [
        { href: "/flight", icon: "airplane_ticket", menuText: "비행기 삯" },
        { href: "/bus", icon: "bus", menuText: "버스 삯" },
        { href: "/", icon: "rice", menuText: "맛집" },
        { href: "/", icon: "bukchon_hanok", menuText: "숙박" },
    ];

    return (
        <div className={styles["icon-menu"]}>
            {iconMenuData.map((data) => (
                <IconItem
                    key={data.menuText}
                    href={data.href}
                    icon={data.icon}
                    menuText={data.menuText}
                />
            ))}
        </div>
    );
};

export default IconMenu;
