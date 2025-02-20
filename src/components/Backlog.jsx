import { Popover } from '@base-ui-components/react'
import { DndContext } from '@dnd-kit/core'
import { useSensors, useSensor, PointerSensor, closestCorners } from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import { ref, push, onValue, child } from 'firebase/database'
import { db } from '../firebase'

const Backlog = () => {

    const [tag, setTag] = useState()
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const query = ref(db, "/categories")
        return onValue(query, (snapshot) => {
            setCategories([])
            snapshot.forEach((childsnapshot) => {
                const key = childsnapshot.key
                const category = childsnapshot.val().tag
                setCategories((categories) => [...categories, {key: key, category: category}])
            })
        })
    }, [])



    const sensors = useSensors(
            useSensor(PointerSensor)
        )


    const addCategory = () => {
        push(ref(db, "/categories"), {
            tag: tag
        })
    }

    
  return (
    <div className='w-screen h-[93vh] p-5'>
      <div className='flex'>
        <DndContext sensors={sensors} collisionDetection={closestCorners} >
            <div className='flex gap-2'>
                {categories.map((item) => (
                    <div>{item.category}</div>
                ))}
            </div>
        </DndContext>
        <div className='w-[300px] h-fit relative'>
            <Popover.Root>
                <Popover.Trigger className="w-[200px] mx-[50px] h-[50px] text-lg font-semibold text-white bg-purple-500 hover:bg-purple-400 rounded-full">
                    Add Category
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={-50}>
                        <Popover.Popup className="w-[300px] h-fit bg-[#EFEFEF] rounded-[20px] flex justify-center flex-col p-3 gap-3">
                            <input type='text' placeholder='Category Title' className='h-[40px] rounded-[20px]' onChange={(e) => {setTag(e.target.value)}}/>
                            <button className='bg-purple-400 w-[100px] h-[40px] text-lg font-semibold text-white rounded-full' onClick={addCategory}>Add</button>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
      </div>
    </div>
  )
}

export default Backlog
