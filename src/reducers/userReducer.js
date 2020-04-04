import {
    CURRENT_USER,
    CREATE_USER,
    REMOVE_LOGGED_USER,
    FETCH_USERS,
    REMOVE_USER,
    LOGOUT,
    LOGIN,
    SYSTEM_ROLE_TYPE, REGISTERED
} from "../actions/types";

export default function reducer(state = {
    usersList:[]
}, action) {

    switch (action.type) {
        case CREATE_USER : {
            state = {...state, users: action.payload.data};
            break;
        }
        case FETCH_USERS : {
            state = {...state, usersList: action.payload.data};
            break;
        }
        case SYSTEM_ROLE_TYPE : {
            state = {...state, userRole: action.payload.data};
            break;
        }
    }

    return state;
}