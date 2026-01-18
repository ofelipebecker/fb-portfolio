const SingleImageModal = ({ modalId, imageSrc, caption }) => {
    const ImageWithCaption = ({ src, alt, caption }) => (
        <figure className="figure mb-0">
            <img src={src} className="figure-img img-fluid border mb-0" alt={alt} />
            <figcaption className="figure-caption">
                <em>{caption}</em>
            </figcaption>
        </figure>
    );
    
    return (
        <>
            <button 
                className="p-0 border-0 bg-transparent text-start" 
                data-bs-toggle="modal" 
                data-bs-target={`#${modalId}`}
                title="Expandir imagem."
            >
                <ImageWithCaption src={imageSrc} alt={caption} caption={caption} />
            </button>
            <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-w-fit-content">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <ImageWithCaption src={imageSrc} alt={caption} caption={caption} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleImageModal;
