import {Component} from 'react'
import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

class Task extends Component{
    state = {
        isForm :false,
        formData : []
    }

    createNewTodo = (todos)=>{
        const {title , description , date , priority} = todos
        const {formData} = this.state
        const newTodo = {
            title,
            description,
            date,
            priority
    }
    this.setState({formData:[...formData , newTodo]})
    this.closeForm(false)

}

    closeForm = ()=>{
        this.setState({isForm:false})
    }

    
    render(){
        const {isForm , formData} = this.state
        console.log(formData)
        return <>
        <div className='z-10'>

                {isForm?<TaskForm closeForm={this.closeForm} createTodo={this.createNewTodo}/>:""}
        </div>
        <div className='p-6 flex justify-center'>
            <div className='w-[90%] md:w-[60%] border-b-2'>
                <div className='flex justify-between p-4'>
            <h1 className='text-fontClr font-bold text-3xl'>All Tasks</h1> 
            <button className="px-3 py-2 bg-fontClr text-[white] rounded" onClick={()=>this.setState({isForm:true})}>New Task +</button>
                </div>
            <ul className='-z-40'>   
                {formData.map(item=><TaskList todo={item}/>)}

            </ul>
            </div>
        </div>
        </>
    }
}


export default Task