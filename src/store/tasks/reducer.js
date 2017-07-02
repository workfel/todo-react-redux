import {Record, List} from 'immutable'
import {CREATE_TASK_SUCESS, DELETE_TASK_SUCESS} from "./action-types";


export const TasksState = new Record({
    deleted: false,
    filter: '',
    list: new List()
});


export function tasksReducer(state = new TasksState(), {payload, type}) {
    switch (type) {
        case CREATE_TASK_SUCESS:
            return state.merge({
                deleted: false,
                list: state.list.unshift(payload)
            });
        case DELETE_TASK_SUCESS:
            return state.merge({
                deleted: true,
                list : state.list.filter(task => task.key !== payload.key)
            })
        default:
            return state;
    }
}