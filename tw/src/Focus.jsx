import { useRef } from "react";
import "./Mybox.css"
function Focus(){
    const iref=useRef()
    const iref1=useRef()
    const iref2=useRef()
    function Name(ev){
        console.log(ev.key)
        if(ev.key=="Enter" || ev.key=="ArrowDown"){
            iref1.current.focus()
        }
        
    }
    function Mail(ev){
        if(ev.key=="Enter" || ev.key=="ArrowDown"){
            iref2.current.focus()
        }
        if(ev.key=="ArrowUp"){
            iref.current.focus()
        }
    }
    function Pswrd(ev){
        if(ev.key=="ArrowUp"){
            iref1.current.focus()
        }
    }
    
    return <div>
        <div className="mybox">
            <input autoFocus ref={iref} type="text" placeholder="Enter your Name" onKeyUp={(e)=>Name(e)}></input><br/><br/>
            <div className="mybox">
                <input ref={iref1}type="email" placeholder="Enter your Email" onKeyUp={(e)=>Mail(e)}></input><br/><br/>
                <div className="mybox">
                    <input ref={iref2}type="password" placeholder="Enter Password" onKeyUp={(e)=>Pswrd(e)}></input><br/><br/>
                </div>
            </div>
        </div>
    </div>

}

export default Focus;