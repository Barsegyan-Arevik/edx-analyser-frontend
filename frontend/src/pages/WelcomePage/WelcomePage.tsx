import * as React from 'react';
import { Link } from 'react-router-dom';

type Course = {
    id: string;
    name: string;
};

type WelcomePageProps = {
    courses: Course[];
};

const WelcomePage = (props: WelcomePageProps) => {
    return (
        <div>
            <h1>Доступные курсы</h1>
            <ul>
                {props.courses.map(course => (
                    <li key={course.id}>
                        <Link to={`/courses/${course.id}/common`}>{course.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WelcomePage;
