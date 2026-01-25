import { Link } from "react-router-dom";

const ProjectLink = ({ title, imageSrc, url, tags }) => {
    return (
        <div className="col-12 col-xl-6">
            <div className="card border-0 rounded-3 shadow-sm">
                <Link
                    to={url}
                    className="proj-link text-decoration-none text-reset"
                >
                    <div className="card border-0 overflow-hidden rounded-3 bg-light shadow-sm p-3">
                        <div className="card-title d-flex flex-column mb-3">
                            <h2 className="mb-1">{title}</h2>
                            <small>{tags}</small>
                        </div>
                        <div className="card-body border border-dark-subtle max-h-200px overflow-hidden p-0">
                            <img src={imageSrc} className="w-100" alt={title} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProjectLink;
