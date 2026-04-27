import { useState } from "react"
import "./Mybox.css"
function Temperature(){
  function celsius(ev){
    setfh((ev.target.value)*9/5+32)
    setkel(Number(ev.target.value)+273.15)
    setcels(ev.target.value)
  }
  function fahrenheit(ev){
    setfh(ev.target.value)
    setcels((ev.target.value-32)*5/9)
    setkel((ev.target.value-32)*5/9+273.15)
  }
  function kelvin(ev){
    setkel(ev.target.value)
    setcels(ev.target.value-273.15)
    setfh((ev.target.value-273.15)*9/5+32)
  }
  const[cels,setcels]=useState(0)
  const[fh,setfh]=useState(32)
  const[kel,setkel]=useState(273.15)
    return <div className="mybox">
                  <h2>Temperature Conversion</h2>
    <div className="mybox" style={{display:"flex"}}>
           <div className="mybox">
             <h5>Celsius degrees</h5>
             <input type="number" autoFocus value={cels} onChange={celsius}></input>
           </div>
           <h1>{"\u003D"}</h1>
          <div className="mybox">
             <h5>Fahrenheit</h5>
             <input type="number" value={fh} onChange={fahrenheit}></input>
           </div>
            <h1>{"\u003D"}</h1>
           <div className="mybox">
             <h5>Kelvin</h5>
             <input type="number" value={kel} onChange={kelvin}></input>
           </div>
    </div>
    </div>
}
export default Temperature