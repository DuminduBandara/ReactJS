import counterReducer from "./counter";
import loginReducer from "./login";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default rootReducer;