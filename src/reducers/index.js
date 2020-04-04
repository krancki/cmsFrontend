import {combineReducers} from "redux";

import userReducer from "./userReducer"
import productReducer from "./productReducer"
import currentUserReducer from "./currentUserReducer";
import notificationReducer from "./notificationReducer";
import registrationReducer from "./registrationReducer";
import websiteReducer from "./websiteReducer";

export default combineReducers({
    currentUser: currentUserReducer,
    users: userReducer,
    products: productReducer,
    notification: notificationReducer,
    registration: registrationReducer,
    website: websiteReducer
})