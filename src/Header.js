import {NavLink} from 'react-router-dom';
import './App.css';
const Search=()=>{
    return(
        <>
 <header>
 <NavLink exact activeClassName='active' to='/'><li>About</li></NavLink>
<NavLink exact activeClassName='active' to='/service'><li>Service</li></NavLink>
 <NavLink exact activeClassName='active' to='/contact'><li>Contact</li></NavLink>
 <NavLink exact activeClassName='active' to='/search'><li>Search</li></NavLink>
     {/* <li><a href="#">Contact</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Service</a></li>
     <li><a href="#">Search</a></li> */}
 </header>
        </>
    )
   
   }
   
   export default Search;