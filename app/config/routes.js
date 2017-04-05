import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from '../components/App';
import AppContainer from '../container/AppContainer';

var routes = (
    <Router history = {browserHistory}>
        <Route path="/" component ={App} >
            <IndexRoute component= {AppContainer}/>
        </Route>
    </Router>
) 

export default routes;