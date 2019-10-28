import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react';
import './App.css'

let idSeq = Date.now()
function Control(props) {
    const {addTodo} = props;
    const inputRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault();
        const newText = inputRef.current.value.trim();
        if (newText.length === 0) {
            return
        }
        addTodo({
            id: idSeq++,
            text: newText,
            complate: false
        })
        inputRef.current.value = ''
    }
    return (
        <div className='control'>
            <h1>todos</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text"
                       ref={inputRef}
                       className='new-todo'
                       placeholder='what needs to be done?'/>
            </form>
        </div>
    )
}

function TodoItem(propos) {
  const { todo, toggleTodo, removeTodo } = propos
  const onChange = () => {
    toggleTodo(todo.id)
  }
  const onRemove = () => {
    removeTodo(todo.id)
  }
  return(
    <li className='todo-item'>
      <input type="checkbox" onChange={onChange} checked={todo.complate}/>
      <label className={todo.complate ? 'complate' : ''}>{todo.text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
}


function Todos(props) {
    const {removeTodo, toggleTodo, todos } = props;
    return (
      <ul>
        {
          todos.map( todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            )
          })
        }
      </ul>
    )
}

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = useCallback((todo) => {
        setTodos(todos => [...todos, todo])
    }, [])
    const removeTodo = useCallback((id) => {
        setTodos(todos => todos.filter(todo => {
            return todo.id !== id
        }))
    }, [])

    const toggleTodo = useCallback((id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {
                    ...todo,
                    complate: !todo.complate
                }
                : todo
        }))
    }, [])
    return (
        <div className='todo-list'>
            <Control addTodo={addTodo}></Control>
            <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}></Todos>
        </div>
    )
}

export default TodoList;
