import TaskCard from "./TaskCard"

const Column = ({title}) => {
    const titleUpper = title.toUpperCase()

  return (
    <div className="">
        <div className="w-[25vw] h-[80vh] bg-[#EFEFEF] dark:bg-[#484455] transition-all duration-500 rounded-[40px] relative">
            <div className="w-[150px] h-[80px] absolute -left-[75px] top-[100px] -rotate-90">
                <div className="flex justify-center items-center w-[150px] h-[80px]">
                    <h1 className="text-4xl font-semibold text-black dark:text-white transition-all duration-500">{titleUpper}</h1>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Column
