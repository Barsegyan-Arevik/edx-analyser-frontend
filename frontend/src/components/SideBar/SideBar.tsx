import * as React from 'react';
import {useState} from 'react';
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import {FaBars} from "react-icons/fa"
import {NavLink} from "react-router-dom";

type MenuItem = {
    path: string,
    name: string,
    icon: React.JSX.Element
}

type SideBarProps = {
    children: React.JSX.Element,
    menuItems: Array<MenuItem>
}

export default function SideBar(props: SideBarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    const goToTop = () => {
        window.location.href = '#top';
    };

    return (
        <div className={"container"}>
            <div style={{width: isOpen ? "230px" : "50px"}} className={"sidebar"}>
                <div className={"top_section"}>
                    <h3 style={{display: isOpen ? "block" : "none", fontSize: "23px"} } className={"logo"}>LogAnalyzer</h3>
                    <div style={{marginLeft: isOpen ? "30px" : "0px"}} className={"bars"}>
                        <BsLayoutSidebarInsetReverse onClick={toggle}/>
                    </div>
                </div>
                {
                    props.menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={({isActive}) =>
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
            <main>{props.children}</main>
        </div>
    );
};

// onClick={"window.location.href='#top"}