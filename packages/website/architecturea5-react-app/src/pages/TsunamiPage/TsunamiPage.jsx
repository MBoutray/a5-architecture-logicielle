import Navbar from '../../components/Navbar/Navbar';
import tsunami from "../../assets/tsunami.jpg"
import React, { useState } from "react";

function Tsunami() {

    let [count, setCount] = useState(1);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

  return (
    <>
      <Navbar />
        <div>
            <h1 className="text-4xl font-bold text-center text-white my-10">Stop the tsunami</h1>
        </div>
        <div className='flex justify-center'>
            <img src={tsunami} className="w-80 h-96 object-cover object-center my-4" alt="tsunami" />
            <div className="w-1/2 p-12">
                <div>
                    <p className="mb-4 text-white text-2xl font-bold"> Your mission :</p>
                    <p className="m-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div>
                    <p className="my-8 text-white text-2xl font-bold"> Number of agents :</p>
                    <div class="flex m-8">
                        <button className='text-white text-4xl font-bold' onClick={decrementCount}>-</button>
                        <div className='py-2 px-16 mx-4 text-lg font-bold focus:outline-none bg-white rounded-2xl border border-gray-200 '>{count}</div>
                        <button className='text-white text-4xl font-bold' onClick={incrementCount}>+</button>
                    </div>
                </div>

                <div className="flex justify-end mr-12">
                    <button type="button" className="py-2.5 px-10 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit this mission</button>
                </div>
                <div className="flex justify-end mr-12">
                    <button type="button" className="py-2.5 px-8 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Select this mission</button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Tsunami;