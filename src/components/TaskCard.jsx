import React from 'react'
import Qicon from '../assets/QuestionIcon.svg'
import Cicon from '../assets/CommentIcon.svg'

const TaskCard = ({title, deadline, Qactive, Cactive}) => {
    let question = ""
    let comment = ""

    if(Qactive){
        question = <img src={Qicon} className='w-[2vw] h-[2vw] -translate-y-[1vw] absolute -bottom-[1vw] right-[6vw]'/>
    }
    if(Cactive){
        comment = <img src={Cicon} className='w-[2vw] h-[2vw] absolute -bottom-[1vw] -translate-y-[1vw] left-[6vw]'/>
    }

  return (
    <div className='relative justify-center w-[20vw] h-[11.5vw]'>
        <div className='w-[20vw] h-[10vw] bg-white dark:bg-[#484455] transition-all duration-500 rounded-[20px] flex flex-col gap-[1vw] drop-shadow-xl absolute top-[0.75vw]'>
            <h1 className='text-center text-xl font-semibold mt-[0.5vw] text-black dark:text-white transition-all duration-500'>{title}</h1>
            <div>
                
            </div>
            <h2 className=' text-end mr-[1vw] h-[2vw] text-black dark:text-white transition-all duration-500'>{deadline}</h2>
        </div>
        {question}
        {comment}
    </div>
  )
}

export default TaskCard
