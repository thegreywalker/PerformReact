import React from 'react'
import styles from "./Todo.module.css"
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../utils/slices/todoSlice';

const Todo = (props) => {
    const { todos } = props.payload.payload
    const dispatch = useDispatch();
    const handleDelete = (todoId) => {
        console.log(todoId);
        dispatch(deleteTodo(todoId))
    }
  

  return (
    <div className={styles.todoContainer}>
        {todos.map(todo => (
            <div 
                className={styles.todo}
                key={todo.todoId}
            >
                <div>
                    <h1>{todo.name}</h1>
                    <p>{todo.desc}</p>
                </div>
                <Button 
                    title="X" 
                    className={styles.btn}  
                    onClick={() => handleDelete(todo.todoId)}
                />
            </div>
        ))}
    </div>
  )
}

export default Todo