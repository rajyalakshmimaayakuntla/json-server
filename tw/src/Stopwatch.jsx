import { useState,useRef } from "react";
function Stopwatch()
{
    const t=useRef(0)
    const[sec,setsec]=useState(0)
    const[min,setmin]=useState(0)
    function play(){
        t.current=setInterval(()=>
            {
            setsec((s)=>
                {
                if(s==59)
                    {
                        setmin(m=>m+1)
                        return 0
                    }
                else
                    {
                      return s+1
                    }
                })
        },100)
    }
    function pause(){
     clearInterval(t.current)
    }
    function stop(){
       clearInterval(t.current)
       setmin(0) 
       setsec(0)
    }
    return(<div>
        <h2>Time : {min}:{sec}</h2>
        <button onClick={()=>play()}>Play</button>
        <button onClick={()=>pause()}>Pause</button>
        <button onClick={()=>stop()}>Stop</button>
    </div>)
}
export default Stopwatch