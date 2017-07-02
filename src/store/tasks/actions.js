import {taskList} from "./task-list";
import {CREATE_TASK_ERROR} from "./action-types";

export function createTask(title) {
    return dispatch => {
        taskList.push({
            completed: false,
            title
        }).catch(error => dispatch(createTaskError(error)));
    }
}

export function loadTasks(title) {
    return (dispatch, getState) => {
        taskList.subscribe(dispatch);
    }
}


export function createTaskError(error) {
    return {
        type: CREATE_TASK_ERROR,
        payload: error
    };
}