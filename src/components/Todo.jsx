import { useContext, useState } from 'react';
import { TodoContext, TodoListContext } from './ContextTodo';
import TodoList from './TodoList';
import ImpTodo from './ImpTodo';

const Todo = () => {
    const { todo, setTodo } = useContext(TodoContext)
    const { todoList, setTodoList } = useContext(TodoListContext);
    const[imp,setImp]=useState(false)

    const handleChange = (e) => {
        setTodo({ ...todo, mytodo: e.target.value });
    }

    const handleImp=()=>{
        setImp(!imp);
    }

    const handleAdd = (e) => {
        e.preventDefault(e);
        if (todo.mytodo === "" || todo.age === "") {
            return
        }
        setTodoList([...todoList, todo]);
        setTodo({ mytodo: "", striked: false });
    }

    const delAll = () => {
        setTodoList([])
    }


    return (
        <div className='mx-40 border-2 items-center border-sec h-screen bg-primary rounded-xl flex  flex-col shadow-sec shadow-lg'>
            <div className='p-4 text-center items-center w-full border-b-2 border-sec flex flex-row justify-between'>
                <button 
                    onClick={handleImp}
                    className={`${imp?"":"bg-yellow-600 hover:bg-yellow-700 "}bg-secondary flex-[0.2] hover:bg-opacity-80`}>
                   {`${imp?"Close Important":"+ View Important +"}`}
                </button> 
                <h1 className=''>
                    ... My Todos ...
                </h1>
                <div className='flex-[0.2]' />
            </div>

            <form className={`${imp?"hidden":"flex"} p-4 w-full  flex-row gap-2 border-b-2 border-sec`}>
                <input
                    placeholder='Enter Todo'
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                    value={todo.mytodo}
                    className='flex-[0.75] p-4 rounded-xl '
                />

                <button
                    onClick={handleAdd}
                    className='px-8 py-4 flex-[0.25] hover:bg-blue'
                >
                    Add
                </button>
            </form>

            <div className={`${imp?"hidden":""} px-8 py-4 h-full w-full flex flex-col gap-2`}>
                <TodoList />
            </div>
            <div className={`${imp?"":"hidden"} px-8 py-4 h-full w-full flex flex-col gap-2`}>
                <ImpTodo />
            </div>

            <button
                onClick={delAll}
                className='m-4 bg-secondary hover:bg-opacity-80 w-full'
            >
                Delete All
            </button>
        </div>
    )
}

export default Todo;
