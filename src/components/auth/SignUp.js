import React, { Component } from "react";
import './auth.scss';
import {bindActionCreators} from "redux";
import {tryRegister} from "../../actions/authorization";
import {connect} from "react-redux";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            login:'',
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        const {history,registered} = this.props;

        if (registered) {
            history.push("/login")
        }
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.tryRegister({
            login: this.state.login,
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3 mb-5">Registration</h5>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input type="text" className="form-control" id="login" placeholder="Enter login"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User name</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn btn-outline-success">Register</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registered : state.registration
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({tryRegister: tryRegister}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);