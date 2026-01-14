import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

import ProjectLink from "../features/work/components/ProjectLink";

const Work = () => {
    const { language } = useLanguage();
    const isLanguagePT = language === "pt";
    const [workProjects, setWorkProjects] = useState(null);
    
    useEffect(() => {
        import(`../data/translations/workProjectsData-${language}.js`)
            .then(module => setWorkProjects(module.default));
    }, [language]);

    if (!workProjects) return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <p>Carregando...</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <h1>{isLanguagePT ? 'Projetos' : 'Work'}</h1>
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
    );
};

export default Work;
