import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
function Routing(){



return(
<Router>

  <Switch>
<Route path="/" exact component={Mainpage}></Route>

</Switch>




</Router>
)
}



export default Routing;