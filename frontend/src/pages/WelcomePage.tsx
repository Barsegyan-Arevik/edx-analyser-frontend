import * as React from 'react'
import SectionHeader from '../components/Sections/SectionHeader'
import { Grid, List } from '@mui/material'
import { BASE_URL } from '../config'
import CourseCard from '../components/CourseCard'
import { useQuery } from 'react-query'
import FileUploadForm from '../components/FileUploadForm'

export default function WelcomePage() {
    const { data: courses, isLoading, isError } = useQuery('courses', async () => {
        const response = await fetch(`${BASE_URL}/courses`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    return ( !isLoading && !isError &&
        <Grid container paddingLeft='30px' paddingTop = '30px' direction={'column'}>
            <SectionHeader text="Доступные курсы" />
            <List className="courses">
                {courses.map(course => (
                    <CourseCard key={course.course_id} course={course} />
                ))}
            </List>
            <FileUploadForm/>
        </Grid>
    );
}
