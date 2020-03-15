import React, {Component} from "react";
import {EditableTimer} from "./EditableTimer";

export class TimerList extends Component {
    render() {
        return <div className="container">

                <EditableTimer title='Learn React'
                       project = 'Web Domination'
                       elapsed = '8565555'
                       runningSince = {null}
                       editFormOpen = {false}
                />

                <EditableTimer title='Learn React2'
                       project = 'Web Domination2'
                       elapsed = '3890985'
                       runningSince = {null}
                       editFormOpen = {true}
                />
            </div>

    }
}
