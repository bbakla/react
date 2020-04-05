import React, {Component} from "react";
import {EditableTimer} from "./EditableTimer";

export class TimerList extends Component {

    editTimer = (timer) => {
        this.props.openTimerCreationForm(timer);
    }


    render() {
        return <div id ="timers" className="container">

            {this.props.timers.map(timer => (
                <EditableTimer key={timer.id}
                               title= {timer.title}
                               project = {timer.project}
                               elapsed = {timer.elapsed}
                               id = {timer.id}
                               runningSince = {timer.runningSince}
                               openTimerCreationForm = {this.editTimer}
                               deleteTimer = {this.props.deleteTimer}
                               onStartClick = {this.props.onStartClick}
                               onStopClick = {this.props.onStopClick}
                />
            ))}

            </div>
    }
}
