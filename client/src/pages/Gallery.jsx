import { Outlet , Link , NavLink , useNavigate} from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios';
import DefaultImage from '../assets/Image-Register-page/watch.jpeg';
import CopyAddress from '../Components/CopyAddress/CopyAddress';

const Gallery = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const URL = process.env.REACT_APP_URL_API

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/gallery/all')
  } , [])

  useEffect(() => {
    // Fetch background image data from API endpoint
    axios.get(`${URL}api/imagegallery`)
      .then(response => setBackgroundImage(response.data))
      .catch(error => {
        console.error('Error fetching background image:', error);
      });
  }, []);
 
  const IMG = backgroundImage.data && backgroundImage.data[0] ? backgroundImage.data[0].UrlImage : '';

  return (
    <div className='Gallery  ' >

      {/* content-image  is for Background-image  */}
      
      <div className='containerImage'>
        <div className='content-image' style={{backgroundImage:`url(${IMG||DefaultImage})`}}>
        </div>
      </div>
      {/* -------------------- */}
      <div className='content-element pt-5'>
      
          <div className='container-button-gallery d-flex flex-wrap'>
            <NavLink  className='button-85 m-3 ' to='all'>All</NavLink>
            <NavLink  className='button-85 m-3 ' to='apple'>Apple</NavLink>
            <NavLink  className='button-85 m-3' to='samsung'>Samsung</NavLink>
            <NavLink  className='button-85 m-3' to='squar'>Squar</NavLink>
          </div>

      
        <div className='w-100 h-auto '>
          
            <Outlet  />
          
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      
      
    </div>
  );
};

export default Gallery;
