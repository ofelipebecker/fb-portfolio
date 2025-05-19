import { useParams, Link } from "react-router-dom";

import projects from "../data/projectsData";

function Project() {
    const { projectId } = useParams();
    const project = projects[projectId];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1 mt-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/work">Projetos</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {project.title}
                            </li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-12">
                            <h1>{project.title}</h1>
                            <img
                                src={project.image}
                                className="img-fluid my-4"
                                alt={`${project.title} Main`}
                            />
                            <p className="mb-5">{project.intro}</p>
                        </div>
                    </div>
                    {project.steps.map((step, index) => (
                        <div className="row" key={index}>
                            <div className="col-12 my-5">
                                <h2>{step.title}</h2>
                                <h3>{step.subtitle}</h3>
                                <div>{step.content}</div>
                                {step.image && (
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="img-fluid"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="row">
                        <div className="col-12 my-5">
                            <h2>Conclusion</h2>
                            <p>{project.conclusion}</p>
                        </div>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/work">Projetos</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {project.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Project;
