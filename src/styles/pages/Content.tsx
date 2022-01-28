import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Media from "./Media";
import News from "./News";
import Schedule from "./Schedule";
import Team from "./Team";

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/media" element={<Media />} />
        </Routes>
    );
}