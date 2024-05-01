import * as React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import CourseSideBar from './components/SideBar/CourseSideBar'
import StudentsPage from './pages/StudentsPage'
import { MdOutlineAnalytics, MdOutlineForum } from 'react-icons/md'
import { FiMousePointer } from 'react-icons/fi'
import { IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline } from 'react-icons/io5'
import { RiTeamLine } from 'react-icons/ri'
import WelcomePage from './pages/WelcomePage'
import { HiOutlineHome } from 'react-icons/hi2'
import {
    CommonReportPage,
    ForumReportPage,
    PagesReportPage,
    ProblemsReportPage,
    TextbookReportPage,
    VideoReportPage
} from './pages/withReportSection'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'

const menuItems = [
    {
        path: '/',
        name: 'Доступные курсы',
        icon: <HiOutlineHome />
    },
    {
        path: 'common',
        name: 'Общая информация',
        icon: <MdOutlineAnalytics />
    },
    {
        path: 'pages',
        name: 'Популярность страниц',
        icon: <FiMousePointer />
    },
    {
        path: 'textbook',
        name: 'Работа с учебником',
        icon: <IoBookOutline />
    },
    {
        path: 'video',
        name: 'Просмотры видео',
        icon: <IoVideocamOutline />
    },
    {
        path: 'problems',
        name: 'Решение задач',
        icon: <IoExtensionPuzzleOutline />
    },
    {
        path: 'forum',
        name: 'Активность на форуме',
        icon: <MdOutlineForum />
    },
    {
        path: 'students',
        name: 'Студенты',
        icon: <RiTeamLine />
    }
]

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route
                    path="/courses/:courseId/*"
                    element={<CourseRoutes />}
                />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const CourseRoutes = () => {
    const { courseId } = useParams()

    return (
        <CourseSideBar menuItems={menuItems} currentCourseId={courseId}>
            <Routes>
                <Route path="common" element={<CommonReportPage />} />
                <Route path="pages" element={<PagesReportPage />} />
                <Route path="video" element={<VideoReportPage />} />
                <Route path="forum" element={<ForumReportPage />} />
                <Route path="problems" element={<ProblemsReportPage />} />
                <Route path="textbook" element={<TextbookReportPage />} />
                <Route path="students" element={<StudentsPage />} />
            </Routes>
        </CourseSideBar>
    )
}

export default App
