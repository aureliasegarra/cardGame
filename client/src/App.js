import "./App.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {  Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home.js';
import Rules from './pages/Rules.js';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
//import Game from './pages/Game.js';
import Deck from './components/Deck';



const App = () => {

    const [deck, setDeck] = useState([]);

    // Appelé 1 fois lors du 1er rendu de l'application grâce au tableau vide en 2em argument
    useEffect(() => {
        const fetchDeck = async () => {
            const response = await axios.get("http://localhost:8000/api/cards/");
            setDeck(response.data);
        };
        fetchDeck();
    },[]);


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
                    <Route path='/register' exact element={<Signup />} />
                    <Route path='/signin' exact element={<Signin />} />
                    <Route path='/game' exact element={<Deck deck={deck} /> } />
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