import { useContext } from 'react'
import {  FuncContext, TodoListContext } from './ContextTodo'

const ImpTodo = () => {
    const { todoList } = useContext(TodoListContext);
    const{handleDel,handleStriked,addedToImp}=useContext(FuncContext)
    const dateandtime = new Date;

    return (
        <div>
            <ul>
                {todoList.map((lis, index) => (
                    <div key={index}
                        className={`${lis.imp?"flex":"hidden"} flex-col gap-2 `}
                    >
                        <div
                            className='flex flex-row items-center justify-between '
                        >
                            <div className=' flex flex-row gap-2 items-center'>
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

                            <div className='flex flex-row gap-8'>
                                <button
                                    onClick={() => handleDel(index)}
                                    className={`bg-secondary hover:bg-opacity-80  items-end`}
                                >
                                    Delete Todo
                                </button> 
                            </div> 
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ImpTodo
