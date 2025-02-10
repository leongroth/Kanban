import Column from "./Column"
import TaskCard from "./TaskCard"

const Tasks = () => {


  return (
    <div className="flex gap-[5vw] justify-center mt-[20px]">
      <TaskCard title={"test"} deadline={"12/5"} Qactive={true} Cactive={true} />
    </div>
  )
}

export default Tasks