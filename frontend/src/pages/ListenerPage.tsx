import {useParams} from "react-router-dom";
import './ListenerPage.css'


// https://stackoverflow.com/questions/45898789/react-router-pass-param-to-component
export default function ListenerPage() {
    const { id } = useParams()
    return (
        <div className="listener-page">
            Listener {id}
        </div>
    )
}
