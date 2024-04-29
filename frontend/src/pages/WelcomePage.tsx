import * as React from 'react'
import SectionHeader from '../components/Sections/SectionHeader'
import {Fab, Grid, List} from '@mui/material'
import {BASE_URL} from '../config'
import CourseCard from '../components/courses/CourseCard'
import {useQuery} from 'react-query'
import CreateCourseForm from '../components/courses/CreateCourseForm'
import {FaPlus} from 'react-icons/fa6'

export default function WelcomePage() {
    const {data: courses, isLoading, isError} = useQuery('courses', async () => {
        const response = await fetch(`${BASE_URL}/courses`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    const [isFormOpen, setIsFormOpen] = React.useState(false);

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (!isLoading && !isError &&
        <Grid container paddingLeft="30px" paddingTop="30px" direction={'column'}>
            <SectionHeader text="Доступные курсы"/>
            <List className="courses">
                {courses.map(course => (
                    <CourseCard key={course.course_id} course={course}/>
                ))}
            </List>
            <Fab
                onClick={handleOpenForm}
                color="primary"
                aria-label="add"
                sx={{
                    position: 'fixed',
                    bottom: '5vh',
                    right: '5vh',
                }}
            >
                <FaPlus size={24}/>
            </Fab>
            {isFormOpen ? (
                <CreateCourseForm open={isFormOpen} onClose={handleCloseForm}/>
            ) : null}
        </Grid>
    );
}
