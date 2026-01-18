import { useParams } from "react-router-dom";

import ProjectBreadcrumb from "../../features/projects/components/ProjectBreadcrumb";
import ProjectIntro from "../../features/projects/components/ProjectIntro";
import ProjectPagination from "../../features/projects/components/ProjectPagination";
import ProjectSteps from "../../features/projects/components/ProjectSteps";

import { introData } from "../../features/projects/project3/data/introData";
import { steps } from "../../features/projects/project3/steps";

const Project = () => {
    const { projectId } = useParams();
    const projectSteps = steps;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5 px-3 px-sm-0">
                    <ProjectBreadcrumb projectTitle={introData.title} />
                    <ProjectIntro data={introData} /> 
                    <ProjectSteps steps={projectSteps} />
                    <div className="d-flex justify-content-between align-items-center">
                        <ProjectBreadcrumb projectTitle={introData.title} />
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
