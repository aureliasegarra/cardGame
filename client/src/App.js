import {  Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home.js';
import Rules from './pages/Rules.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import Game from './pages/Game.js';



const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6 py-4 flex justify-center items-center ">
            <div className="xl:max-w-[1280px] w-full">
                <Navbar/>
            </div>
        </div>

        <div>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/rules' exact element={<Rules />} />
                <Route path='/signup' exact element={<Signup />} />
                <Route path='/signin' exact element={<Signin />} />
                <Route path='/game' exact element={<Game />} />
            </Routes>
        </div>

        <div className="bg-primary w-full overflow-hidden sm:px-16 px-6 flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
                <Footer/>
            </div>
        </div>

    </div>
)

export default App;