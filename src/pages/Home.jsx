import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import EducationCard from "../features/education/components/EducationCard";
import LocationCard from "../features/location/components/LocationCard";
import SkillsCard from "../features/skills/components/SkillsCard";

const Home = () => {
    const { language } = useLanguage();
    
    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
        import(`../data/${language}/home`).then(module => setHomeData(module));
    }, [language]);

    if (!homeData) return (
        <div className="container-fluid mt-5 px-4 text-center mb-9">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <p>Carregando...</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid mt-5 px-4 text-center mb-9">
            <h1 className="mb-5">{homeData.title}</h1>
            <div className="row g-5 px-3 px-sm-0">
                <SkillsCard 
                    title={homeData.skills.title}
                    chartData={homeData.skills.chart}
                />
                <EducationCard 
                    title={homeData.education.title}
                    tableData={homeData.education.table}
                />
            </div>
            <div className="row px-3 px-sm-0">
                <LocationCard 
                    title={homeData.location.title}
                    mapData={homeData.location.map}
                />
            </div>
        </div>
    );
};

export default Home;
