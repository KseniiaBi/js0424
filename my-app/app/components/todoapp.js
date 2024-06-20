'use client'
import { useRef, useState } from "react";

// main concept of useState hook
function Counter(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default function ToDoApp(){
    // const todos = [];
    const myRef = useRef(null);

    const [todos, setTodo] = useState([]);


    const addTask = (e) => {
        e.preventDefault();
        const text = myRef.current.value;
        setTodo([...todos, text]);
        myRef.current.value = '';
    }

    return(
    <>
        <Counter />
        <form onSubmit={addTask}>
            <input ref={myRef} placeholder="Type your task" />
            <input type='submit' value='save' />
        </form>

        {
            todos.length > 0 ? <ol>
                                {
                                    todos.map((item,index) => <Todo key={index} task={item} />)
                                }
                                </ol>
                                : <h2>Any tasks yet</h2>
        }
    </>
    )
}

const Todo = ({task, id}) => {
    return(
        <li key={id}>{task}</li>
    )
}