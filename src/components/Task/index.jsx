import { Component } from 'react'
import TaskForm from '../TaskForm'
import TaskList from '../TaskList'
import TodoContext from '../../context/TodoContext'
import { v4 as uuidv4 } from 'uuid';


class Task extends Component {
    state = {
        isForm: false,
        formData: []
    }

    getData = async () => {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/getTodos`)
        const todosData = await response.json()
        console.log("this is getdata", todosData)
        this.setState({ formData: todosData, isForm: false })
    }

    componentDidMount() {
        console.log("this is a component did mount ")
        this.getData()

    }

    createNewTodo = async (todos) => {
        const { title, description, date, priority } = todos
        const uid = uuidv4()
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ title, description, date, todoId: uid, priority })
        }
        fetch(`${import.meta.env.VITE_URL}/api/createtodo`, options).then((data) => {
            console.log("successfully added", data)
            if (data.ok === true) {

                this.getData()
            }
        }).catch(e => {
            console.log(e)
        })

    }

    closeForm = () => {
        this.setState({ isForm: false })
    }

    deleteTodoItem = async (id) => {
        const option = {
            method: "Delete"
        }

        console.log(`${import.meta.env.VITE_URL}/api/deleteTodo/${id}`)
        fetch(`${import.meta.env.VITE_URL}/api/deleteTodo/${id}`, option).then((response) => {
            console.log(response)
            if (response.ok) {
                this.getData()
            }
        }).catch(e => console.log(e))

    }

    updateTodoItem = (id, todo) => {
        const option = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }
        fetch(`${import.meta.env.VITE_URL}/api/updateTodo/${id}`, option).then(response => {
            console.log(response)
            if (response.ok) {
                this.getData()
            }
        }).catch(e => {
            console.log(e)
        })
    }


    render() {
        const { isForm, formData } = this.state
        console.log(formData)
        return <TodoContext.Provider value={{ todos: formData, deleteTodos: this.deleteTodoItem , updateTodos:this.updateTodoItem }}>
            {isForm ? <TaskForm closeForm={this.closeForm} createTodo={this.createNewTodo} /> : ""}

            <div className='p-6 flex justify-center'>
                <div className='w-[90%] md:w-[60%] '>
                    <div className='flex justify-between p-4'>
                        <h1 className='text-fontClr font-bold text-3xl'>All Tasks</h1>
                        <button className="px-3 py-2 bg-fontClr text-[white] rounded" onClick={() => this.setState({ isForm: true })}>New Task +</button>
                    </div>
                    <div>
                        <ul className=''>
                            {formData.map(item => <TaskList key={item.todoId} todo={item} />)}

                        </ul>
                    </div>

                </div>

            </div>
        </TodoContext.Provider>
    }
}


export default Task