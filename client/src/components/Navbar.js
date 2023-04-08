import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { punto } from '../assets';


const Navbar = ({player}) => {
    const [logged] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center navbar">
            <Link to="/">
                <img src={punto} alt="punto card logo" className="w-[90px]"/>
            </Link>
            <h1 className="text-white text-4xl ml-5">Punto</h1>

            <ul className="list-none justify-end items-center flex-1 flex flex-row flex-end">

                <Link to="/"
                      className={`font-popins font-normal cursor-pointer text-[16px] mr-10 text-white`}>Home</Link>
                <Link to="/rules"
                      className={`font-popins font-normal cursor-pointer text-[16px] mr-10 text-white`}>Rules</Link>
                <Link to='/register'
                      className={`font-popins font-normal cursor-pointer text-[16px] mr-10 text-white`}>Signup</Link>
                <Link to='/signin'
                      className={`font-popins font-normal cursor-pointer text-[16px] mr-10 text-white`}>Signin</Link>
                <Link to='/game'
                      className={`font-popins font-normal cursor-pointer text-[16px] mr-10 text-white`}>Game</Link>
                {logged && (
                    <p className="text-4xl text-red-600">{player.username}</p>
                )}
            </ul>
        </nav>
    )
}


export default Navbar