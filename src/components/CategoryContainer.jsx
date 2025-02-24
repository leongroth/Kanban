import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import clsx from "clsx"

const CategoryContainer = ({title}) => {

    const {
        attributes,
        setNodeRef,
        listeners,
        transform,
        transition,
        isDragging
    } = useSortable({
        data: {
            type: 'container'
        }
    })


  return (
    <div
    {...attributes}
    ref={setNodeRef}
    style={{
        transition,
        transform: CSS.Transform.toString(transform)
    }}
    className={clsx('w-[25vw] h-fit p-[20px] bg-[#EFEFEF] dark:bg-[#484455] rounded-[30px] flex flex-col gap-y-[20px]', isDragging && 'opacity-50')}
    >
        <h1>{title}</h1>
        <div className="w-[50px] h-[50px] bg-red-200" {...listeners}>

        </div>
    </div>
  )
}

export default CategoryContainer