import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Profile from "./Pages/Profile";
import Navbar from './Components/Navbar.js';
import Messages from './Pages/Messages.js';
import Map from './Pages/Map.js';


function App() {
  return (
        <div>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Messages" element={<Messages />} />
                    <Route path='/Map' element={<Map />} />
                </Routes>
            </div>
        </div>
        
  );
}

export default App;
