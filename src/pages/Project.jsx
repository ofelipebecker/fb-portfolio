import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProjectBreadcrumb from "../features/projects/components/ProjectBreadcrumb";
import ProjectConclusion from "../features/projects/components/ProjectConclusion";
import ProjectIntro from "../features/projects/components/ProjectIntro";
import ProjectPagination from "../features/projects/components/ProjectPagination";
import ProjectSteps from "../features/projects/components/ProjectSteps";

const Project = () => {
    const { projectId } = useParams();
    const [projectConclusion, setProjectConclusion] = useState(null);
    const [projectIntro, setProjectIntro] = useState(null);
    const [projectSteps, setProjectSteps] = useState(null);

    useEffect(() => {
        import(`../features/projects/${projectId}/conclusion`)
            .then(module => setProjectConclusion(module.default));
        import(`../features/projects/${projectId}/intro`)
            .then(module => setProjectIntro(module.default));
        import(`../features/projects/${projectId}/steps`)
            .then(module => setProjectSteps(module.default));
    }, [projectId]);

    if (!projectConclusion || !projectIntro || !projectSteps) return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5 px-3 px-sm-0">
                    <p>Carregando...</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5 px-3 px-sm-0">
                    <ProjectBreadcrumb projectTitle={projectIntro.data.title} />
                    <ProjectIntro intro={projectIntro} /> 
                    <ProjectSteps steps={projectSteps} />
                    <ProjectConclusion conclusion={projectConclusion} /> 
                    <div className="d-flex justify-content-between align-items-center mb-10">
                        <ProjectBreadcrumb projectTitle={projectIntro.data.title} />
                        <ProjectPagination currentProjectId={projectId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
