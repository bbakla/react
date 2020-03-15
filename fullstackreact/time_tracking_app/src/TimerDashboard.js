import React, {Component} from "react";
import {TimerList} from "./TimerList";
import {ToggleableTimerForm} from "./ToggleableTimerForm";

export class TimerDashboard extends Component{

    render() {
        return (
                <div className="row">
                    <div>
                        <TimerList/>
                        <ToggleableTimerForm isOpen={true}/>
                    </div>
                </div>

        );
    }

}
