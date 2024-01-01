import { useContext } from 'react'
import {  FuncContext, TodoListContext, UpdateContext } from './ContextTodo';

const TodoList = () => {
    const { todoList, setTodoList } = useContext(TodoListContext);
    const { update, setUpdate } = useContext(UpdateContext);
    const{handleDel,handleStriked,addedToImp}=useContext(FuncContext)
    const dateandtime = new Date;

    const handleUpdateChange = (e) => {
        setUpdate({ ...update, myupdate: e.target.value });
    }

    const updateTodo = (index) => {
        const newTodoList = todoList.map((uptodo, idx) => {
            if (index === idx) {
                return { ...uptodo, update: true }
            }
            return uptodo
        })
        setTodoList([...newTodoList])
    }

    const myUpdatedTodo = (index) => {
        if(update.myupdate===""){
            return
        }
        const newTodoList = todoList.map((uptodo, idx) => {
            if (index === idx) {
                return { ...uptodo, mytodo: update.myupdate, update: false }
            }
            return uptodo
        })
        setTodoList([...newTodoList])
    }

    return (
        <div>
            <ul>
                {todoList.map((lis, index) => (
                    <div key={index}
                        className='flex flex-col gap-2 '
                    >
                        <div
                            className='flex flex-row items-center '
                        >
                            <div className='flex-[0.7] flex flex-row gap-2 items-center'>
                                <input type='checkbox'
                                    checked={lis.striked}
                                    onChange={() => handleStriked(index)}
                                    className='cursor-pointer h-4 w-4'
                                />
                                <div>
                                    <li
                                        className={`${!lis.striked ? "" : "line-through text-green-500"}  text-[24px] cursor-default`}
                                    >
                                        {lis.mytodo}
                                    </li>
                                    <p className='text-[12px]'>Created on : {`${dateandtime.getMonth() + 1}/${dateandtime.getDate()}/${dateandtime.getFullYear()} - ${dateandtime.getHours()}:${dateandtime.getMinutes()}`} </p>
                                </div>
                                <button 
                                    onClick={()=>addedToImp(index)}
                                    className={`${lis.imp?" bg-yellow-950 ":"bg-yellow-600"} w-12 h-12`}
                                >
                                    {`${!lis.imp?"+":"-"}`}
                                </button>
                            </div>

                            <div className='flex flex-row gap-8 flex-[0.3]'>
                                <button
                                    onClick={() => updateTodo(index)}
                                    className='bg-sec hover:bg-opacity-80 text-black flex-[0.5]'
                                >
                                    Edit Todo
                                </button>

                                <button
                                    onClick={() => handleDel(index)}
                                    className={`bg-secondary hover:bg-opacity-80 flex-[0.5] items-end`}
                                >
                                    Delete Todo
                                </button>
                            </div>
                        </div>

                        <div className={`${lis.update ? "flex" : "hidden"} flex-row gap-2`}>
                            <input
                                value={update.mytodo}
                                onChange={(e) => handleUpdateChange(e)}
                                className='rounded-lg flex-[0.7] p-2'
                            />

                            <button
                                className='bg-blue'
                                onClick={() => myUpdatedTodo(index)}
                            > Confirm</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
