import './App.css'
import CourseSideBar from './components/SideBar/CourseSideBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StudentsPage from './pages/StudentsPage/StudentsPage';
import {MdOutlineAnalytics, MdOutlineForum} from 'react-icons/md';
import * as React from 'react';
import {IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline} from 'react-icons/io5';
import {FiMousePointer} from 'react-icons/fi';
import {RiTeamLine} from 'react-icons/ri';
import PagesSectionPage from './pages/PagesSectionPage/PagesSectionPage';
import CoursesPage from './pages/CoursesPage/CoursesPage'
import VideoSectionPage from './pages/VideoSectionPage'
import ForumSectionPage from './pages/ForumSectionPage'
import ProblemSectionPage from './pages/ProblemSectionPage'
import TextbookSectionPage from './pages/TextbookSectionPage'
import CommonSectionPage from './pages/CommonSectionPage'

const COURSE_ID = '111'

const menuItems = [
    {
        path: `/courses/${COURSE_ID}/common`,
        name: 'Общая информация',
        icon: <MdOutlineAnalytics/>
    },
    {
        path: `/courses/${COURSE_ID}/pages`,
        name: 'Популярность страниц',
        icon: <FiMousePointer/>
    },
    {
        path: `/courses/${COURSE_ID}/textbook`,
        name: 'Работа с учебником',
        icon: <IoBookOutline/>
    },
    {
        path: `/courses/${COURSE_ID}/video`,
        name: 'Просмотры видео',
        icon: <IoVideocamOutline/>
    },
    {
        path: `/courses/${COURSE_ID}/problems`,
        name: 'Решение задач',
        icon: <IoExtensionPuzzleOutline/>
    },
    {
        path: `/courses/${COURSE_ID}/forum`,
        name: 'Активность на форуме',
        icon: <MdOutlineForum/>
    },
    {
        path: `/courses/${COURSE_ID}/students`,
        name: 'Студенты',
        icon: <RiTeamLine/>,
    },
]

export default function App() {
    return (
        <BrowserRouter>
            <CourseSideBar menuItems={menuItems}>
                <Routes>
                    {/*the following two should be out of sidebar*/}
                    <Route path={'/courses'} element={<CoursesPage/>}/>
                    <Route path={'/courses/:courseId/common'} element={<CommonSectionPage/>}/>
                    <Route path={'/courses/:courseId/pages'} element={<PagesSectionPage/>}/>
                    <Route path={'/courses/:courseId/video'} element={<VideoSectionPage/>}/>
                    <Route path={'/courses/:courseId/forum'} element={<ForumSectionPage/>}/>
                    <Route path={'/courses/:courseId/problems'} element={<ProblemSectionPage/>}/>
                    <Route path={'/courses/:courseId/textbook'} element={<TextbookSectionPage/>}/>
                    <Route path={'/courses/:courseId/students'} element={<StudentsPage/>}/>
                </Routes>
            </CourseSideBar>
        </BrowserRouter>
    );
}
