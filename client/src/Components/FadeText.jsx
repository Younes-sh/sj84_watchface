import React from 'react';
import Fade from 'react-reveal/Fade';

const FadeTextRight = ({text}) => {
 
    return (
      <div>
        <Fade right cascade>
          <p>{text}</p>
        </Fade>
      </div>
    );
  
}

const FadeTextLeft = ({text}) => {
 
  return (
    <div>
      <Fade left cascade>
        <p>{text}</p>
      </Fade>
    </div>
  );

}

const FadeTextTop = ({text}) => {
 
  return (
    <div>
      <Fade top cascade>
        <p>{text}</p>
      </Fade>
    </div>
  );

}

const FadeTextDown = ({text}) => {
 
  return (
    <div className='FadeTextDown'>
      <Fade bottom cascade>
        <p style={{whiteSpace:'break-spaces'}} >{text}</p>
      </Fade>
    </div>
  );

}

export {FadeTextDown,FadeTextTop,FadeTextLeft,FadeTextRight};