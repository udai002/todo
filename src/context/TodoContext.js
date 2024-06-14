import React from "react";

const TodoContext = React.createContext({
    todos:[],
    updateTodos:()=>{},
    deleteTodos:()=>{},
})

export default TodoContext