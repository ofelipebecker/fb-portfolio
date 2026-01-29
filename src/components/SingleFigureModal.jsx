import SingleFigure from './SingleFigure';

const SingleFigureModal = ({ modalId, image, caption }) => (
  <>
    <button
      className='p-0 border-0 bg-transparent text-start'
      data-bs-toggle='modal'
      data-bs-target={`#${modalId}`}
      title='Expandir imagem.'
    >
      <SingleFigure image={image} alt={caption} caption={caption} />
    </button>
    <div className='modal fade' id={modalId} tabIndex='-1' aria-hidden='true'>
      <div className='modal-dialog modal-w-fit-content'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <SingleFigure image={image} alt={caption} caption={caption} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SingleFigureModal;
