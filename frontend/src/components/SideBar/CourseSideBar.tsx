import * as React from 'react'
import {useState} from 'react'
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import './CourseSideBar.css'

type MenuItem = {
    path: string,
    name: string,
    icon: React.JSX.Element
}

type CourseSideBarProps = {
    children: React.ReactNode;
    menuItems: MenuItem[];
    currentCourseId: string;
};


export default function CourseSideBar(props: CourseSideBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const goToTop = () => {
        window.location.href = '#top';
    };

    const filteredMenuItems = props.menuItems.filter(item => item.path.includes(props.currentCourseId));

    return (
        <div className={'container'}>
            <div style={{width: isOpen ? '17rem' : '3.5rem'}} className={'sidebar'}>
                <div className={'top_section'}>
                    <div
                        style={{display: isOpen ? 'block' : 'none', fontSize: '2.3em', fontWeight: 'bold'}}>EdxAnalyzer
                    </div>
                    <div style={{marginLeft: isOpen ? '4rem' : '0em', fontSize: '2em'}}>
                        <BsLayoutSidebarInsetReverse onClick={toggle}/>
                    </div>
                </div>

                <NavLink
                    to="/"
                    onClick={goToTop}
                    className={({isActive}) =>
                        [
                            'link',
                            isActive ? 'active' : null,
                        ]
                            .filter(Boolean)
                            .join(' ')
                    }
                    style={{
                        lineHeight: '1',
                        padding: '1em 0',
                    }}
                >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className={isOpen ? 'home-icon-open' : 'home-icon-close'}>{props.menuItems[0].icon}</div>
                        <div style={{display: isOpen ? 'block' : 'none'}}
                             className={'home-text'}>Домой
                        </div>
                    </div>
                </NavLink>

                {filteredMenuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className={({isActive}) =>
                        [
                            'link',
                            isActive ? 'active' : null,
                        ]
                            .filter(Boolean)
                            .join(' ')
                    } onClick={goToTop} style={{lineHeight: '1.2', padding: '0.8em 1.6em'}}>
                        <div className={'icon'} style={{fontSize: '1.4rem'}}>{item.icon}</div>
                        <div style={{display: isOpen ? 'block' : 'none', fontSize: '1.6em'}}
                             className={'link_text'}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{props.children}</main>
        </div>
    );
}
