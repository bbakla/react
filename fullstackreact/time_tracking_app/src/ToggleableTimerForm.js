import React, {Component} from "react";
import {TimerForm} from "./TimerForm";

export class ToggleableTimerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    handleFormOpen = () => {
        this.setState({isOpen: true});
    }

    handleFormClose = () => {
        this.setState({isOpen: false});
    }

    handleFormSubmit = (timer) => {
        this.props.openTimerCreationForm(timer);
        this.handleFormClose();
    }

    render() {
        if (this.state.isOpen) {
            return (
                <div className="container">
                    <TimerForm
                        createTimer={this.handleFormSubmit}
                        onFormClose={this.handleFormClose}
                    />
                </div>);
        } else {
            return (
                <button type="button" className="btn btn-outline-primary btn-block mt-2" onClick={this.handleFormOpen}>
                    <i className="fa fa-plus"></i>
                </button>
            );
        }
    }
}
