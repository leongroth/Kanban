import { closestCorners, DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"
import { act, useState } from "react"
import TestContainer from "./TestContainer"
import TestItems from "./TestItems"

const KanbanTest = () => {
    const [containers, setContainers] = useState([
        {
            id: 'container-1',
            title: "Literatur",
            items: [{
                id: "item-1",
                title: "Item 1"
            }]
        },
        {
            id: 'container-2',
            title: "Møder",
            items: [{
                id: "item-2",
                title: "Item 2"
            }]
        }
    ])
    const [activeId, setActiveId] = useState(null)
    const [currentContainerId, setCurrentContainerId] = useState()
    const [containerName, setContainerName] = useState('')
    const [itemName, setItemName] = useState('')
    const [showAddContainerModal, setShowAddContainerModal] = useState(false)
    const [showAddItemModal, setShowAddItemModal] = useState(false)

    const findValueOfItems = (id, type) => {
        if(type === 'container'){
            return containers.find((container) => container.id === id)
        }
        if(type === 'item'){
            return containers.find((container) => container.items.find((item) => item.id === id))
        }
    }


    const sensors = useSensors(
        useSensor(PointerSensor)
    )

    const handleDragStart = (event) => {
        const {active} = event
        const {id} = active
        setActiveId(id)
    }

    const handleDragMove = (event) => {
        const {active, over} = event

        //Handle Items Sorting
        if(active.id.toString().includes("item") && over?.id.toString().includes("item") && active && active.id !== over.id){
            // Find the active container and over container
            const activeContainer = findValueOfItems(active.id, 'item')
            const overContainer = findValueOfItems(over.id, 'item')

            // If the active or over container is undefined, return
            if(!activeContainer || !overContainer){return}

            // Find the active and over container index
            const activeContainerIndex = containers.findIndex((container) => container.id === activeContainer.id)
            const overContainerIndex = containers.findIndex((container) => container.id === overContainer.id)

            // Find the index of the active and over item
            const activeItemIndex = activeContainer.items.findIndex((item) => item.id === active.id)
            const overItemIndex = overContainer.items.findIndex((item) => item.id === over.id)

            // In the same container
            if(activeContainerIndex === overContainerIndex){
                let newItems = [...containers]
                newItems[activeContainerIndex].items = arrayMove(
                    newItems[activeContainerIndex].items,
                    activeItemIndex,
                    overItemIndex
                )


                setContainers(newItems)
            } else {
                // In different container
                let newItems = [...containers]
                const [removedItem] = newItems[activeContainerIndex].items.splice(
                    activeItemIndex,
                    1
                )
                newItems[overContainerIndex].items.splice(
                    overItemIndex,
                    0,
                    removedItem
                )
                setContainers(newItems)
            }
        }

        // Handling item drop into a container
        if(active.id.toString().includes("item") && over?.id.toString().includes("container") && active && over && active.id !== over.id){
            // Find the active and over container
            const activeContainer = findValueOfItems(active.id, 'item')
            const overContainer = findValueOfItems(over.id, 'container')

            // If the active or over container is undefined
            if(!activeContainer || !overContainer){return}

            // Find the index of the active and the over container
            const activeContainerIndex = containers.findIndex((container) => container.id === activeContainer.id) 
            const overContainerIndex = containers.findIndex((container) => container.id === overContainer.id) 

            // Finde the index of the active item on the active container
            const activeItemIndex = activeContainer.items.findIndex((item) => item.id === active.id)

            // Remove the active item from the active container and add i to the over container
            let newItems = [...containers]
            const [removedItem] = newItems[activeContainerIndex].items.splice(
                activeItemIndex,
                1
            )
            newItems[overContainerIndex].items.push(removedItem)
            setContainers(newItems)
        }
        
    }

    const handleDragEnd = (event) => {
        const {active, over} = event

        // Handle container sorting
        if(active.id.toString().includes("container") && over?.id.toString().includes("container") && active && over && active.id !== over.id){
            const activeContainerIndex = containers.findIndex((container) => container.id === active.id)
            const overContainerIndex = containers.findIndex((container) => container.id === over.id)

            // Swap the active and over container
            let newItems = [...containers]
            newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex)
            setContainers(newItems)
        }

        // Handle item sorting
        if(active.id.toString().includes("item") && over?.id.toString().includes(item) && active && over && active.id !== over.id){
            // Find the active container and over container
            const activeContainer = findValueOfItems(active.id, 'item')
            const overContainer = findValueOfItems(over.id, 'item')

            // If the active or over container is undefined
            if(!activeContainer || !overContainer){return}

            // Find the active and over container index
            const activeContainerIndex = containers.findIndex((container) = container.id === activeContainer.id)
            const overContainerIndex = containers.findIndex((container) => container.id === overContainer.id)

            // Find the index of the active and over item
            const activeItemIndex = activeContainer.items.findIndex((item) => item.id === active.id)
            const overItemIndex = overContainer.items.findIndex((item) => item.id === over.id)

            // If in the same container
            if(activeContainerIndex === overContainerIndex){
                let newItems = [...containers]
                newItems[activeContainerIndex].items = arrayMove(newItem[activeContainerIndex].items, activeItemIndex, overItemIndex)
                setContainers(newItems)
            } else {
                // In different containers
                let newItems = [...containers]
                const [removedItem] = newItems[activeContainerIndex].items.splice(
                    activeItemIndex,
                    1
                )
                newItems[overContainerIndex].items.splice(
                    overItemIndex,
                    0,
                    removedItem
                )
                setContainers(newItems)
            }
        }

        // Handling item drop into a container
        if(active.id.toString().includes("item") && over?.id.toString().includes("container") && active && over && active.id !== over.id){
            const activeContainer = findValueOfItems(active.id, 'item')
            const overContainer = findValueOfItems(over.id, "container")

            // If the active or over container is undefined
            if(!activeContainer || !overContainer){return}

            // Find the index of the active and over container
            const activeContainerIndex = containers.findIndex((container) => container.id === activeContainer.id)
            const overContainerIndex = containers.findIndex((container) => container.id === overContainer.id) 

            // Find the index of the active item in the active container
            const activeItemIndex = activeContainer.items.findIndex((item) => item.id === active.id)

            let newItems = [...containers]
            const [removedItem] = newItems[activeContainerIndex].items.splice(
                activeItemIndex,
                1
            )
            newItems[overContainerIndex].items.push(removedItem)
            setContainers(newItems)
        }
        setActiveId(null)
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
                        {containers.map((container) => (
                            <TestContainer key={container.id} title={container.title} id={container.id} onAddItem={() => {
                                setShowAddItemModal(true)
                                setCurrentContainerId(container.id)
                            }}>
                                <SortableContext items={container.items.map((i) => i.id)}>
                                    <div className="flex items-start flex-col gap-y-4">
                                        {container.items.map((item) => (
                                            <TestItems key={item.id} id={item.id} title={item.title} />
                                        ))}
                                    </div>
                                </SortableContext>
                            </TestContainer>
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    </div>
  )
}

export default KanbanTest