import React, { Component } from 'react';

export default class Topic extends Component {
    render() {
        const { topicText, upVotes, downVotes } = this.props.topic;
        const { updateUpvote, updateDownvote } = this.props;

        return (
            <div className="row container mt-3">
                <div className="col-sm-1">
                    <button onClick={updateUpvote}>
                        <i className="far fa-thumbs-up">{upVotes}</i>
                    </button>
                </div>
                <div className="col-sm-1">
                    <button onClick={updateDownvote}>
                        <i className="far fa-thumbs-down">{downVotes}</i>
                    </button>
                </div>
                <div className="col-sm-6">{topicText}</div>
            </div>
        );
    }
}
