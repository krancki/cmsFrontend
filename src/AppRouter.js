import React,{Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {BrowserHistory} from "react-router";
import Navbar from "./components/layout/Navbar";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Logout from "./components/auth/Logout";
import Product from "./components/product/Product";
import Dashboard from "./components/dashboard/Dashboard";
import {bindActionCreators} from "redux";
import {fetchPermissions, fetchUsers} from "./actions/userActions";
import {getColor} from "./actions/website";
import {connect} from "react-redux";

class AppRouter extends Component{

    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.getColor();
    }

    componentDidUpdate(){
        const {selectedColor} = this.props;

        if (selectedColor === "WHITE") {
            document.body.style.backgroundColor = "white"
        } else if (selectedColor === "DARK")
            document.body.style.backgroundColor = "#d9d9d9"
    }


    render() {
        return (
            <Router history={BrowserHistory}>
                <Navbar/>

                <Route path="/" exact component=""/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/product" component={Product}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/login" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>

            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedColor: state.website.selectedColor
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers: fetchUsers, fetchPermissions: fetchPermissions, getColor:getColor}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps) (AppRouter);