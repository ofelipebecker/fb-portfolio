import { useLanguage } from '../context/LanguageContext';
import homeTranslations from '../data/translations/home.json';

import EducationCard from "../components/EducationCard";
import LocationCard from "../components/LocationCard";
import SkillsCard from "../components/SkillsCard";

const Home = () => {
    const { language } = useLanguage();
    const data = homeTranslations[language];

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-5">{data.home.title}</h1>
            <div className="row g-5 px-3 px-sm-0">
                <SkillsCard 
                    title={data.skills.title}
                    chartData={data.skills.chart}
                />
                <EducationCard />
            </div>
            <div className="row px-3 px-sm-0">
                <LocationCard />
            </div>
            <div className="row my-5"></div>
            <div className="row my-5 d-none d-lg-flex"></div>
        </div>
    );
};

export default Home;
