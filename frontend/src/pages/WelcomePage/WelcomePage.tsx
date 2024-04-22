import * as React from 'react'
import { useEffect, useState } from 'react'
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader'
import { List } from '@mui/material'
import { Course } from '../../models/course'
import { BASE_URL } from '../../config'
import CourseCard from '../../components/CourseCard'

export default function WelcomePage() {
    const [courses, setCourses] = useState<Array<Course>>([])

    useEffect(() => {
        fetch(`${BASE_URL}/courses`)
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
            .catch(error => {
                console.error('Error fetching courses:', error)
            })
    }, [])

    return (
        <div>
            <SectionHeader text="Доступные курсы" />
            <List className="courses" style={{ padding: '1em', paddingLeft: '30px' }}>
                {courses.map(course => (
                    <CourseCard key={course.course_id} course={course} />
                ))}
            </List>
        </div>
    )
}
