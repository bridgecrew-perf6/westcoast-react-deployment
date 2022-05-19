import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import VehicleList from './components/vehicles/VehicleList';
import AddVehicle from './components/vehicles/AddVehicle';
import EditVehicle from './components/vehicles/EditVehicle';
import DeleteVehicle from './components/vehicles/DeleteVehicle';
import Login from './components/authentication/Login';

// Import main css-files
import './utilities.css';
import './styles.css'

// My first component
// For this we use JS functions. You can use JS classes, 
// but this is not used in new projects

// 1. Create function
function App() {

    // 2. return JSX(html with dynamic scripts)
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/list' element={<VehicleList />} />
                    <Route path='/add' element={<AddVehicle />} />
                    <Route path='/edit/:id' element={<EditVehicle />} />
                    <Route path='/delete/:id' element={<DeleteVehicle />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </Router>
    );
}

// 3. Export component (function)
export default App;