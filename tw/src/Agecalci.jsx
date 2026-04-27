import { useState } from "react"
import "./Mybox.css"
function Agecalci(){
    var d=new Date()
    d.toISOString().split("T")[0]
    const[dob,setdob]=useState(0)
    const[age,setage]=useState("")
    function data(ev){  
         setdob(ev.target.value)
         console.log(ev.target.value)
         setage(d.getFullYear()-new Date(ev.target.value).getFullYear())
    }
    return <div className="mybox" style={{textAlign:"center"}}>
           <h2>Age Calculator</h2>
           <div className="mybox">
           <h3>Enter your Date of Birth, I will Calculate your Age upto today</h3>
           <input type="date" onChange={data}></input>
           <h3>Your age is :{age} Year/Years</h3>  
           </div>      
    </div>
}
export default Agecalci