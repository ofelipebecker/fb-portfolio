import EducationCard from "../components/EducationCard";
import Footer from "../components/Footer";
import LocationCard from "../components/LocationCard";
import SkillsCard from "../components/SkillsCard";

const Home = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="mb-5">Sobre</h1>
                <div className="row g-5">
                    <SkillsCard />
                    <EducationCard />
                </div>
                <div className="row">
                    <LocationCard />
                </div>
                <div className="row my-5"></div>
                <div className="row my-5"></div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
