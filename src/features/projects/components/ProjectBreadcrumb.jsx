import { Link } from 'react-router-dom';

const ProjectBreadcrumb = ({ language, projectTitle }) => {
  const isLanguagePT = language === 'pt';

  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link to='/work'>{isLanguagePT ? 'Projetos' : 'Work'}</Link>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          {projectTitle}
        </li>
      </ol>
    </nav>
  );
};

export default ProjectBreadcrumb;
