import * as React from 'react';
import {useState} from 'react';
import {BsLayoutSidebarInsetReverse} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import '../../App.css'

type MenuItem = {
    path: string,
    name: string,
    icon: React.JSX.Element
    submenu?: MenuItem[]
}

type SideBarProps = {
    children: React.JSX.Element,
    menuItems: Array<MenuItem>
}

export default function SideBar(props: SideBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCourseActive, setIsCourseActive] = useState(false); // Состояние для отслеживания активности пункта "Курс" и его подменю

    const toggle = () => setIsOpen(!isOpen);

    const goToTop = () => {
        window.location.href = '#top';
    };

    const handleCourseClick = () => {
        setIsCourseActive(true);
    };

    return (
        <div className={"container"}>
            <div style={{width: isOpen ? "300px" : "50px"}} className={"sidebar"}>
                <div className={"top_section"}>
                    <h3 style={{display: isOpen ? "block" : "none", fontSize: "23px"}}
                        className={"logo"}>LogAnalyzer</h3>
                    <div style={{marginLeft: isOpen ? "110px" : "0px"}} className={"bars"}>
                        <BsLayoutSidebarInsetReverse onClick={toggle}/>
                    </div>
                </div>
                {props.menuItems.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.path} className={({isActive}) =>
                            [
                                "link",
                                isActive ? "active" : null,
                                item.name === "Курс" && (isActive || isCourseActive) ? "activeMenu" : null, // Добавляем класс для выделения "Курс" и его подменю
                            ]
                                .filter(Boolean)
                                .join(" ")
                        }
                                 onClick={item.name === "Курс" ? handleCourseClick : goToTop}> {/* Обработчик клика для отслеживания активации пункта "Курс" */}
                            <div className={"icon"}>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}}
                                 className={"link_text"}>{isOpen ? item.name : null}</div>
                        </NavLink>
                        {item.submenu && (
                            <div className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <NavLink key={subIndex} to={subItem.path}
                                             className={({isActive}) =>
                                                 [
                                                     "submenu_link",
                                                     isActive ? "submenu_link_active" : null,
                                                     item.name === "Курс" && (isActive || isCourseActive) ? "activeMenu" : null, // Добавляем класс для выделения "Курс" и его подменю
                                                 ]
                                                     .filter(Boolean)
                                                     .join(" ")
                                             }>
                                        <div
                                            style={{
                                                paddingLeft: isOpen ? "20px" : "0px",
                                                display: "flex"
                                            }}
                                        >
                                            <div className="submenu_icon">{subItem.icon}</div>
                                            <div className="submenu_link_text"
                                                 style={{
                                                     display: isOpen ? "block" : "none",
                                                     paddingLeft: isOpen ? "5px" : "0px"
                                                 }}>
                                                {subItem.name}
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <main>{props.children}</main>
        </div>
    );
}

// onClick={"window.location.href='#top"}