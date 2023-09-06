import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap'

const CardSocialMedia = ({_id,UrlImage,name,LinkDirection}) => {
  return (
    <div className='text-start   m-auto' style={{width:'70px',height:'70px',margin:'10px'}} >
       
        <Link to={LinkDirection} target='_blank' style={{textDecoration:'none' }}>
                    <div lg={3}>
                        <div style={{width:'30px',height:'30px',borderRadius:'7px'}}>
                          <img style={{width:'100%' , height:'100%',borderRadius:'7px'}} src={UrlImage} alt={name} />
                        </div>
                        <p>{name}</p>
                    </div>
        </Link>
           
    </div>
  )
}

export default CardSocialMedia
