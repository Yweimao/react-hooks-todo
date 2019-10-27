import React, { useState, useEffect,useMemo, useRef,useCallback } from 'react';
import './App.css'
function Control() {
    return (
        <div></div>
    )
}


function Todos() {
    return(
        <div>
        </div>
    )
}

function TodoList() {
    const [todos, setTodos] =useState([])
    const addTodo = useCallback((todo) => {
        setTodos( todos => [...todos, todo])
    },[])
    const removeTodo = useCallback( (id) => {
        setTodos( todos => todos.filter( todo => {
            return todo.id !== id
        }))
    }, [])

    const toggleTodo = useCallback((id) => {
        setTodos( todos => todos.map( todo => {
            return todo.id  === id
                ? {
                    ...todo,
                    complate: !todo.complate
                }
                : todo
        }))
    }, [])
    return(
        <div className='todo-list'>
            <Control addTodo={addTodo}></Control>
            <Todos removeTo={removeTodo} toggleTodo={toggleTodo}></Todos>
        </div>
    )
}

export default TodoList;