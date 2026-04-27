import { useReducer, useState } from "react";
import "./Mybox.css"
function todos_red(state,action){ 
    if(action.type=="ADD"){
        if(action.payload==""){
            alert("Please enter todo😌 !!!")
            const temp=[...state.todos]
            return {todos:temp}
        }
        else{
        let temp=[...state.todos,action.payload]
        return {todos:temp}}
    }
    if(action.type=="DEL"){
        var temp=[...state.todos]
        temp.splice(action.payload,1)
        return {todos:temp}
    }
}
function TodoslistRed(){
    const[text,settext]=useState("")
   const[state,dispatch]=useReducer(todos_red,{todos:["goto goa","play cricket","meet smrithi"]})
   return <div className="mybox">
    <h1>Todos</h1>
    <input autoFocus placeholder="Enter your todos" onKeyUp={(e)=>settext(e.target.value)}></input>
    <button onClick={()=>{dispatch({type:"ADD", payload:text})}}>Add todo</button>
    <ul>
        {state.todos.map((todo,i)=>{
            return <div className="mybox">
                <li>{todo}</li>
            <button onClick={()=>dispatch({type:"DEL",payload:i})}>Delete</button>
            </div>
        })}
    </ul>
   </div>
}
export default TodoslistRed