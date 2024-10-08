import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";

    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList)); // to convert json value in string , because in localstorage we can only store string value 
    }, [todoList])

    const removeTodo = (id) => {
        setTodoList((Todo) => {
            return Todo.filter((todo) => {
                return todo.id !== id
            })
        })
    }
    const toggleTodo = (id) => {
        setTodoList((Todo) => {
            return Todo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })
    }
    const editTodo = (id , newText) => {
        setTodoList((Todo) => {
            return Todo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text: newText };
                }
                return todo;
            }) 
        });
    }
    const scheduleTodo = (id, time) => {
        setTodoList((Todo) => {
            return Todo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, scheduledTime: time };
                }
                return todo;
            }) 
        });
    }

    return (
        <div className='bg-white place-self-center w-11/12 max-w-xl flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className='text-3xl font-semibold'>Todo List</h1>
            </div>
            <div className='flex items-start my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD + </button>
            </div>

            <div>
                {todoList.map((item, index) => {
                    return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} remove={removeTodo} toggle={toggleTodo} edit={editTodo} schedule={scheduleTodo} />
                })}

            </div>
        </div>
    )
}

export default Todo

