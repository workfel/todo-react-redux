import React, {Component, PropTypes} from 'react';

export class TaskForm extends React.Component {

    static propTypes = {
        createTask: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {title: ''};

        //Bind Event
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    clearInput() {
        this.setState({title: ''});
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const title = this.state.title.trim();
        if (title.length) this.props.createTask(title);

        this.clearInput();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       minLength="2"
                       autoFocus
                       onChange={this.handleChange}
                       value={this.state.title}/>
            </form>
        )
    }
}