import PageBase from '../components/PageBase/PageBase';
import {useParams} from 'react-router-dom';
import * as React from 'react';

export default function StudentPage() {
    const {studentId} = useParams()
    return (
        <PageBase>
            <h1>Student {studentId}</h1>
        </PageBase>
    )
}