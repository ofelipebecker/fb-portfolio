const ProjectIntro = ({ data }) => {
    return (
        <div className="row">
            <div className="col-12 mt-5">
                <h1 className="mb-4">{data.title}</h1>
                <div className="card border-0 rounded-3 shadow-sm">
                    <div className="card-body d-flex flex-column">
                        <figure className="figure">
                            <img
                                src={data.image}
                                className="figure-img img-fluid border"
                                alt={`${data.title} Main`}
                            />
                            <figcaption className="figure-caption">
                                {data.caption}
                            </figcaption>
                        </figure>
                        <p className="mb-0 mt-4">{data.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectIntro;
