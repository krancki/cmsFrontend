import React, { Component } from "react";
import './auth.scss';
import {logout} from "../../actions/authorization";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.logout();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="alert alert-success" role="alert">
                    <h3>Success logout!</h3>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({logout:logout},dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(SignIn);