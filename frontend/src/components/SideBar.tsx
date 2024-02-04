import * as React from 'react';

import {
    FaTh, FaUserAlt, FaBars, FaSearch
} from "react-icons/fa"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import { MdOutlineAnalytics } from "react-icons/md";

const SideBar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem=[
        {
            path: "/",
            name:"Course Info",
            icon: <MdOutlineAnalytics />
        },
        {
            path: "/StudentSearch",
            name:"Student Search",
            icon: <FaSearch/>
        },
    ]

    const goToTop = () => {
        window.location.href = '#top';
    };

    return (
        <div className={"container"}>
            <div style={{width: isOpen ? "270px" : "50px"}} className={"sidebar"}>
                <div className={"top_section"}>
                    <h3 style={{display: isOpen ? "block" : "none"}} className={"logo"}>LogAnalyzer</h3>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={"bars"}>
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index}  className={({ isActive }) =>
                            [
                              "link",
                              isActive ? "active" : null,
                            ]
                              .filter(Boolean)
                              .join(" ")
                          } onClick={goToTop}>
                            <div className={"icon"}>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className={"link_text"}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SideBar;

// onClick={"window.location.href='#top"}