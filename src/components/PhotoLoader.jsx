import PropTypes from 'prop-types';

const PhotoLoader = ({handleSelect}) => {
  return (
    <div className="Wrapper">
      <input className='PhotoLoader' type='file' onChange={handleSelect} multiple/>
      <div className="Click">Click to select</div>
    </div>
  )
};

PhotoLoader.propTypes = {
  handleSelect: PropTypes.func
}

export default PhotoLoader;