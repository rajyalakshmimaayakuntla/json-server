import { useState } from "react";
function Sample(){
    const[v,sv]=useState(0)
    function inc(){
        sv(v+1)
    }
    function dec(){
        sv(v-1)
    }
    return(<div>
        <h1>Count : {v}</h1>
        <button onClick={()=>dec()}>Decrement</button>
        <button onClick={()=>inc()}>Increment</button>
    </div>)
}
export default Sample;