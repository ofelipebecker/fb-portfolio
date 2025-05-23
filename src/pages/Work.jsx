import ProjectLink from "../components/ProjectLink";

import workProjects from "../data/workProjectsData";

const Work = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 mt-5">
                    <h1>Projetos</h1>
                    {workProjects.map((project, index) => (
                        <ProjectLink
                            key={index}
                            title={project.title}
                            imageSrc={project.imageSrc}
                            tags={project.tags}
                            url={project.url}
                            disabled={project.disabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
