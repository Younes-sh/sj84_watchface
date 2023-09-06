import {useState , useEffect} from 'react';
import CardCollection from '../Components/CardCollection';
import useFetch from '../CustomHooks/useFetch';

const Collection = () => {
  const [ items , setItems ] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/collections')
    .then(res => res.json())
    .then(res => setItems(res.data))
  }, [])

  return (
    <div className='Collection pt-5'>

      <div className='Background pt-5'>
        <div className='positionFixed'>
        </div>
      </div>

      <div className='Main pt-5'>

        <div className='w-100 h-100 pt-5 d-flex flex-wrap justify-content-center'>
          {
            items.map(item => <CardCollection key={item.id} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Collection