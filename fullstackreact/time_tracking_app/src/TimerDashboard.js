import React, {Component} from "react";
import {TimerList} from "./TimerList";
import {ToggleableTimerForm} from "./ToggleableTimerForm";
import {createTimer, deleteTimer, getTimers, startTimer, stopTimer, updateTimer} from "./client";

import {NewTimer} from "./Helpers"


export class TimerDashboard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            timers: [],
        };
    }

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }

    loadTimersFromServer = () => {

        getTimers((serverTimers) => {
                this.setState({timers: serverTimers});
            }
        );
    };

    createTimer = (timer) => {
        const t = NewTimer(timer)

        //this.setState({timers: [...this.state.timers, t]});
        this.setState({
            timers: this.state.timers.concat(t),
        });

        createTimer(t);
    }

    editTimer = (editedTimer) => {
        let newTimerArray = this.state.timers.map(t => {
            if (t.id === editedTimer.id) {
                return Object.assign({}, t,
                    {title: editedTimer.title,
                         project: editedTimer.project,
                    });
            } else {
                return t;
            }
        });

        this.setState({timers: newTimerArray});

        updateTimer(editedTimer);
    }

    deleteTimer = (timerId) => {
        this.setState({timers: this.state.timers.filter(t => t.id !== timerId)});

        deleteTimer({id: timerId});
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
        });

        startTimer({id: timerId, start: now});

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

        stopTimer({id: timerId, stop: now});
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
