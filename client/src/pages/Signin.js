import React, { useState } from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";


const Signin = () => {
    const [logged, setLogged] = useState(false);
    const [player, setPlayer] = useState({
        email:"",
        password:""
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setPlayer({
            ...player, //spread operator
            [name]:value
        })
    }

    const handleOnLogin = () => {
        axios.post("http://localhost:8000/api/players/login", player)
            .then(res => {
                console.log(res.data);
                setPlayer(res.data.player);
            });
        setLogged(!logged);

    };

    if(logged) return <Navigate to="/game" />;

    return (
        <div className="flex flex-col justify-center items-center bg-secondary h-screen p-10">
            <h1 className="text-4xl text-gray-900 font-normal font-poppins text-center mb-5">Sign in</h1>
            <div className="bg-gray-800 flex flex-col justify-center">

                <form
                    onSubmit={handleOnLogin}
                    className="rounded-lg w-[400px] bg-primary p-8 px-8">
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            value={player.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                        />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"
                            value={player.password}
                            onChange={handleChange}
                            placeholder={"Your password"}
                            required
                        />
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember me</p>

                        <a href="/" className='hover:text-[#29C9A0]'>
                            <p>Forgot Password</p>
                        </a>
                    </div>
                    <div>
                        <button className="w-full my-5 py-2 bg-[#29C9A0] rounded-lg">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;