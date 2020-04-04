import {NOTIFICATION} from "./types";

export function removeNotification() {
    return function (dispatch) {
        dispatch({type: NOTIFICATION, payload: {status: null, info: ""}});
    }
}
