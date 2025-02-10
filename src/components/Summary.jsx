import { useState } from "react"
import TestColumn from "./TestColumn"


const Summary = () => {

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

  const handleDragEnd = (event) => {
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
    <div className="p-4">
      <div className="flex gap-8">
        
        {COLUMNS.map((column) => {
          return <TestColumn key={column.id} column={column} tasks={tasks.filter(task => task.status === column.id)} />
        })}
      </div>
    </div>
  )
}

export default Summary
