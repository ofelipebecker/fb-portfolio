import PropTypes from 'prop-types';

const ImageCarousel = ({ id, images }) => {
  const carouselId = `${id}-carousel`;
  
  return (
    <div id={carouselId} className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img 
              src={image.src} 
              className="border d-block w-100" 
              alt={image.caption} 
            />
            <div className="carousel-caption">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="carousel-control-prev" 
        data-bs-target={`#${carouselId}`} 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        data-bs-target={`#${carouselId}`} 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  carouselId: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      caption: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImageCarousel;
