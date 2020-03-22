import React, {Component} from "react";
import {TimerForm} from "./TimerForm";
import {Timer} from "./Timer";

export class EditableTimer extends Component{

    constructor(props) {
        super(props);

        this.state = {
            editFormOpen: false,
        };
    }

    openForm = () => {
        this.setState({editFormOpen: true});
    }

    closeForm = () => {
        this.setState({editFormOpen: false});
    }


    editTimer = (timer) => {
        this.props.openTimerCreationForm(timer);
        this.closeForm();
    }

    render() {
        if(this.state.editFormOpen) {
            return (<TimerForm
                id = {this.props.id}
                title={this.props.title}
                project={this.props.project}
                closeForm = {this.closeForm}
                createTimer = {this.editTimer}
            />);

        } else {
            return (
                <Timer
                    id = {this.props.id}
                    title = {this.props.title}
                    project = {this.props.project}
                    elapsed = {this.props.elapsed}
                    runningSince = {this.props.runningSince}
                    handleEditClick= {this.openForm}
                    onTrashClick = {this.props.deleteTimer}
                    onStartClick = {this.props.onStartClick}
                    onStopClick = {this.props.onStopClick}
                />
            );
        }

    }

}
