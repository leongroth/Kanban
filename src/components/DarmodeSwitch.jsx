import React, { useEffect, useState } from 'react'
import Moon from '../assets/Moon.svg'
import Sun from '../assets/Sun.svg'


const DarmodeSwitch = () => {

    const darkmodeState = JSON.parse(localStorage.getItem('isDarkmode'))

    function toggleTheme(){
        document.documentElement.classList.toggle("dark")

        if(darkmodeState){
            localStorage.removeItem('isDarkmode')
        } else {
            localStorage.setItem('isDarkmode', JSON.stringify("true"))
        }
    }

    return (
    <div className="mt-[10px] w-[90%] flex justify-end items-center gap-[5px]">
        <button onClick={toggleTheme} className="w-[60px] h-[30px] bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold drop-shadow-lg hover:bg-gray-700">
            <div className='w-[26px] h-[26px] bg-white dark:bg-black rounded-full ml-[2px] transition-all duration-500 dark:ml-[32px] flex justify-center items-center'>
                <img src={Sun} className='block dark:hidden' />
                <img src={Moon} className='hidden dark:block' />
            </div>
        </button>
        <div>
            {JSON.parse(localStorage.getItem('isDarkmode'))}
        </div>
    </div>
    )
}

export default DarmodeSwitch
