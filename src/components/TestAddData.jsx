import {db} from '../firebase'
import { ref, set, push, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'

const TestAddData = () => {
    const [description, setDescription] = useState()
    const [deadline, setDeadline] = useState()

    const [tasks, setTasks] = useState([])


    const submitData = () => {
        push(ref(db, "/tasks"), {
            description: description,
            deadline: deadline,
            priority: tasks.length + 1
        })
    }

    useEffect(() => {
        const query = ref(db, "/tasks")
        tasks.sort((a, b) => a.priority - b.priority)
        return onValue(query, (snapshot) => {
            setTasks([])
            snapshot.forEach((childsnapshot) => {
                const key = childsnapshot.key
                const data = childsnapshot.val()
                const priority = Number(data.priority)
                
                const task = {key: key, description: data.description, deadline: data.deadline, priority: priority}
                if(tasks.indexOf(task) == -1){
                    setTasks((tasks) => [...tasks, task])
                }
            })
        })
    }, [])


  return (
    <div>
        <div className='w-[50vw] h-fit bg-[#EFEFEF] rounded-[30px] flex flex-col justify-center items-center p-[2vw] gap-5'>
            <div className='flex gap-5 justify-end items-center w-[40vw]'>
                <h1>Description:</h1>
                <input type='text' className='w-[30vw] h-[2vw] bg-white rounded-full' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='flex gap-5 justify-end items-center w-[40vw] '>
                <h1>Deadline:</h1>
                <input type='date' className='h-[2vw] bg-white rounded-full' onChange={(e) => setDeadline(e.target.value)} />
            </div>
            <button className='bg-purple-700 hover:bg-purple-400 text-white font-semibold text-xl w-[100px] h-[40px] rounded-full drop-shadow-xl' onClick={submitData}>Submit</button>

        </div>
        <button className='bg-purple-700 hover:bg-purple-400 text-white font-semibold text-xl w-[100px] h-[40px] rounded-full drop-shadow-xl'>Get Data</button>
        <div className='w-[50vw] h-fit bg-[#EFEFEF] rounded-[30px] justify-center items-center p-4 gap-5 flex flex-col'>
            {tasks.length}
            {
            tasks.sort((a,b) => a.priority - b.priority).map((task) => (
                <div className='w-[40vw] h-fit bg-white rounded-[20px]'>
                    <h1>{task.key}</h1>
                    <h1>{task.description}</h1>
                    <p>{task.priority}</p>
                    <p>{typeof task.priority}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TestAddData