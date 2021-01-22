import React from 'react'
import {Route,Switch} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Service from './Service';
import Search from './Search';
import Error from './Error';
import Header from './Header';
const App=()=>{
 return(
     <>
     <Header />
<Switch>
    <Route exact path='/' component={About} />
    <Route exact path='/service' component={Service} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/search' component={Search} />
    <Route component={Error} />
</Switch>
     </>
 )

}

export default App;