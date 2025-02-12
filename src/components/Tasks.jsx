import { useState } from "react"
import Column from "./Column"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import TaskCard from "./TaskCard"

const Tasks = () => {
  const COLUMNS = [
    {id: "TODO", title: "To Do"},
    {id: "DOING", title: "Doing"},
    {id: "DONE", title: "Done"},
  ]

  const INITIAL_TASKS = [
    {
      id: "1",
      title: "Research Project",
      description: "Gather requirements and create initial documnentation",
      status: "TODO" 
    },
    {
      id: "2",
      title: "Design System",
      description: "Create component library and design tokens",
      status: "TODO" 
    },
    {
      id: "3",
      title: "API integration",
      description: "Implement REST API endpoints",
      status: "DOING" 
    },
    {
      id: "4",
      title: "Testing",
      description: "Write unit tests for core functionality",
      status: "DONE" 
    }
  ]

  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [activeId, setActiveId] = useState(null) 

  const handleDragStart = (event) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event) => {
    setActiveId(null)
    const {active, over} = event

    if(!over){return}

    const taskId = active.id
    const newStatus = over.id

    setTasks(() => tasks.map(task => task.id === taskId ? {
      ...task,
      status: newStatus
    } : task))

  }

  return (
    <div className="p-4 flex justify-center">
      <div className="flex gap-8">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => {
          return <Column key={column.id} column={column} tasks={tasks.filter(task => task.status === column.id)} />
        })}
          
          <DragOverlay>
          <div className="w-[21vw] h-[10vw] cursor-grab rounded-[20px] bg-white dark:bg-[#362E3E] p-4 shadow-lg hover:shadow-[0_0px_20px_rgba(129,41,141,1)] transition-all duration-500">
            <h3 className="font-semibold text-lg text-black dark:text-white transition-all duration-500 text-center ">
              {
              tasks.map((task) => {
                if(task.id === activeId)
                return task.title
              })}
          </h3>
            <p className="mt-2 tex-sm text-black dark:text-white transition-all duration-500">
              {
              tasks.map((task) => {
                if(task.id === activeId)
                return task.description
              })}
            </p>
          </div>
          </DragOverlay>
        </DndContext>
        <div>
          test
          {tasks.map((task) => {
            if(task.id === "2")
            return task.title
          })}
        </div>
      </div>
    </div>
  )
}

export default Tasks