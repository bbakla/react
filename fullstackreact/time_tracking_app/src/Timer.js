import React, {Component} from "react";
import {RenderElapsedString} from "./Helpers"

export class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isStartButton : true,
            buttonName : "Start",
            buttonClass : "btn btn-outline-primary btn-block",
        };
    }

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    handleStartStop = () => {
        if(this.state.isStartButton) {
            this.setState({isStartButton:false});
            this.setState({buttonClass: "btn btn-outline-danger btn-block"})
           this.props.onStartClick(this.props.id);
        } else {
            this.setState({isStartButton:true});
            this.props.onStopClick(this.props.id);
            this.setState({buttonClass: "btn btn-outline-primary btn-block"})
        }
        this.setState({buttonName: this.state.isStartButton ? "Stop" : "Start"});
    }

    render() {
        const elapsedString = RenderElapsedString(this.props.elapsed, this.props.runningSince);

        return (

            <div className="row border mt-3" >
                <div className="card-body">
                    <div id={this.props.id + "-" + this.props.title} className="text-left ">
                        <label className="font-weight-bold">{this.props.title}</label>
                        <div className="card-text text-black-50">{this.props.project}</div>
                    </div>

                    <h2 className="text-center">{elapsedString}</h2>
                    <div className="btn-group float-right">
                        <span> <i className="btn fa fa-edit" onClick={this.props.handleEditClick}/></span>
                        <span> <i className="btn fa fa-trash" onClick={this.handleTrashClick}/></span>
                    </div>
                    <div>
                        <button type="button" className={this.state.buttonClass} onClick={this.handleStartStop}>{this.state.buttonName}</button>
                    </div>
                </div>
            </div>
        );

    }
}
