import { closestCorners, DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import { useState } from "react"

const KanbanTest = () => {
    const [containers, setContainers] = useState([])
    const [activeId, setActiveId] = useState(null)
    const [currentContainerId, setCurrentContainerId] = useState()
    const [containerName, setContainerName] = useState('')
    const [itemName, setItemName] = useState('')
    const [showAddContainerModal, setShowAddContainerModal] = useState(false)
    const [showAddItemModal, setShowAddItemModal] = useState(false)


    const sensors = useSensors(
        useSensor(PointerSensor)
    )

    const handleDragStart = (event) => {

    }

    const handleDragMove = (event) => {

    }

    const handleDragEnd = (event) => {

    }


  return (
    <div>
        KanbanTest
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-6">
                <DndContext
                sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}
                >
                    <SortableContext items={containers.map((container) => container.id)}>
                        {containers.map()}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    </div>
  )
}

export default KanbanTest