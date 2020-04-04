import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import './signedInLinks.scss'

class SignedInLinks extends Component {

    constructor(props) {
        super(props)
    }

    getLinkToDashboard() {
        const {currentUser} = this.props;
        if(currentUser.user.userPermission.includes("MANAGE_USER"))
        return (
            <li className="nav-item">
                <Link to='/dashboard' className="nav-link">Dashboard</Link>
            </li>
        )
    }

    getLinkToUserProfile() {
        return (
            <li>
                <Link to='/profile' className="nav-link user-login">{this.props.currentUser.user.login}</Link>
            </li>
        )
    }

    render() {
        return (
            <ul className="navbar-nav">

                <li className="nav-item ">
                    <Link to='/product' className="nav-link">Product</Link>
                </li>
                {this.getLinkToDashboard()}
                <li className="nav-item ">
                    <Link to='/logout' className="nav-link">Logout</Link>
                </li>
                {this.getLinkToUserProfile()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    };
};

export default connect(mapStateToProps)(SignedInLinks);
