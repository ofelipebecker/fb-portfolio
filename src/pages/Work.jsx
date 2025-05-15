import { Link } from "react-router-dom";

function Work() {
    return (
        <div className="container mt-5">
            <h1>Work</h1>
            {[1, 2, 3, 4].map((n) => (
                <div key={n} className="card mb-4">
                    <img
                        src={`https://via.placeholder.com/800x200?text=Project+${n}`}
                        className="card-img-top"
                        alt={`Project ${n}`}
                    />
                    <div className="card-body">
                        <h2 className="card-title">Project {n}</h2>
                        <Link
                            to={`/work/project${n}`}
                            className="btn btn-primary"
                        >
                            View Project
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Work;
