import { Link } from "react-router-dom";

const ProjectBreadcrumb = ({ projectTitle }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/work">Projetos</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {projectTitle}
                </li>
            </ol>
        </nav>
    );
};

export default ProjectBreadcrumb;
