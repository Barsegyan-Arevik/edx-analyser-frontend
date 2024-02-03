import CoursePage from "./pages/CoursePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListenerPage from "./pages/ListenerPage";
import ListenerSearchPage from "./pages/ListenerSearchPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CoursePage/>}/>
                <Route path="/listeners" element={<ListenerSearchPage/>}/>
                <Route path="/listeners/:id" element={<ListenerPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
