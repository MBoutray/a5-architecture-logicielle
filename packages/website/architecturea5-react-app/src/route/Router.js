import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";

const Rooter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default Rooter;