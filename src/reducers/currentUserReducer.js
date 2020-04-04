import {CURRENT_USER, CREATE_USER, REMOVE_LOGGED_USER, FETCH_USERS, REMOVE_USER, LOGOUT, LOGIN} from "../actions/types";

const emptyUser = {
    id : null,
    isEnable : false,
    login: "",
    username:"",
    userPermission: []
};

export default function reducer(
    state = {
        isLogin: false,
        user: emptyUser
    },
    action) {

    switch (action.type) {
        case CURRENT_USER: {
            state = {...state,
                user: action.payload.data,
                isLogin: true
            };
            break;
        }
        case LOGIN: {
            state = {...state, isLogin: true};
            break;
        }
        case LOGOUT: {
            state = {...state,
                user: emptyUser,
                isLogin: false
            };
            break;
        }
    }



    return state;
}