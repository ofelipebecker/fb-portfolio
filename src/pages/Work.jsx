import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import ProjectLink from "../features/work/components/ProjectLink";

const Work = () => {
    const { language } = useLanguage();
    const isLanguagePT = language === "pt";
    
    const [workProjects, setWorkProjects] = useState(null);
    
    useEffect(() => {
        import(`../features/work/data/${language}/workProjectsData`)
            .then(module => setWorkProjects(module.default));
    }, [language]);

    if (!workProjects) return (
        <div className="container-fluid mt-5 px-4 text-center mb-9">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <p>Carregando...</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid mb-9 mt-5 px-4">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <h1 className="mb-5 text-center">{isLanguagePT ? 'Projetos' : 'Work'}</h1>
                    <div className="row g-5">
                        {workProjects.map((project, index) => (
                            <ProjectLink
                                key={index}
                                title={project.title}
                                imageSrc={project.imageSrc}
                                tags={project.tags}
                                url={project.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
