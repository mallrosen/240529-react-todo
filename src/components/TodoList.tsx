import { ChangeEvent, FormEvent, useState } from "react"
import { Todo } from "../models/Todo"


    export const TodoList = () =>{

        const [todo, setTodo] = useState<Todo[]>([])
        const [text, setText] = useState<string>("")
        
        const addTodo = (e: FormEvent)=>{
            e.preventDefault()
            
            setTodo([...todo, new Todo(text)])
            setText("")
        }

        const addText = (e: ChangeEvent<HTMLInputElement>)=>{
            setText(e.target.value)
        }
        const toggleTodo = (todoToToggle:Todo) =>{
            setTodo(todo.map((t)=>{
                if(t.id === todoToToggle.id){
                    return {...t, done: !todoToToggle.done}
                } else {return t}
            }))        
        }

        const handleRemove = (removeTodo:Todo)=>{
            setTodo((todo.filter((t)=>t.id !== removeTodo.id)))
        }

    return(
    <>
    <form onSubmit={addTodo}>
    <input type="text" onChange={addText} value={text}/>
    <button>Lägg till!</button>
    </form>
    <p>{JSON.stringify(todo)}</p>
    {todo.map((t)=>{
        return <div key={t.id}>
        <p>{t.todo}</p>
        <input key={t.id} type="checkbox" onChange={()=>{toggleTodo(t)}} checked={t.done}/>
        <button onClick={()=>{handleRemove(t)}}>ta bort</button>
        </div>
    })}
    </> 
)
}