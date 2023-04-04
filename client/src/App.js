import "./App.css";
import React, {useState, useEffect} from "react";
//import Grid from "./components/Grid";

import {  Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home.js';
import Rules from './pages/Rules.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import Game from './pages/Game.js';



const App = () => {

    /*const [cards, setCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await fetch(`http://localhost:8000/cards`);
        const json = await res.json();
        setCard(json);
    }

    const Card = ({value, color}) => {
        return (
            <div
                className={`card ${color}`}
                draggable={true}
                onDragStart={event => event.dataTransfer.setData("value", value)}
            >
                {value}
            </div>
        )
    }*/

    return (
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
}


export default App;