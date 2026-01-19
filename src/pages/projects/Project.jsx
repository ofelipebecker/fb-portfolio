import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProjectBreadcrumb from "../../features/projects/components/ProjectBreadcrumb";
import ProjectConclusion from "../../features/projects/components/ProjectConclusion";
import ProjectIntro from "../../features/projects/components/ProjectIntro";
import ProjectPagination from "../../features/projects/components/ProjectPagination";
import ProjectSteps from "../../features/projects/components/ProjectSteps";

import { conclusion } from "../../features/projects/project3/conclusion";
import { intro } from "../../features/projects/project3/intro";

const Project = () => {
    const { projectId } = useParams();
    const [projectSteps, setProjectSteps] = useState(null);

    useEffect(() => {
        import(`../../features/projects/${projectId}/steps`).then(module => setProjectSteps(module.default));
    }, [projectId]);

    if (!projectSteps) return (
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
                    <ProjectBreadcrumb projectTitle={intro.data.title} />
                    <ProjectIntro intro={intro} /> 
                    <ProjectSteps steps={projectSteps} />
                    <ProjectConclusion conclusion={conclusion} /> 
                    <div className="d-flex justify-content-between align-items-center">
                        <ProjectBreadcrumb projectTitle={intro.data.title} />
                        <ProjectPagination currentProjectId={projectId} />
                    </div>
                    <div className="row my-5"></div>
                    <div className="row my-5"></div>
                </div>
            </div>
        </div>
    );
};

export default Project;
