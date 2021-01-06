import {useState} from 'react';
import {nanoid} from 'nanoid';
import Gallery from './components/Gallery';
import PhotoLoader from './components/PhotoLoader';
import './App.css';

function App() {

  const [gallery, setGallery] = useState([]);

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    const pictires = urls.map(i => ({src: i, id: nanoid()}));
    setGallery((prevState) => [...prevState, ...pictires])
}

  const removePicture = (id) => {
    const newGallery = gallery.filter(pictrure => pictrure.id !== id);
    setGallery(newGallery);
  }

  return (
    <div className="App">
      <PhotoLoader handleSelect={handleSelect} />
      <Gallery gallery={gallery} onRemoveBtnHandler={removePicture}/>
    </div>
  );
}

export default App;
