import './App.css'
import SideBar from "./components/SideBar/SideBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CourseInfoPage from "./pages/CourseInfoPage";
import StudentSearchPage from "./pages/StudentSearchPage";
import {MdOutlineAnalytics} from "react-icons/md";
import {FaSearch} from "react-icons/fa";
import * as React from "react";
import StudentPage from "./pages/StudentPage";
import { courseAnalyticsProps, videoSectionProps } from './pages/CourseInfoPageData'
import { CourseInfoPageProps } from './pages/CourseInfoPage';
import { documentSectionProps } from './pages/CourseInfoPageData';


const courseInfoPageProps: CourseInfoPageProps = {
    courseAnalyticsProps: courseAnalyticsProps,
    videoSectionProps: videoSectionProps,
    documentSectionProps: documentSectionProps
}

const menuItems = [
    {
        path: "/",
        name: "О курсе",
        icon: <MdOutlineAnalytics/>
    },
    {
        path: "/students",
        name: "Поиск студента",
        icon: <FaSearch/>
    },
]

export default function App() {
    return (
        <BrowserRouter>
            <SideBar menuItems={menuItems}>
                <Routes>
                    <Route path={"/"} element={<CourseInfoPage {...courseInfoPageProps}/>}/>
                    <Route path={"/students"} element={<StudentSearchPage/>}/>
                    <Route path={"/students:id"} element={<StudentPage/>}/>
                </Routes>
            </SideBar>
        </BrowserRouter>

    );
}
