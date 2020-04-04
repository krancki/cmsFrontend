import {

} from "../actions/types";
import {WEBSITE_COLOR} from "../actions/types";

export default function reducer(state = {
    selectedColor: "WHITE"
}, action) {

    if (action.type === WEBSITE_COLOR) {
        console.log(action.payload.data);
            state = {...state, selectedColor: action.payload.data.pageTheme};
        }
    return state;
}