import React from 'react'
import './Task.css'
import { useDispatch } from 'react-redux'
import Edit from '../Edit/Edit'
import { Button } from 'react-bootstrap'
import { deleteTask, doneTask } from '../../JS/Actions/listTask'

const Task = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div className='task-container '>
      <span>{task.text}</span>
      <Edit task={task} />
      <Button onClick={()=> dispatch(deleteTask(task.id))} >DELEte</Button>
      <Button onClick={()=> dispatch(doneTask(task.id))}>{task.isDone ? "unDone" : "Done"} </Button>

    </div>
  )
}

export default Task