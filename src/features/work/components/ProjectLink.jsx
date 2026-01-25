import { Link } from "react-router-dom";

const ProjectLink = ({ title, imageSrc, url, tags }) => {
    return (
        <div className="card border-0 rounded-3 shadow-sm mb-5">
            <Link
                to={url}
                className="proj-link text-decoration-none text-reset"
            >
                <div className="card border-0 overflow-hidden rounded-3 bg-light shadow-sm">
                    <div className="card-title d-flex align-items-end mb-0 p-3">
                        <h2 className="mb-0 me-3">{title}</h2>
                        <small>{tags}</small>
                    </div>
                    <div className="card-body border border-dark-subtle max-h-200px overflow-hidden p-0 m-2">
                        <img src={imageSrc} className="w-100" alt={title} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectLink;
