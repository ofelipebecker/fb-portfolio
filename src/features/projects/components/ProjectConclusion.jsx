const ProjectConclusion = ({ conclusion }) => (
    <div className="col mt-5">
        <div className="card border-0 rounded-3 shadow-sm p-4">
            <h2>Conclusão</h2>
            <div className="card-body d-flex flex-column p-0">
                {conclusion.video && (
                    <div className="ratio ratio-16x9">
                        <iframe
                            src={conclusion.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                )}
                {conclusion.data.map((text, index) => (
                    <p 
                        key={index}
                        className={index === conclusion.data.length - 1 ? "mb-0 mt-4" : "my-4"}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectConclusion;
