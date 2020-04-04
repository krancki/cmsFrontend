import React, {Component} from "react";

import "./userView.scss";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {editEnable, editUserPermission, fetchUsers} from "../../actions/userActions";

class UserView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.element.id,
            login: props.element.login,
            username: props.element.username,
            isEnable: props.element.isEnable,
            userPermission: props.element.userPermission,
            userRole: props.element.userRole
        };

        this.onEnableChange = this.onEnableChange.bind(this);
        this.getPermissionsOptions = this.getPermissionsOptions.bind(this);
        this.onSystemRoleChange = this.onSystemRoleChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(){
        this.props.editUserPermission(this.state.id, this.state.userRole);
        this.props.editUserEnable(this.state.id, this.state.isEnable);
    }

    onEnableChange() {
        this.setState({
                isEnable: !this.state.isEnable
            }
        )
    }

    onSystemRoleChange(param) {
        let newPermission =  this.state.userRole;
        if (this.state.userRole.includes(param)) {
            newPermission = this.state.userRole.filter(value => value !== param)
        } else{
            newPermission.push(param)
        }
        this.setState({
            userRole: newPermission
        })
    }


    getPermissionsOptions() {
        return (this.props.userRole || []).map(perm => {
            return <p key={this.state.id + perm}>{perm} <input key={this.state.id + perm} type="checkbox" checked={this.state.userRole.includes(perm)}
                                    onChange={() => this.onSystemRoleChange(perm)}/></p>
        });
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.state.id}</th>
                <td>{this.state.login}</td>
                <td>{this.state.username}</td>
                <td><input type="checkbox" checked={this.state.isEnable} onChange={this.onEnableChange}/></td>
                <td>{this.getPermissionsOptions()}</td>
                <td>
                    <button type="button" className="btn btn-outline-success" onClick={this.updateUser}>
                        Save
                    </button>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userRole: state.users.userRole
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers: fetchUsers,
        editUserPermission: editUserPermission,
        editUserEnable: editEnable
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserView);
