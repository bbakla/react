import React, {Component} from "react";

export class TimerForm extends Component {

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';

        return (
            <div className="row">
                <div className="container border mt-3">
                    <form>
                        <div id="" className="form-group">
                            <label className="font-weight-bold">Title</label>
                            <input type='text' className="form-control" defaultValue={this.props.title} id="title"/>
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Project</label>
                            <input type='text' className="form-control" defaultValue={this.props.project} id="project"/>
                        </div>

                        <div className="btn-group d-flex mb-2">
                            <button className="btn btn-outline-primary">{submitText}</button>
                            <button className="btn btn-outline-warning">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
