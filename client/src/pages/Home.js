import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/signup";
        navigate(path);
    }

    return (
        /* <div className="flex flex-col justify-center items-start bg-secondary h-screen p-10">
          <h1 className="text-xl">Welcome in the game !!</h1>
          <p className="">You have to register</p>
        </div> */
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Punto
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        The point by point victory !
                    </p>
                    <div
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>A game to be played by 2 to 4 players</p>
                <button
                    onClick={routeChange}
                    className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Game</button>
            </div>
        </div>

    )
}

export default Home