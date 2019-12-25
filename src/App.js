import React from 'react';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {
 return (
  	<Router>
	    <div className="App">
	      <Switch>
	          <HomePage/>
        	</Switch>
	    </div>
    </Router>
  );
}

export default App;
