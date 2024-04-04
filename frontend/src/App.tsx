import './App.css'
import SideBar from "./components/SideBar/SideBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage";
import StudentSearchPage from "./pages/StudentSearchPage/StudentSearchPage";
import {MdOutlineAnalytics, MdOutlineForum} from "react-icons/md";
import * as React from "react";
import StudentPage from "./pages/StudentPage";
import {courseAnalyticsProps, videoSectionProps} from './pages/CourseInfoPage/CourseInfoPageData'
import {CourseInfoPageProps} from './pages/CourseInfoPage/CourseInfoPage';
import {documentSectionProps} from './pages/CourseInfoPage/CourseInfoPageData';
import {IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOffOutline} from "react-icons/io5";
import {FiMousePointer} from "react-icons/fi";
import {RiTeamLine} from "react-icons/ri";
import {IoVideocamOutline} from "react-icons/io5";
import CoursePages from "./pages/CoursePages/CoursePages";

const courseInfoPageProps: CourseInfoPageProps = {
    courseAnalyticsProps: courseAnalyticsProps,
    videoSectionProps: videoSectionProps,
    documentSectionProps: documentSectionProps
}

const menuItems = [
    {
        path: "/",
        name: "Курс",
        icon: <MdOutlineAnalytics/>,
        submenu: [
            {
                path: "/courses/:courseId/common",
                name: "Общая информация",
                icon: <MdOutlineAnalytics/>
            },
            {
                path: "/courses/:courseId/pages",
                name: "Популярность страниц",
                icon: <FiMousePointer/>
            },
            {
                path: "/courses/:courseId/textbook",
                name: "Работа с учебником",
                icon: <IoBookOutline/>
            },
            {
                path: "/courses/:courseId/video",
                name: "Просмотры видео",
                icon: <IoVideocamOutline/>
            },
            {
                path: "/courses/:courseId/problems",
                name: "Решение задач",
                icon: <IoExtensionPuzzleOutline/>
            },
            {
                path: "/courses/:courseId/forum",
                name: "Активность на форуме",
                icon: <MdOutlineForum/>
            },
        ]

    },
    {
        path: "/courses/:courseId/students",
        name: "Студенты",
        icon: <RiTeamLine/>
    },
]

export default function App() {
    return (
        <BrowserRouter>
            <SideBar menuItems={menuItems}>
                <Routes>
                    <Route path={"/"} element={<CourseInfoPage {...courseInfoPageProps}/>}/>
                    <Route path={"/courses/:courseId/common"} element={<CourseInfoPage {...courseInfoPageProps}/>}/>
                    <Route path={"/courses/:courseId/pages"} element={<CoursePages/>}/>

                    <Route path={"/courses/:courseId/students"} element={<StudentSearchPage/>}/>
                    <Route path={"/courses/:courseId/students/:id"} element={<StudentPage/>}/>
                </Routes>
            </SideBar>
        </BrowserRouter>

    );
}
