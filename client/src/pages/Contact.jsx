// Contact.jsx
import {useState  , useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import Comment from '../Components/Comment/Comment';
import CardComment from '../Components/Comment/CardComment';
import SocialMedia from '../Components/SocialMedia/DataSocial';


const Contact = () => {
  const [ showcomment , setShowComment] = useState([]);
  


  useEffect(() => {
    fetch('http://localhost:5000/api/comments')
    .then(res => res.json())
    .then(res => setShowComment(res.data))
  }, [])

  

  return (
    <div className='w-100 h-100 container mt-5 p-relative '>
      <h1>Contact</h1>
      <div className='position-fixed '><a  className='px-5 py-2 rounded-2 bg-info' href="#comment" style={{textDecoration:'none' , color:'#fff'}}>Comment</a></div>
      <br />
      <Row className=' w-100 mt-3 mx-auto border rounded-2'>
        <Col md={12} lg={3} className='side-contact  '>
              <div className=''>
                <SocialMedia  />
              </div>
        </Col>
        <Col md={12} lg={8} className='main-contact '>

          <div className='w-100 d-flex flex-column justify-content-center'>
            {
              showcomment.map(item => (
                <CardComment
                 key={item.id}
                 
                 createdAt={item.createdAt}
                {...item}
                
                />
              ))
            }
          </div>

       
            <span id='comment'></span>
          <Comment />

        </Col>
      </Row>
    </div>
  )
}

export default Contact