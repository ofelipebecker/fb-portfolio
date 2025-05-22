import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:projectId" element={<Project />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
