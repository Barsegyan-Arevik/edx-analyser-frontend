import * as React from 'react'
import {List, ListItem, ListItemText} from '@mui/material'
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader'
import {NavLink} from 'react-router-dom'
import PageBase from '../../components/PageBase/PageBase'

type CourseInfo = {
    id: string;
    name: string;
}

export default function CoursesPage() {
    const courses: Array<CourseInfo> = [
        {id: 'course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1', name: 'DATANTECH2035+summer_2022_1'},
    ];

    return (
        <PageBase>
            <SectionHeader text='Доступные курсы'/>
            <List>
                {courses.map(course => (
                    <ListItem key={course.id}>
                        <NavLink to={`/courses/${course.id}/common`}>
                            <ListItemText primary={course.name}/>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </PageBase>
    );
}