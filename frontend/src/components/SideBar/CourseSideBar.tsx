import * as React from 'react'
import { useState } from 'react'
import { BsLayoutSidebarInsetReverse } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
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
    const [isOpen, setIsOpen] = useState(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setIsOpen(true)
        }, 100)
        setTimeoutId(timeout)
    }

    const handleMouseLeave = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
            setTimeoutId(null)
        }
        setIsOpen(false)
    }

    const goToTop = () => {
        window.location.href = '#top'
    }

    return (
        <div className={'container'}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ width: isOpen ? '17rem' : '3.5rem' }}
                className={'sidebar'}
            >
                <div className={'top_section'}>
                    <div
                        style={{
                            display: isOpen ? 'block' : 'none',
                            fontSize: '2.3em',
                            lineHeight: '1em',
                            fontWeight: 'bold'
                        }}>{isOpen? 'EdxAnalyzer': '⠀'}
                    </div>
                    <div style={{ marginLeft: isOpen ? '4rem' : '0em', fontSize: '2em' }}>
                        <BsLayoutSidebarInsetReverse onClick={() => setIsOpen(!isOpen)}/>
                    </div>
                </div>

                {props.menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className={({ isActive }) =>
                        [
                            'link',
                            isActive ? 'active' : null
                        ]
                            .filter(Boolean)
                            .join(' ')
                    } onClick={goToTop} style={{ lineHeight: '1.2', padding: '0.8em 1.6em' }}>
                        <div className={'icon'} style={{ fontSize: '1.4rem' }}>{item.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'block', fontSize: '1.6em' }}
                             className={'link_text'}>{item.name}</div>
                    </NavLink>
                ))}
            {/*    {isOpen && (*/}
            {/*    <img*/}
            {/*        src={require('../../images/undraw_screen_time_vkev.png')}*/}
            {/*        style={{width: '270px', height: '240px', verticalAlign: 'bottom', transition: 'opacity 0.5s ease'}}*/}
            {/*    />*/}
            {/*)}*/}
            </div>
            <main>{props.children}</main>
        </div>
    )
}
