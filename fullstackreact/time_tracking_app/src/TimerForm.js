import React, {Component} from "react";

export class TimerForm extends Component {

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';

        return (
            <div className="container card">

                    <form>
                        <div id="" className="form-group">
                            <label>Title</label>
                            <input type='text' className="form-control" defaultValue={this.props.title} id="title"/>
                        </div>

                        <div className="form-group">
                            <label >Project</label>
                            <input type="text" className="form-control"defaultValue={this.props.project} id="project"/>
                        </div>

                        <div className="btn-group btn-group-justified">
                            <button className="btn btn-outline-primary">{submitText}</button>
                            <button className="btn btn-outline-warning">Cancel</button>
                        </div>
                    </form>
                </div>

        );
    }

}
