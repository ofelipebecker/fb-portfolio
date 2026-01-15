import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";

const App = () => {
    return (
        <LanguageProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:projectId" element={<Project />} />
                </Routes>
                <Footer />
            </Router>
        </LanguageProvider>
    );
};

export default App;
