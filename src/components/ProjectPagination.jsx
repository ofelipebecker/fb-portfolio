import { Link } from "react-router-dom";
import { workProjectsLength } from "../data/workProjectsData";

const ProjectPagination = ({ currentProjectId }) => {
    const currentProjectNum = Number(currentProjectId.replace('project', ''));
    const previousProjectNum = currentProjectNum - 1;
    const nextProjectNum = currentProjectNum + 1;
    const hasPreviousProject = previousProjectNum > 0;
    const hasNextProject = nextProjectNum <= workProjectsLength;

    return (
        <nav aria-label="Navegação entre projetos">
            <ul className="pagination mb-0">
                <li className={`page-item ${!hasPreviousProject ? 'disabled' : ''}`}>
                    {hasPreviousProject ? (
                        <Link 
                            className="page-link fs-4" 
                            to={`/work/project${previousProjectNum}`}
                            aria-label="Projeto anterior"
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
