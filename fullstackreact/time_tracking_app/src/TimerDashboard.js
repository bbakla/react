import React, {Component} from "react";
import {TimerList} from "./TimerList";
import {ToggleableTimerForm} from "./ToggleableTimerForm";

import {NewTimer} from "./Helpers"
import {timerData} from "./data/data";
import {Timer} from "./Timer";

export class TimerDashboard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            timers: [],
        };
    }

    componentDidMount() {
        this.setState({timers : timerData.timers});
    }

    createTimer = (timer) => {
        const t = NewTimer(timer)
        this.setState({timers: [...this.state.timers, t]});
    }

    editTimer = (editedTicket) => {
        let newTimerArray = this.state.timers.map(t => {
            if (t.id === editedTicket.id) {
                return Object.assign({}, t,
                    {title: editedTicket.title,
                         project: editedTicket.project,
                    });
            } else {
                return t;
            }
        })

        this.setState({timers: newTimerArray});
    }

    deleteTimer = (timerId) => {
        this.setState({timers: this.state.timers.filter(t => t.id !== timerId)});
    }

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);

    }

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {runningSince: now,});
                } else {
                    return timer;
                }
            })
        })

}

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    render() {
        return (

                <div className="row">
                    <div>

                        <TimerList
                            timers ={this.state.timers}
                            openTimerCreationForm= {this.editTimer}
                            deleteTimer = {this.deleteTimer}
                            onStartClick = {this.handleStartClick}
                            onStopClick = {this.handleStopClick}
                        />
                        <ToggleableTimerForm
                            isOpen={false}
                            openTimerCreationForm= {this.createTimer}
                        />
                    </div>
                </div>
        );
    }

}
