import * as React from 'react'
import { useState } from 'react'
import { BsLayoutSidebarInsetReverse } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import './CourseSideBar.css'
import { Link } from 'react-router-dom';

type MenuItem = {
    path: string,
    name: string,
    icon: React.JSX.Element
}

type CourseSideBarProps = {
    children: React.ReactNode; // Тип для children может быть React.ReactNode
    menuItems: MenuItem[]; // Массив элементов меню
    currentCourseId: string; // ID текущего курса
};


export default function CourseSideBar(props: CourseSideBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const goToTop = () => {
        window.location.href = '#top';
    };

    // Фильтрация элементов меню на основе currentCourseId
    const filteredMenuItems = props.menuItems.filter(item => item.path.includes(props.currentCourseId));

    return (
        <div className={'container'}>
            <div style={{width: isOpen ? '17rem' : '3.5rem'}} className={'sidebar'}>
                <div className={'top_section'}>
                    <div style={{display: isOpen ? 'block' : 'none', fontSize: '2.3em', fontWeight: 'bold'}}>EdxAnalyzer</div>
                    <div style={{marginLeft: isOpen ? '4rem' : '0em', fontSize: '2em'}}>
                        <BsLayoutSidebarInsetReverse onClick={toggle}/>
                    </div>
                </div>
                {/* Добавление ссылки на страницу с доступными курсами */}
               {isOpen ? (
                    <NavLink to="/" onClick={goToTop} style={{ lineHeight: '1.2', padding: '0.8em 1.6em' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={'icon'} style={{ fontSize: '1.4rem' }}>{props.menuItems[0].icon}</div> {/* Используем иконку из первого элемента */}
                            <div style={{ fontSize: '1.6em', marginLeft: '1rem' }}>Домой</div>
                        </div>
                    </NavLink>
                ) : (
                    <NavLink to="/" onClick={goToTop} style={{ lineHeight: '1.2', padding: '0.8em 1.6em' }}>
                        <div className={'icon'} style={{ fontSize: '1.4rem' }}>{props.menuItems[0].icon}</div> {/* Используем иконку из первого элемента */}
                    </NavLink>
                )}
                {/* Используйте отфильтрованные элементы меню */}
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
                        <div style={{display: isOpen ? 'block' : 'none', fontSize: '1.6em'}} className={'link_text'}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{props.children}</main>
        </div>
    );
}
