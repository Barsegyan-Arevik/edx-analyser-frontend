import CoursePage from "./pages/CoursePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListenerPage from "./pages/ListenerPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoursePage/>}/>
                <Route path="/listeners/:id" element={<ListenerPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
