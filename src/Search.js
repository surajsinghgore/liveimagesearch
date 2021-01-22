import Sresult from './Sresult';
import './App.css';
import { useState } from 'react';
const Search=()=>{

    const [img,setimg]=useState("");
    const inputs=(e)=>{
        setimg(e.target.value)   
    }
    return(
        
        <>
        <div className="Searchbar">
   <input type="text" onChange={inputs} value={img} placeholder="Search Image Here by typing..."/>
   </div>
   {img===""?null:<Sresult name={img}/>}
   
        </>
    )
   
   }
   
   export default Search;