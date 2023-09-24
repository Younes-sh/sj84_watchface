import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav';
import Routing from './routes/Routing';
import DarkModeToggle from './Components/DarkModeToggle'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className=' pt-5 '>
        <Routing />
        <DarkModeToggle />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
