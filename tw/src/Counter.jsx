import { useReducer } from "react"
import  "./Mybox.css"
function Countreducer(state,action){
    if(action.type=="inc"){
        return {count:state.count+1}
    }
    if(action.type=="dec"){
        return {count:state.count-1}
    } 
    return state  
}
function Counter(){
    var [state,dispatch]=useReducer(Countreducer,{count:0})
    return <div className="mybox"><h1>Counter : {state.count}</h1>
    <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
    <button onClick={()=>{dispatch({type:"inc"})}}>+</button>
    </div>
}
export default Counter