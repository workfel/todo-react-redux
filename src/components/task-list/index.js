import React, {Component} from "react";
import {TaskItem} from "../task-item";

export class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks.map((task, index) => {
                return this.renderTaskItem(task, index)
            })
        };

        console.log(this.state);
    }

    renderTaskItem(task, index) {
        return (
            <TaskItem
                key={index}
                task={task}
            />
        );
    }

    render() {
        return (
            <div className="task-list">
                <h2>List</h2>
                {this.state.tasks}
            </div>
        );
    }
}
