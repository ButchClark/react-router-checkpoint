import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import Login from './components/Login'
import Signup from './components/Signup'
import {Provider} from 'react-redux';
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';
import UserProfile from "./components/UserProfile";

const storeInstance = store();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={storeInstance}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/profile" component={UserProfile}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
