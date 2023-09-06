import { Link } from 'react-router-dom';
// Responsive react-Bootstrap 5
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// GifPlayer is a package for running GIFs
import GifPlayer from 'react-gif-player';
// Fading text and Images
import {FadeTextRight,FadeTextLeft,FadeTextTop,FadeTextDown} from '../Components/FadeText';
import {FadeLeftImage , FadeRightImage} from '../Components/FadeImage';
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
    <div  className=' LandingPage ' >
      
      <div className='content '>
        {/* These classes are DIV-1 for different styles in the index.css file */}
        <div className='container-divs'>
          <br />
          <br />
          <br />
          <div className='DIV-1' ></div>
          <div className='DIV-2' ></div>
          <div className='DIV-3' ></div>
        </div>
      </div>

      <div className=' GlaceMorphism'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* -------------------- 1 ---------------- */}
          <Row className=' container m-auto mt-5 flex-lg-wrap-reverse' >
            <Col className='text-start order-1 order-lg-0' lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Analog M'} /> </h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
              <p className='mt-5' ><FadeTextDown text={'It is beautiful that the classic designs still maintain their place among digital watches and a large part of the designs of these new and eye-catching watches are dedicated to themselves.!'} /></p>

              <p className='mt-5' ><FadeTextDown text={'We want to present you beautiful designs on this website'} /></p>

              <Link to={'/registerlogin/register'} className='btn border text-light' style={{backgroundColor:'#11ce31ba'}}>Register</Link>
            </Col>

            <Col className='text-lg-end order-0 order-lg-1' lg={6}>
              <FadeRightImage img={Image_1} />
              <br />
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

 {/* -------------------------------  2 -------------------------------------- */}

         

          <Row className=' container m-auto mt-5'>

            <Col className='text-lg-start'lg={6}>
              <FadeLeftImage img={Image_2} />
              
            </Col>
            <Col className='text-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Polygon v.2 Hybride'} /> </h1>
              {/* <h5 className='mt-5'  style={{fontFamily:'Open Sans'}}> <FadeTextDown text={'Mohsen Sheikhlar e'} /> </h5> */}
              <p className='mt-5' ><FadeTextDown text={'Digital watches that quickly opened their place in people\'s hearts and lives and opened a new window for their owners.'} /></p>
              <p className='mt-5 '><FadeTextDown text={'The main thing is that these are not just one watch! And they are equipped with practical devices'} /> </p>

            </Col>

          </Row>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
              <p className='mt-5' ><FadeTextDown text={'What\'s better than having a wrist computer with you?! A computer that, in addition to   elegance and beautiful designs, has GPS and a toolbox of pressure gauges and oxygen meters Beautiful designs in several watch models, of course with free designs!'} /></p>

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
              <FadeRightImage img={Image_3} />
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* -----------------------------   4   ------------------------------ */} 

        


          <Row className=' container m-auto mt-5'>
            <Col className='text-start'lg={6}>
              <FadeLeftImage img={Image_4} />
            </Col>
            <Col className='text-lg-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown  text={'Soul - Colorful copy'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
              <p className='mt-5' ><FadeTextDown text={'Transfer your desired design to your phone with just one click Calm your soul and           connect with the designs that are sprouting in your heart, And look unique'} /></p>

              

            </Col>

          </Row>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
              <p className='mt-5' ><FadeTextDown text={'Of course, we did not forget Apple Watch owners and created beautiful and free designs for them  You can\'t be without apple and experience being stylishو For this reason, we created 3D designs and concept designs for you dear ones'} /></p>

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
              <FadeRightImage img={Image_5} />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


            {/* -----------------------------   6    ---------------------------------- */}

          <Row className=' container m-auto mt-5'>

            <Col className='text-lg-start'lg={6}>
              <FadeLeftImage img={Image_6} />
            </Col>
            <Col className='text-start'lg={6}>
              {/* <GoogleFonts font='Open Sans' /> */}
              <h1 style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Jungle 1'} /></h1>
              {/* <h4 className='mt-5'  style={{fontFamily:'Open Sans'}}><FadeTextDown text={'Mohsen Sheikhlar'} /></h4> */}
              <p className='mt-5' ><FadeTextDown text={'We have created impressive designs for you to have in your hands with several beautiful photos in one beautiful photo frame, This is the magic of the digital watch that you will have everything you want in your hands'} /></p>

            </Col>

          </Row>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
              <p className='mt-5' ><FadeTextDown text={'Enjoy by installing the app within the watch and enjoy personalizing the options in the designs. Touch the future ahead of you and think ambitiously and walk with pride.'} /></p>

            </Col>

            <Col className='text-lg-end order-0 order-lg-1'lg={6}>
                <FadeRightImage img={Image_7} />
            </Col>
          </Row>

          {/* ----------------------------- 8 ---------------------- */}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


      </div>


    </div>
  )
}

export default Landing