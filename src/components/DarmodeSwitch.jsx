import React, { useState } from 'react'
import Moon from '../assets/Moon.svg'
import Sun from '../assets/Sun.svg'


const DarmodeSwitch = () => {

    function toggleTheme(){
        document.documentElement.classList.toggle("dark")
    }

    return (
    <div className="mt-[10px] w-[90%] flex justify-end items-center gap-[5px]">
        <button onClick={toggleTheme} className="w-[60px] h-[30px] bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold drop-shadow-lg hover:bg-gray-700">
            <div className='w-[26px] h-[26px] bg-white dark:bg-black rounded-full ml-[2px] transition-all duration-500 dark:ml-[32px] flex justify-center items-center'>
                <img src={Sun} className='block dark:hidden' />
                <img src={Moon} className='hidden dark:block' />
            </div>
        </button>
    </div>
    )
}

export default DarmodeSwitch
