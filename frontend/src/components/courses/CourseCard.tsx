import { Course } from '../../models/course'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material'

export default function CourseCard({ course }: { course: Course }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const image = new Image()
        image.onload = () => setImageLoaded(true)
        image.src = course.image_url
    }, [course.image_url])

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
                                style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'contain' }}
                            />
                        ) : (
                            <div style={{ width: 60, height: 60, backgroundColor: '#ADD8E6', borderRadius: '50%' }} />
                        )}
                    </div>
                    <CardContent style={{ flex: '1 1 auto' }}>
                        <Typography gutterBottom variant="body1" component="div" noWrap style={{ maxWidth: 'calc(100% - 70px)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {course.name}
                        </Typography>
                    </CardContent>
                </Card>
            </ListItem>
        </NavLink>
    )
}
