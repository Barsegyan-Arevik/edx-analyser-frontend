import * as React from 'react';
import {useState} from 'react';
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs';
import {NavLink} from 'react-router-dom';

type MenuItem = {
    path: string,
    name: string,
    icon: React.JSX.Element
}

type CourseSideBarProps = {
    children: React.JSX.Element,
    menuItems: Array<MenuItem>
}

export default function CourseSideBar(props: CourseSideBarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    const goToTop = () => {
        window.location.href = '#top';
    };

    return (
        <div className={'container'}>
            <div style={{width: isOpen ? '230px' : '50px'}} className={'sidebar'}>
                <div className={'top_section'}>
                    <h3 style={{display: isOpen ? 'block' : 'none', fontSize: '20px'}}>EdxAnalyzer</h3>
                    <div style={{marginLeft: isOpen ? '40px' : '0px', fontSize: '20px'}}>
                        <BsLayoutSidebarInsetReverse onClick={toggle}/>
                    </div>
                </div>
                {
                    props.menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className={({isActive}) =>
                            [
                                'link',
                                isActive ? 'active' : null,
                            ]
                                .filter(Boolean)
                                .join(' ')
                        } onClick={goToTop} style={{lineHeight: '1.2', padding: '8px 16px'}}>
                            <div className={'icon'} style={{fontSize: '20px'}}>{item.icon}</div>
                            <div style={{display: isOpen ? 'block' : 'none', fontSize: '14px'}} className={'link_text'}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{props.children}</main>
        </div>
    );
}
