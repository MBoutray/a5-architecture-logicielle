import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
import Mafia from "../pages/MafiaPage/MafiaPage";
import Kill from "../pages/KillPage/KillPage";
import Tsunami from "../pages/TsunamiPage/TsunamiPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import CreateCharacterPage from "../pages/CreateCharacterPage/CreateCharacterPage";

const Rooter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mafia" element={<Mafia />} />
            <Route path="/kill" element={<Kill />} />
            <Route path="/tsunami" element={<Tsunami />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create-character" element={<CreateCharacterPage />} />
        </Routes>
    </Router>
);

export default Rooter;