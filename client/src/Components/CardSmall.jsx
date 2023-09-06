import {Link} from 'react-router-dom';


function BasicExample({_id,name,image,description}) {
  return (
    <Link target='_blank' to={`/viewitem/${_id}`} style={{ width: '300px' , height:'300px',margin:'7px'}}>
      <div className='ImageCardSmall'>
        <img style={{width:'100%',height:'auto'}} src={image} alt={ `Beautiful watch ${name} - ${description}` } />
      </div>
    </Link>
  );
}

export default BasicExample;