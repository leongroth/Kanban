import { useDraggable } from "@dnd-kit/core"

const TaskCard = ({task}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: task.id
  })

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <div className="w-[21vw] h-[10vw] cursor-grab rounded-[20px] bg-white dark:bg-[#362E3E] p-4 shadow-lg hover:shadow-[0_0px_20px_rgba(129,41,141,1)] transition-all duration-500">
        <h3 className="font-semibold text-lg text-black dark:text-white transition-all duration-500 text-center ">{task.title}</h3>
        <p className="mt-2 tex-sm text-black dark:text-white transition-all duration-500">{task.description}</p>
      </div>
    </div>
  )
}

export default TaskCard