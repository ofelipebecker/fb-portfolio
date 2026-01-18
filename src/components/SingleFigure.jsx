const SingleFigure = ({ src, alt, caption }) => (
    <figure className="figure mb-0">
        <img src={src} className="figure-img img-fluid border mb-0" alt={alt} />
        <figcaption className="figure-caption">
            <em>{caption}</em>
        </figcaption>
    </figure>
);

export default SingleFigure;
