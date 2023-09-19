import { Link , NavLink , Outlet , useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
import  defaultImage   from '../assets/Image-Register-page/watch.jpeg';

const NestedPage = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_URL_API

  useEffect(() => {
    // Fetch background image data from API endpoint
    axios.get(`${URL}api/imageregister`)
      .then(response => setBackgroundImage(response.data))
      .catch(error => {
        console.error('Error fetching background image:', error);
      });
  }, []);

  const IMG = backgroundImage.data && backgroundImage.data[0] ? backgroundImage.data[0].UrlImage : '';
// This is the useEffect for register preference !
  useEffect(() => {
    navigate('/registerlogin/register')
  },[])


  return (
    <div className='w-100 vh-100  d-flex flex-column  parentRegisterLogin ' style={{backgroundImage:`url(${IMG||defaultImage})`}}>
       {/* <div className='mt-5 pt-5 container-btn'>
        <NavLink  to={'register'} className=' mx-2 button-91'>Register</NavLink>
        <NavLink  to={'login'} className=' mx-2 button-91'>Login</NavLink>
       </div>

       <div className='pt-3'>
        <Outlet />
       </div> */}

    <div className='w-100 h-100 facer'>
         <iframe src="https://www.facer.io/login" width='100%' height='100%' frameborder="0"></iframe>
    </div>

    </div>
  )
}

export default NestedPage