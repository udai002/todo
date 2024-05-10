import { useState } from "react"

const TaskForm = (props) => {

    const {closeForm , createTodo} = props
    const [title , setTitle] = useState('')
    const [description , setdescription] = useState('')
    const [date , setDate] = useState('')
    const [priority , setPriority] = useState('High')
    const [error , setErrorMsg] = useState(false)

    const onFormSubmit = (e)=>{
        e.preventDefault();
        console.log(title , description , date , priority)
        if(!title && !description && !date){
            setErrorMsg(true)
        }else{       
            const todos = {
                title , description ,date , priority
            }     
            createTodo(todos);
        }

    }

    return <div className="flex justify-center z-20">
        <div className="h-[100vh] fixed top-0 w-full bg-[black]/35 pb-10" onClick={()=>{
            closeForm()}} ></div>
    <div className="fixed flex justify-center " >
            <form className="flex items-centerjustify-center rounded-lg shadow-xl w-[350px]  md:w-[400px] p-6 px-5 pl-10 bg-[white] flex-col" onSubmit={onFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg text-[#576474]">Title</label> <br />
                    <input type="text" placeholder="What need to be done ?" id="title" className="px-2 mt-2 py-2 border-2 w-[90%] rounded" onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="text-lg text-[#576474]">Description</label> <br />
                    <textarea name="description" id="Description about the task" cols={23} rows={5} className="border-2 mt-2 p-2  w-[90%] rounded" onChange={e=>setdescription(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="text-lg text-[#576474]">Till Date</label> <br />
                    <input type="date" name="date" id="date" className="border-2 mt-2 p-2 w-[90%] rounded" onChange={e=>setDate(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label for="cars" className="text-lg text-[#576474]">Priority:</label><br />
                    <select name="cars" id="cars" className="border-2 mt-2 p-2  w-[90%] rounded" onChange={e=>setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
               {error?<p className="text-[#c41f14] ">All Fields are Required</p>:""}
                    <button type="submit" className="bg-fontClr text-[white] px-4 w-[90%] mt-3 rounded-lg py-3  font-bold ">Create Task</button>
            
            </form>
       

    </div>
</div>
}

export default TaskForm