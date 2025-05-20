import { Link } from "react-router-dom";

function ProjectLink({ title, imageSrc, url, tags, disabled }) {
    return (
        <div className="card border-0 rounded-3 shadow-sm mb-5">
            {disabled ? (
                <div
                    className="card border-0 overflow-hidden rounded-3 shadow-sm position-relative"
                    style={{ pointerEvents: "none" }}
                >
                    <div className="card-title d-flex align-items-end mb-0 p-3 opacity-50">
                        <h2 className="mb-0 me-3">{title}</h2>
                        <small>{tags}</small>
                    </div>
                    <div className="card-body border-top border-3 p-0 max-h-200px overflow-hidden position-relative bg-light-orange">
                        <img
                            src={imageSrc}
                            className="w-100 opacity-50"
                            alt={title}
                        />
                        <div
                            class="alert alert-warning fst-italic position-absolute start-50 top-50 translate-middle text-dark-orange p-4"
                            role="alert"
                        >
                            <span className="bi bi-cone-striped me-2"></span>
                            <span>Em construção...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <Link
                    to={url}
                    className="proj-link text-decoration-none text-reset"
                >
                    <div className="card border-0 overflow-hidden rounded-3 shadow-sm">
                        <div className="card-title d-flex align-items-end mb-0 p-3">
                            <h2 className="mb-0 me-3">{title}</h2>
                            <small>{tags}</small>
                        </div>
                        <div className="card-body border-top border-3 p-0 max-h-200px overflow-hidden">
                            <img src={imageSrc} className="w-100" alt={title} />
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ProjectLink;
