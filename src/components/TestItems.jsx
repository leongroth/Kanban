import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import clsx from "clsx"

const TestItems = ({id, title}) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: id,
        data: {
            type: 'item'
        }
    })
  return (
    <div
    ref={setNodeRef}
    {...attributes}
    style={{
        transition,
        transform: CSS.Translate.toString(transform)
    }}
    className={clsx('px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover: border-black', isDragging && 'opacity-50')}
    >
        <div className="flex items-center justify-between">
            {title}
            <button className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl" {...listeners}>
                Drag Handle
            </button>
        </div>
      
    </div>
  )
}

export default TestItems
