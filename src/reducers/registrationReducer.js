
import {
   REGISTERED
} from "../actions/types";

export default function reducer(state = null, action) {

    if (action.type === REGISTERED) {
            state = true;
        }
    return state;
}