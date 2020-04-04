import {CURRENT_USER, LOGIN, LOGOUT, NOTIFICATION, REGISTERED, SERVER_ADDRES} from "./types"
import axios from "axios"

export function tryLogin(auth) {
    return function (dispatch) {
        const formData = new FormData();
        formData.append("username", auth.username);
        formData.append("password", auth.password);
        axios.post("/api/login", formData)
            .then(user => {
                dispatch({type: CURRENT_USER, payload: user});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "You logout success"}});
            }).catch(reason => {
                dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data}});
            })
    }
}

export function logout() {
    return function (dispatch) {
        axios.get("/api/logout",)
            .then(auth => {
                dispatch({type: LOGOUT});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "You logout success"}});
            })
            .catch(reason => {
                dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
            })

    }
}

export function tryRegister(registryData) {
    return function (dispatch) {
        axios.post("/api/user", registryData)
            .then(user => {
                dispatch({type: REGISTERED, payload: true});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "Registry success"}});
            })
            .catch(reason => {
                dispatch({type: REGISTERED, payload: false});
                dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
            })
    }
}


