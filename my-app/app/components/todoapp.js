'use client'
import { useRef, useState } from "react";
import useInput from "./useInput";
import Counter from "./counter";
import { Component } from "react";

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

    const [todo, setTodoText] = useInput('');

    return(
    <>
        <Counter />
        <h1>{todo}</h1>
        <form onSubmit={addTask}>
            <input onChange={(e)=>setTodoText(e)} ref={myRef} placeholder="Type your task" />
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

// const Todo = ({task, id}) =>  <li key={id}>{task}</li>;

class Todo extends Component{
    render(){
        return  <li key={this.props.id}>{this.props.task}</li>
    }
}