import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './webpages/home';
import User from './webpages/user';
import Index from './webpages/index';
import { BasicTable } from './webpages/BasicTable';


const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route exact path = "/index" component = {Index} />
            <Route exact path = "/basictable" component = {BasicTable}/>
        </Router>
    );
};
export default Webpages;