import {useEffect, useState} from 'react'
import {GetAllTasks} from '../api/tasks.api'
import TasksCard from './TasksCard'

function TasksList() {
    const [tasks,setTasks] = useState([])

    useEffect(() => {
        async function loadTasks(){
            const res  =await GetAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    },[])

  return (
    <div>
        {tasks.map(tasks =>(
            <TasksCard key={tasks.id} tasks={tasks}/>
        ))}
    </div>
  )
}

export default TasksList