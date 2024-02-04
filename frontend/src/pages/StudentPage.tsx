import PageBase from "../common/PageBase/PageBase";
import {useParams} from "react-router-dom";


export default function StudentPage() {
    const {studentId} = useParams()
    return (
        <PageBase>
            <h1>Student {studentId}</h1>
        </PageBase>
    )
}