import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    async function handleOnSubmit(event){
        event.preventDefault();

        const response = await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        })
        const data = await response.json();
        console.log(data);
        setSubscribed(!subscribed);
    }

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
                            value={username}
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"
                        />
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember me</p>

                        <a href="#" className='hover:text-[#29C9A0]'>
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