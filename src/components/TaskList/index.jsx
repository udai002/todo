import TodoContext from "../../context/TodoContext"
import EditForm from "../EditForm"
import { useState } from "react"

const TaskList = (props) => {
    const { todo , openEdit } = props
    const { title, description, date, priority , isComplete , todoId } = todo


    return  <li className=" flex flex-col items-stretch">
        <TodoContext.Consumer>
            {value=>{
                const {deleteTodos} = value
                const ConfirmDelete = ()=>{
                    const isConfirm = confirm("Are you sure want to delete ")
                    if(isConfirm){
                        console.log(todoId)
                        deleteTodos(todoId)
                    }
                }
                
                return <div class=" bg-[white] flex flex-row items-center border-[1px] justify-between mt-6 w-full text-gray-700  shadow-lg px-4  rounded-xl ">
            <div className="flex items-center">
               
                {/* <input type="checkbox" name="check" id="check"  /> */}
            <div class="p-2 pl-5">
                <h5 class={`block mb-2 font-sans ${isComplete?'line-through':''} text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900`}>
                    {title}
                </h5>
                <p class={`block font-sans text-base ${isComplete?'line-through':''} antialiased font-normal leading-relaxed text-inherit`}>
                    {description}
                </p>
                <small>Due date:{date}</small>
            </div>
            </div>
            <div class="p-6 pt-0 self-end flex flex-wrap ">
                <button
                
                    class="align-middle mt-1 mr-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-fontClr text-[white] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Edit
                </button>
                <button
                onClick={()=>{ConfirmDelete()}}
                    class="align-middle mt-1 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-fontClr text-[white] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Remove
                </button>
            </div>
        </div>}}
        </TodoContext.Consumer>
             
        
    </li>
}

export default TaskList 