import { useState,useEffect} from "react"
function Todos(){
    
        const[t,st]=useState([])
    const[text,settext]=useState("")
    useEffect(()=>
        
        {})
    function addt(){
        if(text!==""){
        st([...t,text])}
    }
    function delt(k){
        var temp=[...t]
        temp.splice(k,1)
        console.log(temp)
        st(temp)
    }
    return(<div>
          <input autoFocus id="i"type="text" onChange={(e)=>settext(e.target.value)}></input>
          <button onClick={()=>addt() }>Add Todo</button>
          {t.map((data,i)=>{
            return <div>
                <li key={i}>{data}
                <button onClick={()=>delt(i)}>Delete</button></li>
                </div>
          })}
        </div>)
}
export default Todos;