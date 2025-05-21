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
                        <div className="col-12 mt-5">
                            <h1 className="mb-4">{project.title}</h1>
                            <div className="card border-0 rounded-3 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <figure className="figure">
                                        <img
                                            src={project.image}
                                            className="figure-img img-fluid border"
                                            alt={`${project.title} Main`}
                                        />
                                        <figcaption class="figure-caption">
                                            Cards do Painel Geral, com gráficos
                                            da Chart.js, abas do Bootstrap e
                                            seletores de período da Day.js.
                                        </figcaption>
                                    </figure>
                                    <p className="mb-0 mt-4">{project.intro}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {project.steps.map((step, index) => (
                        <>
                            <div className="row my-5"></div>
                            <div className="row" key={index}>
                                <div className="col-12">
                                    <div className="card border-0 rounded-3 shadow-sm p-4">
                                        <h2>{step.title}</h2>
                                        <h3>{step.subtitle}</h3>
                                        <div className="card-body d-flex flex-column p-0">
                                            <div>{step.content}</div>
                                            {step.image && (
                                                <figure className="figure mb-0">
                                                    <img
                                                        src={step.image}
                                                        alt={step.title}
                                                        className="figure-img img-fluid border mb-0"
                                                    />
                                                </figure>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="row my-5"></div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-0 rounded-3 shadow-sm p-4">
                                <h2>Conclusão</h2>
                                <div className="card-body d-flex flex-column p-0">
                                    {project.conclusion}
                                </div>
                            </div>
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
                    <div className="row my-5"></div>
                    <div className="row my-5"></div>
                </div>
            </div>
        </div>
    );
}

export default Project;
