import './App.css'
import SideBar from "./common/SideBar/SideBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CourseInfoPage from "./pages/CourseInfoPage";
import StudentSearchPage from "./pages/StudentSearchPage";
import {MdOutlineAnalytics} from "react-icons/md";
import {FaSearch} from "react-icons/fa";
import * as React from "react";
import StudentPage from "./pages/StudentPage";

const menuItems = [
    {
        path: "/",
        name: "Course Info",
        icon: <MdOutlineAnalytics/>
    },
    {
        path: "/students",
        name: "Student Search",
        icon: <FaSearch/>
    },
]

export default function App() {
    return (
        <BrowserRouter>
            <SideBar menuItems={menuItems}>
                <Routes>
                    <Route path={"/"} element={<CourseInfoPage/>}/>
                    <Route path={"/students"} element={<StudentSearchPage/>}/>
                    <Route path={"/students:id"} element={<StudentPage/>}/>
                </Routes>
            </SideBar>
        </BrowserRouter>

    );
}
