import React, {useState} from 'react'
import To_do_Form from './To_do_Form';
import To_do from './To_do';

export default function To_do_list() {

    //state Array which hold all todos
    const [todos, setTodo] = useState([]);

    const addTask = (task) =>{
        if(!task.text){
            return
        }

        const newTodos = [task, ...todos]
        setTodo(newTodos)
    }

    //Remove Todo from list
    const removeTask = id =>{
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodo(updatedTasks)
    }

    //Task is Completed
    const completeTask = id =>{
        let updatedTasks = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodo(updatedTasks)
    }

  return (<div>
    <To_do_Form addTask={addTask}></To_do_Form>
    <To_do todos={todos} completeTask={completeTask} removeTask={removeTask}></To_do>
    </div>
    )
}
