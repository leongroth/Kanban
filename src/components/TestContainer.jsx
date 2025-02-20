import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'

const TestContainer = ({id, title, children, description, onAddItem}) => {

    const {
        attributes,
        setNodeRef,
        listeners,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: id,
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
        transform: CSS.Translate.toString(transform)
    }}
    className={clsx('w-full h-full p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4', isDragging && 'opacity-50')}
    >

        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-y-1'>
                <h1 className='text-gray-800 text-xl'>{title}</h1>
                <p className='text-gray-400 text-sm'>{description}</p>
            </div>
            <button
            className='border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl'
            {...listeners}
            >
            Drag Handle
            </button>
        </div> 

        {children}
        <button onClick={onAddItem} className='w-10 h-4 rounded-full bg-purple-500 text-white font-semibold text-xs'>
            Add Item
        </button>
    </div>
  )
}

export default TestContainer
