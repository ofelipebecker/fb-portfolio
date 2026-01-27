import { Link } from 'react-router-dom';
import { workProjectsLength } from '../../work/data/pt/workProjectsData';

const ProjectPagination = ({ language, currentProjectId }) => {
  const isLanguagePT = language === 'pt';
  const nextText = `${isLanguagePT ? 'Próximo' : 'Next'} →`;
  const previousText = `← ${isLanguagePT ? 'Anterior' : 'Previous'}`;

  const currentProjectNum = Number(currentProjectId.replace('project', ''));
  const previousProjectNum = currentProjectNum - 1;
  const nextProjectNum = currentProjectNum + 1;

  const hasPreviousProject = previousProjectNum > 0;
  const hasNextProject = nextProjectNum <= workProjectsLength;

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <nav aria-label='Cross-project navigation'>
      <ul className='pagination mb-0'>
        <li className={`page-item ${!hasPreviousProject ? 'disabled' : ''}`}>
          {hasPreviousProject ? (
            <Link
              className='page-link fs-4'
              to={`/work/project${previousProjectNum}`}
              aria-label='Previous project'
              onClick={handleLinkClick}
            >
              {previousText}
            </Link>
          ) : (
            <span className='page-link fs-4 text-muted' aria-disabled='true'>
              {previousText}
            </span>
          )}
        </li>
        <li className={`page-item ${!hasNextProject ? 'disabled' : ''}`}>
          {hasNextProject ? (
            <Link
              className='page-link fs-4'
              to={`/work/project${nextProjectNum}`}
              aria-label='Next project'
              onClick={handleLinkClick}
            >
              {nextText}
            </Link>
          ) : (
            <span className='page-link fs-4 text-muted' aria-disabled='true'>
              {nextText}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default ProjectPagination;
