import {
    CURRENT_USER,
    FETCH_USERS,
    CREATE_USER,
    REMOVE_USER,
    LOGIN,
    LOGOUT,
    SYSTEM_ROLE_TYPE,
    NOTIFICATION
} from "./types"
import axios from "axios";


export function fetchCurrentUser() {
    return function (dispatch) {
        axios.get("/api/user")
            .then(user => {
                dispatch({type: CURRENT_USER, payload: user});
            }).catch(
            dispatch({type: LOGOUT})
        );

    }
}

export function fetchUsers() {
    return function (dispatch) {
        axios.get("/api/user/all")
            .then(users => {
                dispatch({type: FETCH_USERS, payload: users});
            }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        });
    }
}

export function editUserPermission(userId, roles) {
    return function (dispatch) {
        axios.put("/api/user/" + userId + "/change-role", roles)
            .then(user => {
                dispatch({type: CREATE_USER, payload: user});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "User permission has been changed"}});
            }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        });
    }
}

export function editEnable(userId, enable) {
    return function (dispatch) {
        axios.put("/api/user/" + userId + "/set-enable", {enable})
            .then(user => {
                dispatch({type: CREATE_USER, payload: user});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "User permission has been changed"}});
            }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        });
    }
}

export function fetchPermissions() {
    return function (dispatch) {
        axios.get("/api/user/system-role")
            .then(data => {
                dispatch({type: SYSTEM_ROLE_TYPE, payload: data})
            }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        })
    }
}

