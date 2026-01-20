import { Link } from "react-router-dom";
import { workProjectsLength } from "../../work/data/workProjectsData-pt";

const ProjectPagination = ({ currentProjectId }) => {
    const currentProjectNum = Number(currentProjectId.replace('project', ''));
    const previousProjectNum = currentProjectNum - 1;
    const nextProjectNum = currentProjectNum + 1;
    const hasPreviousProject = previousProjectNum > 0;
    const hasNextProject = nextProjectNum <= workProjectsLength;

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <nav aria-label="Navegação entre projetos">
            <ul className="pagination mb-0">
                <li className={`page-item ${!hasPreviousProject ? 'disabled' : ''}`}>
                    {hasPreviousProject ? (
                        <Link 
                            className="page-link fs-4" 
                            to={`/work/project${previousProjectNum}`}
                            aria-label="Projeto anterior"
                            onClick={handleLinkClick}
                        >
                            ← Anterior
                        </Link>
                    ) : (
                        <span className="page-link fs-4 text-muted" aria-disabled="true">
                            ← Anterior
                        </span>
                    )}
                </li>
                <li className={`page-item ${!hasNextProject ? 'disabled' : ''}`}>
                    {hasNextProject ? (
                        <Link 
                            className="page-link fs-4" 
                            to={`/work/project${nextProjectNum}`}
                            aria-label="Próximo projeto"
                            onClick={handleLinkClick}
                        >
                            Próximo →
                        </Link>
                    ) : (
                        <span className="page-link fs-4 text-muted" aria-disabled="true">
                            Próximo →
                        </span>
                    )}
                </li> 
            </ul>
        </nav>
    );
};

export default ProjectPagination;
