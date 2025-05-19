import { Link } from "react-router-dom";

function ProjectLink({ title, imageSrc, tags, url }) {
    return (
        <Link to={url} className="proj-link text-decoration-none text-reset">
            <div className="card border-0 overflow-hidden rounded-3 shadow-sm mb-5">
                <div className="card-title d-flex align-items-end mb-0 p-3">
                    <h2 className="mb-0 me-3">{title}</h2>
                    <small>{tags}</small>
                </div>
                <div className="card-body border-top border-3 p-0 max-h-200px overflow-hidden">
                    <img src={imageSrc} className="w-100" alt={title} />
                </div>
            </div>
        </Link>
    );
}

export default ProjectLink;
