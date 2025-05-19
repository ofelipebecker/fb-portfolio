import { useParams, Link } from "react-router-dom";

function Project() {
    const { projectId } = useParams();

    const projects = {
        project1: {
            title: "Project 1",
            image: "https://via.placeholder.com/800x300",
            intro: "This is the introduction to Project 1.",
            steps: [
                {
                    title: "Step 1",
                    subtitle: "Design Phase",
                    text: "Details of design phase.",
                    image: "https://via.placeholder.com/600x200",
                },
                {
                    title: "Step 2",
                    subtitle: "Development Phase",
                    text: "Details of development phase.",
                },
            ],
            conclusion: "Conclusion for Project 1.",
        },
    };

    const project = projects[projectId];

    if (!project) {
        return (
            <div className="container mt-5">
                <h1>Project not found</h1>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/work">Projetos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {project.title}
                    </li>
                </ol>
            </nav>
            <h1>{project.title}</h1>
            <img
                src={project.image}
                className="img-fluid my-4"
                alt={`${project.title} Main`}
            />
            <p>{project.intro}</p>
            {project.steps.map((step, index) => (
                <section key={index} className="mb-4">
                    <h2>{step.title}</h2>
                    <h3>{step.subtitle}</h3>
                    <p>{step.text}</p>
                    {step.image && (
                        <img
                            src={step.image}
                            alt={step.title}
                            className="img-fluid"
                        />
                    )}
                </section>
            ))}

            <section>
                <h2>Conclusion</h2>
                <p>{project.conclusion}</p>
            </section>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/work">Projetos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {project.title}
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Project;
