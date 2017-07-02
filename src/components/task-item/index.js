import React, {Component} from "react";

export class TaskItem extends Component {

    renderTitle(task) {
        console.log(task);
        return (
            <span>{task.title}</span>
        );
    }

    render() {
        return (
            <div>
                <span>
                    {this.renderTitle(this.props.task)}
                </span>
            </div>

        )
    }
}