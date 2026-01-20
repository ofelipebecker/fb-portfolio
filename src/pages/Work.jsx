import ProjectLink from "../features/work/components/ProjectLink";
import workProjects from "../features/work/data/workProjectsData-pt";

const Work = () => {
    return (
        <div className="container my-5">
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
