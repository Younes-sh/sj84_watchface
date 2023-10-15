import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/NavBar';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className='pt-5'>
        <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
