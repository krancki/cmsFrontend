import React, {Component} from "react";
import './auth.scss';
import {tryLogin} from "../../actions/authorization";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        const {currentUser, history} = this.props;

        if (currentUser.isLogin) {
            history.push("/")
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
        this.props.tryLogin({
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3 mb-5">Sign In</h5>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter login"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn btn-outline-success">Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        tryLogin: tryLogin
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);