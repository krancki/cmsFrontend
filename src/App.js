import React from 'react';
import './App.css';
import Navbar from "./navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./login/Login";

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar/>
            <Route path="/login" component={Login}/>
        </div>
        </Router>
    );
}

export default App;
