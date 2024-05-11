import * as React from 'react'
import SectionHeader from '../components/Sections/SectionHeader'
import {Fab, Grid, List, Typography} from '@mui/material'
import {BASE_URL} from '../config'
import CourseCard from '../components/courses/CourseCard'
import {useQuery} from 'react-query'
import CreateCourseForm from '../components/courses/CreateCourseForm'
import {FaPlus} from 'react-icons/fa6'
import {CourseSkeleton} from '../components/courses/CourseSkeleton'
import {Course} from '../models/course'
import {axiosApiInstance} from '../interceptors'

export default function CoursesPage() {
    const fetchCourses = async () => {
        try {
            const response = await axiosApiInstance.get(`${BASE_URL}courses/`);
            return response.data;
        } catch (error) {
            throw new Error('Network response was not ok');
        }
    };
    const {data: courses, isLoading, isError} = useQuery('courses', fetchCourses);


    const [isFormOpen, setIsFormOpen] = React.useState(false);

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <Grid container paddingLeft="30px" paddingTop="30px" direction={'column'}>
            <SectionHeader text="Доступные курсы"/>
            <List className="courses">
                {isLoading ? (
                    Array.from({length: 5}).map((_, index) => <CourseSkeleton key={index}/>)
                )
                    : isError ? (
                        <Typography variant="body1" color={'#405479'}>При загрузке произошла ошибка</Typography>
                    )
                        : courses.length === 0 ? (
                            <Typography variant="body1" color={'#405479'}>Нет курсов</Typography>
                        )
                            : (
                                courses.map((course: Course) => <CourseCard key={course.course_id}
                                    course={course}/>)
                            )}
            </List>
            {/*<Fab*/}
            {/*    onClick={handleOpenForm}*/}
            {/*    color="primary"*/}
            {/*    aria-label="add"*/}
            {/*    sx={{*/}
            {/*        position: 'fixed',*/}
            {/*        bottom: '5vh',*/}
            {/*        right: '5vh',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <FaPlus size={24} lightingColor={'#405479'}/>*/}
            {/*</Fab>*/}
            {/*{isFormOpen ? (*/}
            {/*    <CreateCourseForm open={isFormOpen} onClose={handleCloseForm}/>*/}
            {/*) : null}*/}
        </Grid>
    );
}
