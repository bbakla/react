import React, {Component} from "react";
import {TimerForm} from "./TimerForm";
import {RenderElapsedString} from "./Helpers"

export class Timer extends Component {

    render() {
        const elapsedString = RenderElapsedString(this.props.elapsed)

        return (

            <div className="row border mt-3" >
                <div className="card-body">
                    <div className="text-left ">
                        <label className="font-weight-bold">{this.props.title}</label>
                        <div className="card-text text-black-50">{this.props.project}</div>
                    </div>

                    <h2 className="text-center">{elapsedString}</h2>


                    <div className="btn-group float-right">
                        <span> <i className="btn fa fa-edit"/></span>
                        <span> <i className="btn fa fa-trash"/></span>

                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary btn-block">Start</button>
                    </div>

                </div>

            </div>

        );

    }
}
