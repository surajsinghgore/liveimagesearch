import './App.css';
const Sresult=(props)=>{
    const imgs=`https://source.unsplash.com/600x400/?${props.name}`;
    return(
        <>
<div className="imgss">
    <img src={imgs} alt="image not load " />
</div>
        </>
    )
   
   }
   
   export default Sresult;