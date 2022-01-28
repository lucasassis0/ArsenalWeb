import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}