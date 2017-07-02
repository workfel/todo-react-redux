import {tasksReducer} from "./tasks/reducer";
import {combineReducers} from "redux";

export default combineReducers({
    tasks: tasksReducer
});