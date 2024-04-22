import { Course } from '../models/course'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material'

export default function CourseCard({ course }: { course: Course }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => setImageLoaded(true);
        image.src = course.image_url;
    }, [course.image_url]);

    return (
        <NavLink to={`/courses/${course.course_id}/common`} style={{ textDecoration: 'none' }}>
            <ListItem>
                <Card style={{ display: 'flex', alignItems: 'center', width: '80em', paddingLeft: '1em' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                        {imageLoaded ? (
                            <CardMedia
                                component="img"
                                height="4em"
                                src={course.image_url}
                                alt={course.name}
                                style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'contain'}}
                            />
                        ) : (
                            <div style={{ width: 70, height: 70, backgroundColor: '#ADD8E6', borderRadius: '50%' }} />
                        )}
                    </div>
                    <CardContent style={{ flex: '1 1 auto' }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {course.name}
                        </Typography>
                    </CardContent>
                </Card>
            </ListItem>
        </NavLink>
    );
}
