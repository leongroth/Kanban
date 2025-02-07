import React, { useState } from 'react'

const test = () => {

    const [mainColor, setMainColor] = useState("bg-[#00D712]")
    const changeColors = () => {
    if(mainColor == "bg-[#00D712]"){
        setMainColor("bg-[#FF4E4E]")
    } else {
        setMainColor("bg-[#00D712]")
    }
    }

  return (
    <>
    <button className='bg-blue-500' onClick={changeColors}>
      color
    </button>
    <div className={`${mainColor}`}>test</div>
    </>
  )
}

export default test