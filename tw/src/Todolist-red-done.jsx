import { useReducer, useState } from "react"

function todoreducer(state,action){
   if(action.type=="ADD"){
    return [...state.todos,action.payload]
   }
   return state
}
function Todolist(){
    const[text,settext]=useState("")
const[state,dispatch]=useReducer(todoreducer,{todos:["Goto Goa","Meet Smrithi","Play Cricket"]})
return<div>
    <input type="text" onKeyUp={(e)=>{settext(e.target.value)}} placeholder="Enter Your todo here" autoFocus></input>
    <button onClick={()=>{dispatch({type:"ADD",payload:text})}}>Add Todo</button>
    <ul>
        {todos.map((todo)=>{
          return <li>{todo}</li>
        })}
    </ul>
</div>
}
export default Todolist