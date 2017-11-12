import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// IMPORT COMPONENTS

import './App.css';
import Dashboard from './views/Dashboard';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: props.routeParams
    }   
  }

  getCurrUser() {
  	return this.state.userInfo;
  }

  render() {
  	console.log('state:', this.state.userInfo)
  	return(
      <div>
        <Dashboard />
      </div>
    )
  }
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}> 
			<IndexRoute component={Dashboard} />
		 </Route>
	</Router>, 
	document.getElementById('root')
);

registerServiceWorker();
