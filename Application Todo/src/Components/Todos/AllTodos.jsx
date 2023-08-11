import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const AllTodos = (props) => {
  return (
    <div>
        <Todo 
            payload={props}
        />
    </div>
  )
}

export default AllTodos