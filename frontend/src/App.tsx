import * as React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import CourseSideBar from './components/SideBar/CourseSideBar'
import CommonSectionPage from './pages/CommonSectionPage'
import PagesSectionPage from './pages/PagesSectionPage/PagesSectionPage'
import VideoSectionPage from './pages/VideoSectionPage'
import ForumSectionPage from './pages/ForumSectionPage'
import ProblemSectionPage from './pages/ProblemSectionPage'
import TextbookSectionPage from './pages/TextbookSectionPage'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import { MdOutlineAnalytics, MdOutlineForum } from 'react-icons/md'
import { FiMousePointer } from 'react-icons/fi'
import { IoBookOutline, IoExtensionPuzzleOutline, IoVideocamOutline } from 'react-icons/io5'
import { RiTeamLine } from 'react-icons/ri'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import { HiOutlineHome } from 'react-icons/hi2'
import { Course } from './models/course'

const menuItems = [
    {
        path: '/',
        name: 'Домой',
        icon: <HiOutlineHome />,
    },
    {
        path: 'common',
        name: 'Общая информация',
        icon: <MdOutlineAnalytics />
    },
    {
        path: 'pages',
        name: 'Популярность страниц',
        icon: <FiMousePointer/>
    },
    {
        path: 'textbook',
        name: 'Работа с учебником',
        icon: <IoBookOutline/>
    },
    {
        path: 'video',
        name: 'Просмотры видео',
        icon: <IoVideocamOutline />
    },
    {
        path: 'problems',
        name: 'Решение задач',
        icon: <IoExtensionPuzzleOutline/>
    },
    {
        path: 'forum',
        name: 'Активность на форуме',
        icon: <MdOutlineForum/>
    },
    {
        path: 'students',
        name: 'Студенты',
        icon: <RiTeamLine/>
    },
];

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route
                    path="/courses/:courseId/*"
                    element={<CourseRoutes />}
                />
            </Routes>
        </BrowserRouter>
    );
};

const CourseRoutes = () => {
    const { courseId } = useParams();

    return (
        <CourseSideBar menuItems={menuItems} currentCourseId={courseId}>
            <Routes>
                <Route path="common" element={<CommonSectionPage />} />
                <Route path="pages" element={<PagesSectionPage />} />
                <Route path="video" element={<VideoSectionPage />} />
                <Route path="forum" element={<ForumSectionPage />} />
                <Route path="problems" element={<ProblemSectionPage />} />
                <Route path="textbook" element={<TextbookSectionPage />} />
                <Route path="students" element={<StudentsPage />} />
            </Routes>
        </CourseSideBar>
    );
};

export default App;
