import EducationCard from "../components/EducationCard";
import LocationCard from "../components/LocationCard";
import SkillsCard from "../components/SkillsCard";

const Home = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="mb-5">Sobre</h1>
                <div className="row g-5 px-3 px-sm-0">
                    <SkillsCard />
                    <EducationCard />
                </div>
                <div className="row px-3 px-sm-0">
                    <LocationCard />
                </div>
                <div className="row my-5"></div>
                <div className="row my-5 d-none d-lg-flex"></div>
            </div>
        </>
    );
};

export default Home;
