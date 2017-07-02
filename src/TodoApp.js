import React, {Component} from 'react';
import {taskList} from "./store/tasks/task-list";
import {TaskList} from "./components/task-list";
import {TaskForm} from "./components/task-form";

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: taskList
        };

        this.onCreateTask = this.onCreateTask.bind(this);
    }

    onCreateTask(title) {
        this.setState((prevState) => {
            tasks: prevState.tasks.push({
                title: title
            })
        })
    }

    render() {
        return (
            <div>
                <h1> TODO APP</h1>
                <hr/>
                <TaskForm createTask={this.onCreateTask}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}