import  { createContext, useState } from 'react';

export const TodoListContext = createContext();
export const UpdateContext = createContext();
export const TodoContext = createContext()
export const FuncContext = createContext();

const ContextTodo = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [update, setUpdate] = useState({ myupdate: '', striked: false, update: false, imp: false });
    const [todo, setTodo] = useState({ mytodo: "", striked: false, update: false, imp: false })

    const handleStriked = (index) => {
        const newTodoList = todoList.map((sttodo, idx) => {
            if (index === idx) {
                return { ...sttodo, striked: !sttodo.striked }
            }
            return sttodo
        })
        setTodoList([...newTodoList])
    }

    const handleDel = (index) => {
        const newTodoList = todoList.filter((todo, idx) => {
            if (idx !== index) { return true }
            else return false
        })
        setTodoList(newTodoList)
    }

    const addedToImp = (index) => {
        const newTodoList = todoList.map((imtodo, idx) => {
            if (index === idx) {
                return { ...imtodo, imp: !imtodo.imp }
            }
            return imtodo
        })
        setTodoList([...newTodoList])
    }

    return (
        <TodoListContext.Provider value={{ todoList, setTodoList }}>
            <UpdateContext.Provider value={{ update, setUpdate }}>
                <TodoContext.Provider value={{ todo, setTodo }}>
                    <FuncContext.Provider value={{ handleStriked,handleDel,addedToImp }}>
                        {children}
                    </FuncContext.Provider>
                </TodoContext.Provider>
            </UpdateContext.Provider>
        </TodoListContext.Provider >
    );
};

export default ContextTodo;
