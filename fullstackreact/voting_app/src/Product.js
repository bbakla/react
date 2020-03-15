import React, {Component} from "react";

export class Product extends Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id)
    }

    render() {
        return (
            <div className="row card-body">

                <div className="col-sm-4">

                    <img className="img-fluid" src={require(`${this.props.productImageUrl}`)} alt={this.props.productImageUrl.toLocaleString()}/>

                </div>


                <div className="col-sm-4">
                    <div className="popover-header">
                        <a  onClick={this.handleUpVote}>
                            <i className="fa fa-caret-up"/>
                        </a>
                        {this.props.votes}

                    </div>
                    <div className="card-body">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>

                        <div className="col-sm-4 card-text">
                            <span>submitted by:</span>
                            <img className="card-img-bottom rounded-circle circle-image"
                                 src={require(`${this.props.submitterAvatarUrl}`)} alt={this.props.submitterAvatarUrl.toLocaleString()}/>
                        </div>
                    </div>
                     <div>
                    </div>
                </div>

            </div>

        );
    }

}
