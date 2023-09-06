import { useState , useEffect } from 'react';
import CardSocialMedia from './CardSocialMedia';
import {Row} from 'react-bootstrap';
const DataSocial = () => {
    const [social , setSocial] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/socialmedias')
        .then(res => res.json())
        .then(res => setSocial(res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className='w-100 '>

            <div   className='w-100 mt-4 d-flex flex-wrap '>
                {
                    social.map(item => <CardSocialMedia key={social._id} {...item} />)
                }
            </div>

    </div>
  )
}

export default DataSocial