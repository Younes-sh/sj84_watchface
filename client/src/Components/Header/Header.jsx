import './style.css';
import Classic from '../../assets/Head/classic.png';
import Buda from '../../assets/Head/Buda.png';
import Hack from '../../assets/Head/Hack.png';
import Roma from '../../assets/Head/Roma.png';
import Analog from '../../assets/Head/analog.png';
// Icon Watch
const Samsung = 'https://img.icons8.com/color/96/samsung.png';
const Apple = 'https://img.icons8.com/3d-fluency/94/mac-os.png';
const  WearOs = 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/470/Wear_OS_icon-512.png';

const Header = () => {
  return (
    <div className='w-100 h-auto p-5  bg-dark text-light d-flex flex-column justify-content-center'>
        <h1 className='  mt-lg-5'>We have put together the <span className='text-warning'>Best Collection</span></h1>
        <h1>of watches in the world</h1>
        

        <div className='w-100 h-100 mt-5 d-flex  justify-content-center'>
            <span className='px-5'><img   src={Samsung} alt="Samsung" /></span>
            <span className='px-5'><img className='w-75' src={Apple} alt="Apple" /></span>
            <span className='px-5'><img style={{width:'70px'}} src={WearOs} alt="wearos" /></span>
        </div>
        <div className='Container-watch'>
          <img className='Buda  ' src={Buda} alt="Buda" />
          <img className='Hack ' src={Hack} alt="Hack" />
          <img className='Classic ' src={Classic} alt="Classic" />
          <img className='Roma ' src={Roma} alt="Roma" />
          <img className='Analog ' src={Analog} alt="Analog" />
        </div>
        <br />
    </div>
  )
}

export default Header