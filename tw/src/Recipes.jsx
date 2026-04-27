import {useState,useEffect} from "react";
function Recipes(){
    const[recipe,setrecipe]=useState([])
    const [selected,setselected]=useState(null)
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then(data=>setrecipe(data.recipes))
    },[])
    if(selected!=null){
        console.log(selected)
        return <div style={{
            border:"2px solid red",
            width:"400px",
            textAlign:"center",
            position:"fixed",
            borderRadius:"10px"}}>
             <h1>{selected.id}</h1>
             <h1>{selected.name}</h1>
             <img src={selected.image} style={{width:"200px",borderRadius:"10px"}}></img>
        </div>
    }
    return(<div style={
        {display:"flex",
        flexWrap:"wrap",gap:"20px",
        justifyContent:"center",
        border:"2px solid red",
        borderRadius:"20px",
        background: "radial-gradient(circle, #b35356, #b44a2d)"}}>
        {recipe.map((r)=>(
            <div onClick={()=>{setselected(r)}}>
           <ul style={{border:"2px solid white",width:"180px",borderRadius:"20px",boxShadow:"2px 2px 2px 2px",justifyContent:"center"}}>
            <li style={{listStyleType:"none"}}>{r.id}</li>
            <li style={{listStyleType:"none"}}>{r.name}</li>
            <li style={{listStyleType:"none"}}><img src={r.image} style={{width: "150px",borderRadius:"20px"}}/></li>
           </ul>
           </div>))}
    </div>)
}
export default Recipes;