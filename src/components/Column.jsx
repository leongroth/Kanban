import { useDroppable } from "@dnd-kit/core"
import TaskCard from "./TaskCard"

const Column = ({column, tasks}) => {
  const {setNodeRef, } = useDroppable({
    id: column.id
  })
  return (
    <div className="w-[25vw] h-[80vh] flex-col rounded-[30px] bg-[#EFEFEF] dark:bg-[#484455] items-center relative">
      <div className="absolute -rotate-90 -left-20 top-20">
        <div className="w-40 h-10 flex justify-center items-center">
          <h2 className="font-semibold text-[2vw] text-black dark:text-white w-full">{column.title.toUpperCase()}</h2>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-[2vw] w-full h-full items-center pt-[2vw] overflow-y-scroll overflow-x-hidden" ref={setNodeRef}>{tasks.map((task => {
          return <TaskCard key={task.id} task={task}/>
      }))}</div>
    </div>
  )
}

export default Column