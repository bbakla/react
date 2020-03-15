import React, {Component} from "react";
import {TimerForm} from "./TimerForm";

export class ToggleableTimerForm extends Component {

    render() {
        if (this.props.isOpen) {
            return (
                <div className="container">
                <TimerForm/>
                </div>);
        } else {
            return (

                        <button type="button" className="btn btn-outline-primary btn-block mt-2">
                            <i className="fa fa-plus"></i>
                        </button>


            );
        }
    }

}
