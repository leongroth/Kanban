import { Popover } from '@base-ui-components/react'
import { DndContext } from '@dnd-kit/core'
import { useSensors, useSensor, PointerSensor, closestCorners } from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import { ref, push, onValue, child } from 'firebase/database'
import { db } from '../firebase'
import AddCategory from './AddCategory'
import { SortableContext } from '@dnd-kit/sortable'
import CategoryContainer from './CategoryContainer'

const Backlog = () => {

    const [tag, setTag] = useState()
    const [categories, setCategories] = useState([])
    const [tasks, setTasks] = useState([])
    const [activeId, setActiveId] = useState(1)

    

    useEffect(() => {
        const categoriesData = ref(db, "/categories")
        onValue(categoriesData, (snapshot) => {
            setCategories([])
            snapshot.forEach((childsnapshot) => {
                const key = childsnapshot.key
                const category = childsnapshot.val().tag
                setCategories((categories) => [...categories, {key: key, category: category}])
            })
        })

        const tasksData = ref(db, "/tasks")
        onValue(tasksData, (snapshot) => {
            setTasks([])
            snapshot.forEach((childsnapshot) => {
                const key = childsnapshot.key
                const data = childsnapshot.val()
                if(data.location === "backlog"){
                    setTasks((tasks) => [...tasks, {key: key, data: data}])
                }
            })
        })

    }, [])
        

    const sensors = useSensors(
            useSensor(PointerSensor)
        )

    const handleDragStart = (event) => {
        const {active} = event
        const {id} = active
        setActiveId(id)
        console.log(activeId)
    }

    const handleDragMove = (event) => {
        const {active} = event
        const {id} = active
        console.log("test")
    }

    const handleDragEnd = (event) => {
        console.log("test2")
    } 


    
  return (
    <div className='w-screen h-[93vh] p-5'>
      <div className='flex'>
        <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd} >
            <SortableContext items={categories}>
                {categories.map((category) => (
                    <CategoryContainer title={category.category} />
                ))}
            </SortableContext>
        </DndContext>
        <AddCategory />
      </div>
      <div>
        {tasks.map((task) => (
            <div>{task.key}</div>
        ))}
        {tasks.length}
        Category Length
        {categories.length}
      </div>
    </div>
  )
}

export default Backlog
