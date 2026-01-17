import { useParams } from "react-router-dom";

import ProjectBreadcrumb from "../../features/projects/components/ProjectBreadcrumb";
import ProjectPagination from "../../features/projects/components/ProjectPagination";

import { introData } from "../../features/projects/project3/data/introData";
import { steps } from "../../features/projects/project3/data/steps";

const Project = () => {
    const { projectId } = useParams();
    const projectSteps = steps;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5 px-3 px-sm-0">
                    <ProjectBreadcrumb projectTitle={introData.title} />
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1 className="mb-4">{introData.title}</h1>
                            <div className="card border-0 rounded-3 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <figure className="figure">
                                        <img
                                            src={introData.image}
                                            className="figure-img img-fluid border"
                                            alt={`${introData.title} Main`}
                                        />
                                        <figcaption className="figure-caption">
                                            {introData.caption}
                                        </figcaption>
                                    </figure>
                                    <p className="mb-0 mt-4">{introData.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5"></div>
                    {projectSteps.map((step, index) => {
                        const data = step.data;
                        const StepContent = step.content;
                        
                        return (
                            <>
                                <div className="row my-5"></div>
                                <div className="row" key={index}>
                                    <div className="col-12">
                                        <div className="card border-0 rounded-3 shadow-sm p-4">
                                            <h2>{data.title}</h2>
                                            <h3>{data.subtitle}</h3>
                                            <div className="card-body d-flex flex-column p-0">
                                                <div><StepContent /></div>
                                                {data.image && (
                                                    <figure className="figure mb-0">
                                                        <img
                                                            src={data.image}
                                                            alt={data.title}
                                                            className="figure-img img-fluid border mb-0"
                                                        />
                                                        {data.imageCaption && (
                                                            <figcaption className="figure-caption">
                                                                <em>{data.imageCaption}</em>
                                                            </figcaption>
                                                        )}
                                                    </figure>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
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
