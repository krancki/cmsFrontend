import {NOTIFICATION} from "../actions/types";

export default function reducer(state = {
    status: null,
    info: ""
}, action) {

    if (action.type === NOTIFICATION) {
        state = {...state,
            status: action.payload.status,
            info: action.payload.info
        }
    }

    return state;
}