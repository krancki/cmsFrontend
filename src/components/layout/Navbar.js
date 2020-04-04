import React, {Component} from "react";
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignetOutLinks';
import {Nav, Navbar} from "react-bootstrap";
import "./navbar.scss";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchCurrentUser} from "../../actions/userActions";
import {removeNotification} from "../../actions/notification";
import axios from "axios";

class MainNavbar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUser()
    }

    isUserLogin() {
        if (this.props.currentUser.isLogin) {
            return <SignedInLinks/>
        }
        return <SignedOutLinks/>
    }



    showAlert() {
        const {notification} = this.props;

        if(notification.status === "success"){
            setTimeout(() =>{ this.props.removeNotification()}, 3000);
            return (<div className="alert alert-success bottom-alert" role="alert">
                { notification.info}
            </div>)
        }
        if(notification.status === "error"){
            setTimeout(() =>{ this.props.removeNotification()}, 3000);
            return (<div className="alert alert-danger bottom-alert" role="alert">
                {notification.info}
            </div>)
        }
        return null
    }

    render() {
        return (
            <div>
                {this.showAlert()}
                <Navbar className="navbar navbar-light px-5" expand="sm">

                    <Link to='/' className="navbar-brand h2"><span
                        className="font-weight-bold text-primary h2">CMS</span>Total</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            {this.isUserLogin()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        notification: state.notification
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchCurrentUser: fetchCurrentUser, removeNotification:removeNotification}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MainNavbar);
