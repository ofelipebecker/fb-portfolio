const ProjectIntro = ({ intro }) => {
  return (
    <div className='col-12 my-5'>
      <h1 className='mb-4'>{intro.data.title}</h1>
      <div className='card border-0 rounded-3 shadow-sm'>
        <div className='card-body d-flex flex-column'>
          <figure className='figure'>
            <img
              src={intro.image}
              className='figure-img img-fluid w-100 border'
              alt={`${intro.data.title} Main`}
            />
            <figcaption className='figure-caption'>
              {intro.data.caption}
            </figcaption>
          </figure>
          <p className='mb-0 mt-4'>{intro.data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntro;
