import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import ProjectBreadcrumb from "../features/projects/components/ProjectBreadcrumb";
import ProjectConclusion from "../features/projects/components/ProjectConclusion";
import ProjectIntro from "../features/projects/components/ProjectIntro";
import ProjectPagination from "../features/projects/components/ProjectPagination";
import ProjectSteps from "../features/projects/components/ProjectSteps";

const Project = () => {
    const { language } = useLanguage();
    const { projectId } = useParams();
    
    const [projectConclusion, setProjectConclusion] = useState(null);
    const [projectIntro, setProjectIntro] = useState(null);
    const [projectSteps, setProjectSteps] = useState(null);

    useEffect(() => {
        import(`../features/projects/${projectId}/intro`)
            .then(module => {
                const intro = module.default(language);
                setProjectIntro(intro);
            });
            
        import(`../features/projects/${projectId}/steps`)
            .then(module => setProjectSteps(module.default));

        import(`../features/projects/${projectId}/conclusion`)
            .then(module => {
                const conclusion = module.default(language);
                setProjectConclusion(conclusion);
            });
    }, [language, projectId]);

    if (!projectConclusion || !projectIntro || !projectSteps) return (
        <div className="container-fluid mt-5 px-4 text-center mb-9">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <p>Carregando...</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid mt-5 px-4 mb-9 px-4">
            <div className="row g-5">
                <div className="col-12 col-lg-10 col-xl-8 col-xxl-6 offset-lg-1 offset-xl-2 offset-xxl-3">
                    <div className="row">
                        <div className="col">
                            <ProjectBreadcrumb 
                                language={language} 
                                projectTitle={projectIntro.data.title} 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <ProjectIntro intro={projectIntro} /> 
                    </div>
                    <div className="row gy-5">
                        <ProjectSteps steps={projectSteps} />
                    </div>
                    <div className="row">
                        <ProjectConclusion conclusion={projectConclusion} /> 
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <ProjectBreadcrumb 
                                language={language} 
                                projectTitle={projectIntro.data.title} 
                            />
                        </div>
                        <div className="col-auto">
                            <ProjectPagination currentProjectId={projectId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
