import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import {
    getTopics,
    updateUpvote,
    updateDownvote,
    addTopic
} from '../../actions';
import Topic from '../Topic/';

class Topics extends Component {
    state = { inputTopic: '' };

    componentDidMount() {
        this.props.getTopics();
    }

    updateUpvote(id) {
        this.props.updateUpvote(id);
    }

    updateDownvote(id) {
        this.props.updateDownvote(id);
    }

    addTopic(topicText) {
        this.props.addTopic(topicText);
    }

    onChangeText(e) {
        this.setState({ topicText: e.target.value });
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
                        onChange={this.onChangeText.bind(this)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary mt-2"
                        name="submitTopic"
                        id="submitTopic"
                        onClick={this.addTopic.bind(this, this.state.topicText)}
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
    { getTopics, updateUpvote, updateDownvote, addTopic }
)(Topics);
