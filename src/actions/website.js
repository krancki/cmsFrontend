import axios from "axios";
import {FETCH_USERS, NOTIFICATION, WEBSITE_COLOR} from "./types";

export function changeColor(color) {
    return function (dispatch) {
        axios.put("/api/website", color)
            .then(response => {
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "Website color changed!!!"}});
            }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        });
    }
}


export function getColor() {
    return function (dispatch) {
        axios.get("/api/website")
            .then((response) => {
                dispatch({type:WEBSITE_COLOR, payload:response})
            });
    }
}