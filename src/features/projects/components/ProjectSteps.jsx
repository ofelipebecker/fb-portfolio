const ProjectSteps = ({ steps }) => {
    return (
        <>
            {steps.map((step, index) => {
                const data = step.data;
                const StepContent = step.content;
                
                return (
                    <div className="row my-8" key={index}>
                        <div className="col-12">
                            <div className="card border-0 rounded-3 shadow-sm p-4">
                                <h2>{data.title}</h2>
                                <h3>{data.subtitle}</h3>
                                <div className="card-body d-flex flex-column p-0">
                                    <div><StepContent /></div>
                                    {data.image && (
                                        <figure className="figure mb-0">
                                            <img
                                                src={data.image}
                                                alt={data.title}
                                                className="figure-img img-fluid border mb-0"
                                            />
                                            {data.imageCaption && (
                                                <figcaption className="figure-caption">
                                                    <em>{data.imageCaption}</em>
                                                </figcaption>
                                            )}
                                        </figure>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProjectSteps;
