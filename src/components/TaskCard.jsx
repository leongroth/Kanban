import React from 'react'
import Qicon from '../assets/QuestionIcon.svg'
import Cicon from '../assets/CommentIcon.svg'

const TaskCard = ({title, description, deadline, Qactive, Cactive}) => {
    let question = ""
    let comment = ""

    if(Qactive){
        question = <img src={Qicon} className='-translate-y-[20px] absolute -bottom-[20px] left-[180px]'/>
    }
    if(Cactive){
        comment = <img src={Cicon} className='w-[30px] h-[30px] absolute z-10 -translate-x-[15px] -translate-y-15'/>
    }

  return (
    <div className='relative justify-center w-[400px] h-[235px]'>
        {comment}
        <div className='w-[400px] h-[200px] bg-white dark:bg-[#484455] transition-all duration-500 rounded-[20px] flex flex-col justify-between drop-shadow-xl absolute top-[15px]'>
            <h1 className='text-center text-[25px] font-semibold mt-[10px] text-black dark:text-white transition-all duration-500'>{title}</h1>
            <p className='mx-[30px] text-black dark:text-white transition-all duration-500'>{description}</p>
            <h2 className=' text-end mr-[20px] h-[40px] text-black dark:text-white transition-all duration-500'>{deadline}</h2>
        </div>
        {question}
    </div>
  )
}

export default TaskCard
