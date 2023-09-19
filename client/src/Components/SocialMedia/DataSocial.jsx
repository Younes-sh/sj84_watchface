import { useState , useEffect } from 'react';
import CardSocialMedia from './CardSocialMedia';
const DataSocial = () => {
    const [social , setSocial] = useState([]);
    const URL = process.env.REACT_APP_URL_API;
    useEffect(() => {
        fetch(`${URL}/api/socialmedias`)
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