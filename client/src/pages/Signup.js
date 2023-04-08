import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const [player, setPlayer] = useState({
        username:"",
        email:"",
        password:""
    })
    const [subscribed, setSubscribed] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setPlayer({
            ...player,
            [name]:value
        })
    }

    // Register Function
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const {username, email, password} = player;

        if (username && email && password){
            axios.post("http://localhost:8000/api/players/register", player)
                .then(res=> console.log(res))
        }else{
            alert("something went wrong");
        }
        setSubscribed(!subscribed);
    };

    if(subscribed) return <Navigate to="/signin" />;

    return (
        <div className="flex flex-col justify-center items-center bg-secondary h-screen p-10">
            <h1 className="text-4xl text-gray-900 font-normal font-poppins text-center mb-5">Sign Up</h1>
            <div className="bg-gray-800 flex flex-col justify-center">

                <form
                    onSubmit={handleOnSubmit}
                    className="rounded-lg w-[400px] bg-primary p-8 px-8">
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            value={player.username}
                            id="username"
                            name="username"
                            onChange={handleChange}
                            placeholder="Username"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={player.email}
                            id="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={player.password}
                            id="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"
                        />
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember me</p>

                        <a href="/" className='hover:text-[#29C9A0]'>
                            <p>Forgot Password</p>
                        </a>
                    </div>
                    <div>
                        <button className="w-full my-5 py-2 bg-[#29C9A0] rounded-lg">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup