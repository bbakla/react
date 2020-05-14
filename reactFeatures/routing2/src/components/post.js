import React, {Component} from "react";

function Post({ match }) {
    let params = match.params;
    return (
        <div>
            In React Router v4, you get parameters from the props. Current parameter
            is <strong>{params.slug}</strong>
        </div>
    );
}

export default Post;
