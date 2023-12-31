import React from 'react';
import Fade from 'react-reveal/Fade';

const FadeRightImage = ({img}) => {
 
    return (
      <div>
        <Fade right>
          <img style={{width:'300px'}} src={img} alt=""  />
        </Fade>
      </div>
    );
  
}


const FadeLeftImage = ({img}) => {
 
    return (
      <div>
        <Fade left>
          <img style={{width:'300px'}} src={img} alt="" />
        </Fade>
      </div>
    );
  
}
const FadeTopImage = ({img}) => {
 
  return (
    <div>
      <Fade left>
        <img style={{width:'300px'}} src={img} alt="" />
      </Fade>
    </div>
  );

}

const FadebottomImage = ({img}) => {
 
  return (
    <div>
      <Fade bottom>
        <img style={{width:'300px'}} src={img} alt="" />
      </Fade>
    </div>
  );

}
export  { FadeLeftImage , FadeRightImage , FadeTopImage , FadebottomImage }