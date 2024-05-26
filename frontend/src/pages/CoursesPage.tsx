import * as React from 'react'
import SectionHeader from '../components/Sections/SectionHeader'
import {Grid, List, Typography} from '@mui/material'
import {BASE_URL} from '../config'
import CourseCard from '../components/courses/CourseCard'
import {useQuery} from 'react-query'
import {CourseSkeleton} from '../components/courses/CourseSkeleton'
import {Course} from '../models/course'
import {axiosApiInstance} from '../interceptors'
import CreateCourseButton from '../components/courses/CreateCourseButton'

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

    const showCreateCourseButton = true

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
            {showCreateCourseButton ?
                (
                    <CreateCourseButton isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
                ) : null}
        </Grid>
    );
}
