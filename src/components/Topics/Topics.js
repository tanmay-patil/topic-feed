import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { getTopics, updateUpvote, updateDownvote } from '../../actions';
import Topic from '../Topic/';

class Topics extends Component {
    state = { topicText: '', upVote: '', downVote: '' };

    componentDidMount() {
        this.props.getTopics();
    }

    updateUpvote(id) {
        this.props.updateUpvote(id);
    }

    updateDownvote(id) {
        this.props.updateDownvote(id);
    }

    render() {
        const { topics } = this.props.currentStateTopics;
        return (
            <div className="container mt-5">
                <div className="container">
                    <input
                        type="text"
                        className="form-control"
                        name="inputTopic"
                        id="inputTopic"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary mt-2"
                        name="submitTopic"
                        id="submitTopic"
                        onClick={this.updateUpvote.bind(this, '2')}
                    >
                        Submit
                    </button>
                </div>

                {topics.map(topic => (
                    <Topic
                        key={topic.id}
                        updateUpvote={this.updateUpvote.bind(this, topic.id)}
                        updateDownvote={this.updateDownvote.bind(
                            this,
                            topic.id
                        )}
                        topic={topic}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentStateTopics: state.topicsReducer
});

export default connect(
    mapStateToProps,
    { getTopics, updateUpvote, updateDownvote }
)(Topics);
