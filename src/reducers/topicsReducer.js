import {
    GET_TOPICS,
    UPDATE_UPVOTE,
    UPDATE_DOWNVOTE,
    ADD_TOPIC
} from '../actions/actionTypes';

const initialState = { topics: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOPICS:
            return { ...state, topics: action.payload };
        case UPDATE_UPVOTE:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic.id === action.payload) {
                        topic.upVotes += 1;
                    }
                    return topic;
                })
            };

        case UPDATE_DOWNVOTE:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic.id === action.payload) {
                        topic.downVotes += 1;
                    }
                    return topic;
                })
            };

        case ADD_TOPIC:
            let topic = {
                topicText: action.payload,
                upVotes: 0,
                downVotes: 0,
                id: state.topics.length + 1
            };
            return {
                ...state,
                topics: [topic, ...state.topics]
            };

        default:
            return state;
    }
}
