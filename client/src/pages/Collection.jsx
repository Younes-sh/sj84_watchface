import {useState , useEffect} from 'react';
import CardCollection from '../Components/CardCollection';

const Collection = () => {
  const [ items , setItems ] = useState([])
  const URL = process.env.REACT_APP_URL_API;

  useEffect(() => {
    // ارسال درخواست به بک‌اند و دریافت لیست کاربران
    fetch(`${URL}/api/collections`)
      .then(res => res.json())
      .then(res => {
        setItems(res.data); // تنظیم لیست کاربران
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // [] به منظور اجرای این افعال فقط یکبار در هنگام نمایش کامپوننت

  return (
    <div className='Collection  pt-5'>

      <div className='Background pt-5'>
        <div className='positionFixed'>
        </div>
      </div>

      <div className='Main pt-5'>

        <div className='w-75 h-100 m-auto  pt-5 d-flex b-shadow flex-wrap justify-content-center '>
          {
            items.map(item => <CardCollection key={item.id} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Collection