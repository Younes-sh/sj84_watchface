import {Link} from 'react-router-dom';

const CardCollection = ({
    _id,
    UrlImage,
    name,
    DirectLink
}) => {
  return (
    <Link target="_blank"  to={DirectLink} style={{textDecoration:'none' , textAlign:'left'}}>
        <div  style={{width:'300px',height:'200px',margin:'10px'}}>
            <h4 style={{color:'#ccc'}} >{name}</h4>
            <div className='w-100'>
                <img style={{width:'100%'}} src={UrlImage} alt={name} />
            </div>
        </div>
    </Link>
  )
}

export default CardCollection