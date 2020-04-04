import React, {Component} from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPermissions, fetchUsers} from "../../actions/userActions";
import UserView from "./UserView";
import {changeColor} from "../../actions/website";


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.createUsersTable = this.createUsersTable.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPermissions();
    }

    createUsersTable() {
        const {users} = this.props;
        return (users || []).map(element => {
            return <UserView key={element.id} element={element}/>
        });
    }

    onColorChange(selectedValue){
        this.props.changeColor({pageTheme:selectedValue.target.value});
    }

    render() {
        return (
            <div id="AboutContainer"
                 className="d-flex align-content-start flex-wrap justify-content-center   pt-5 mx-5">

                <div>
                    <label htmlFor="selectWebsiteColor">Background color</label>
                    <select className="form-control" id="selectWebsiteColor" onChange={this.onColorChange} value={this.props.selectedColor}>
                        <option>WHITE</option>
                        <option>DARK</option>
                    </select>
                </div>

                <table className="table mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Login</th>
                        <th scope="col">Username</th>
                        <th scope="col">Enable</th>
                        <th scope="col">User permission</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.createUsersTable()}
                    </tbody>
                </table>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.usersList,
        selectedColor: state.website.selectedColor
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers: fetchUsers, fetchPermissions: fetchPermissions, changeColor:changeColor}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
