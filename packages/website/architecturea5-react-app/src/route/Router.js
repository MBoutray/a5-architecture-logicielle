import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
import Mafia from "../pages/MafiaPage/MafiaPage";
import Kill from "../pages/KillPage/KillPage";
import Tsunami from "../pages/TsunamiPage/TsunamiPage";

const Rooter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mafia" element={<Mafia />} />
            <Route path="/kill" element={<Kill />} />
            <Route path="/tsunami" element={<Tsunami />} />
        </Routes>
    </Router>
);

export default Rooter;