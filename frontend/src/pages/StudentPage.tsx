import PageBase from '../components/PageBase/PageBase';
import {useParams} from 'react-router-dom';
import * as React from 'react';

export default function StudentPage() {
    const {username} = useParams()
    return (
        <PageBase>
            <h1>Student {username}</h1>
        </PageBase>
    )
}