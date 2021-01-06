import PropTypes from 'prop-types';

const Gallery = ({gallery, onRemoveBtnHandler}) => {
  return (
    <div className='Gallary'>
      {gallery.map((picture, idx) => (
        <div className='GallaryItem' key={picture.id}>
          <img className='GallaryPicture' src={picture.src} alt={`Картинка ${idx}`} width='300'/>
          <button className='GallaryButton' onClick={() => onRemoveBtnHandler(picture.id)}>X</button>
        </div>
      ))}
    </div>
  )
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    id: PropTypes.string
  }))
};

export default Gallery;