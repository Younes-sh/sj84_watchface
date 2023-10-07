import { Link } from 'react-router-dom';
// Responsive react-Bootstrap 5
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// GifPlayer is a package for running GIFs
import GifPlayer from 'react-gif-player';
// Fading text and Images
import {FadeTextRight,FadeTextLeft,FadeTextTop,FadeTextDown} from '../Components/FadeText';
import {FadeLeftImage , FadeRightImage , FadebottomImage} from '../Components/FadeImage';
import ImageComponent from '../Components/ImageAWS';

// import { GoogleFonts } from 'react-google-fonts';
// import ParallaxScrollOne from '../Components/ParallaxScrollOne';

import Image_1 from '../assets/imag-landing-page/image-1.png'
import Image_2 from '../assets/imag-landing-page/image-2.png'
import Image_3 from '../assets/imag-landing-page/image-3.png'
import Image_4 from '../assets/imag-landing-page/image-4.png'
import Image_5 from '../assets/imag-landing-page/image-5.png'
import Image_6 from '../assets/imag-landing-page/image-6.png'
import Image_7 from '../assets/imag-landing-page/image-7.png'


const Landing = () => {

  return (
    <div className='w-100 LandingPage  ' >
      
      <div className='w-100 content container '>
        {/* These classes are DIV-1 for different styles in the index.css file */}
        <div className='w-100 container-divs '>
          <br />
          <br />
          <br />
          <div className='DIV-1' ></div>
          <div className='DIV-2' ></div>
          <div className='DIV-3' ></div>
        </div>
      </div>

      <div className='w-100 GlaceMorphism  d-flex flex-column'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* -------------------- 1 ---------------- */}
        
        <Row className='w-100 container m-auto mt-5 flex-lg-wrap-reverse' >
          <Col className='text-start order-1 order-lg-0' lg={6}>
            {/* <GoogleFonts font='Open Sans' /> */}
            <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Analog M'} /> </h1>
            {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
            <FadeTextDown text={'It is great that the classic designs still maintain their place among digital watches, and they have been dedicated a large part of the designs of these new and eye-catching watches'} />
          </Col>

          <Col className='text-lg-end order-0 order-lg-1' lg={6}>
            <FadebottomImage img={Image_1} />
            <br />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      

        {/* -------------  2 ------------------- */}

         

        <Row className=' container m-auto mt-5'>

            <Col className='text-lg-start'lg={6}>
              <FadebottomImage img={Image_2} />
              
            </Col>
            <Col className='text-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Polygon v.2 Hybride'} /> </h1>
              {/* <h5 className='mt-5'  style={{fontFamily:'Open Sans'}}> <FadeTextDown text={'Mohsen Sheikhlar e'} /> </h5> */}
              <FadeTextDown text={'Digital watches quickly opened their position in people\'s hearts and lives, providing a new window for their owners. The main point is that these are not just watches; they are equipped with practical applications.'} />

            </Col>

        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
        {/* -----------------------------  3 ----------------------------------- */}

          


        <Row className=' container m-auto mt-5'>
            <Col className='text-start order-1 order-lg-0'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Tirdad - Summer'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar 62'} /></h4> */}
              <FadeTextDown text={'What\'s better than having a wrist computer with you? A computer that, in addition to elegance and beautiful designs, includes GPS and a toolbox of pressure gauges and oxygen meters. We offer beautiful designs across several watch models, all with free designs!'} />

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
              <FadebottomImage img={Image_3} />
            </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
     
        {/* -----------------------------   4   ------------------------------ */} 

        


        <Row className=' container m-auto mt-5'>
            <Col className='text-start'lg={6}>
              <FadebottomImage img={Image_4} />
            </Col>
            <Col className='text-lg-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown  text={'Soul - Colorful copy'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
              <FadeTextDown text={'Transfer your desired design to your phone with just one click Calm your soul and connect with the designs that are sprouting in your heart, And look unique'} />

              

            </Col>

        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
  

          
        {/* -----------------------------   5    ---------------------------------- */}
         


        <Row className=' container m-auto mt-5' >
            <Col className='text-start order-1 order-lg-0'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'APW 4'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
             <FadeTextDown text={'Of course, we did not forget Apple Watch owners and created beautiful and free designs for them  You can\'t be without apple and experience being stylishو For this reason, we created 3D designs and concept designs for you dear ones'} />

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
              <FadebottomImage img={Image_5} />
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
   

        {/* -----------------------------   6    ---------------------------------- */}

        <Row className=' container m-auto mt-5'>

            <Col className='text-lg-start'lg={6}>
              <FadebottomImage img={Image_6} />
            </Col>
            <Col className='text-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Jungle 1'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
            <FadeTextDown text={'We have created impressive designs for you to have in your hands with several beautiful photos in one beautiful photo frame, This is the magic of the digital watch that you will have everything you want in your hands'} />

            </Col>

        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
 

          
        {/* -----------------------------   7    ---------------------------------- */}
          
        <Row className=' container m-auto mt-5'>
            <Col className='text-start order-1 order-lg-0'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mars'} /></h1>
              <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'We are not alone'} /></h4>
              <FadeTextDown text={'Enjoy by installing the app within the watch and enjoy personalizing the options in the designs. Touch the future ahead of you and think ambitiously and walk with pride.'} />

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
                <FadebottomImage img={Image_7} />
            </Col>
        </Row>

        {/* ----------------------------- 8 ---------------------- */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    
        {/* End glace morphisme */}
      </div>


    </div>
  )
}

export default Landing