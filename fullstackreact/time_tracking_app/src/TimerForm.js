import React, {Component} from "react";

export class TimerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id || '',
            title: this.props.title || '',
            project: this.props.project || '',
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    passNewTimerValues = (event) => {
        event.preventDefault();

        this.props.createTimer({
             id: this.props.id,
             title: this.state.title,
             project: this.state.project,
         });
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';

        return (
            <div className="row">
                <div className="container border mt-3">
                    <form>
                        <div id="" className="form-group">
                            <label className="font-weight-bold">Title</label>
                            <input name="title"
                                   type='text'
                                   className="form-control"
                                   defaultValue={this.state.title}
                                   onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Project</label>
                            <input name ="project"
                                   type='text'
                                   className="form-control"
                                   defaultValue={this.state.project}
                                   onChange={this.handleChange}
                            />
                        </div>

                        <div className="btn-group d-flex mb-2">
                            <button className="btn btn-outline-primary"
                                    onClick={this.passNewTimerValues}>{submitText}</button>
                            <button className="btn btn-outline-warning"
                            onClick={this.props.closeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
